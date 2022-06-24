class Api::ReservationsController < ApplicationController
    def show
        @reservation = Reservation.find_by(id: params[:id])
        # listing = Listing.where(id: @reservation.listing_id)
        # owner = User.where(id: listing.owner_id)
        # @reservation.listing = listing
        # @reservation.owner = owner
        # @reservation.owner_name = owner.fname + " " + owner.lname
        # @reservation.address = listing.address
        # @reservation.location = listing.address.split[1]
        # @reservation.photos = listing.photos
        render :show
    end

    def index
        if current_user
            @reservations = Reservation.where(user_id: current_user.id)
        else
            @reservations = Reservation.all
        end
        render :index
    end

    def create
        if !current_user
            render json: "You must be signed in!"
            return
        end
        year = Date.today().year.to_s
        month = Date.today().month < 10 ? "0" + Date.today().month.to_s : Date.today().month.to_s
        day = Date.today().day < 10 ? "0" + Date.today().day.to_s : Date.today().day.to_s
        today = year + "-" + month + "-" + day

        if reservation_params[:start_date] < today or reservation_params[:end_date] <= reservation_params[:start_date]
            render json: "Invalid date", status: 401
            return
        end

        listing = Listing.find_by(id: reservation_params[:listing_id])
        reservations = listing.reservations
        checkIn = reservation_params[:start_date]
        checkOut = reservation_params[:end_date]

        if reservations.where("end_date > ?", checkIn).where("start_date < ?", checkOut).length > 0
            render json: "Dates unavailable", status: 401
            return
        end

        @reservation = Reservation.new(reservation_params)
        @reservation.user_id = current_user.id
        if @reservation.save!
            render :show
        else
            render json @reservation.errors.full_messages
        end
    end
    
    def update
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation and @reservation.user_id == current_user.id and @reservation.update(reservation_params) 
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])
        @reservation.destroy
        render json: @reservation
    end

    private
    
    def reservation_params
        params.require(:reservation).permit(:start_date, :end_date, :num_guests, :listing_id)
    end
end
