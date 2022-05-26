class Api::ReservationsController < ApplicationController
    def show
        @reservation = Reservation.find_by(id: params[:id])
        render :show
    end

    def index
        @reservations = Reservation.all
        render :index
    end

    def create
        @reservation = Reservation.create!(reservation_params)
        render :show
    end
    
    def update
        
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])
        @reservation.destroy
        render :index
    end

    private
    
    def reservation_params
        params.require(:reservation).permit(:start_date, :end_date, :num_guests, :listing_id, :user_id)
    end
end
