class Api::ListingsController < ApplicationController
    def show
        @listing = Listing.find_by(id: params[:id])
        render :show
    end

    def index
        if params[:location]
            @listings = Listing.where("location LIKE '%#{params[:location]}%'").where("max_guests >= #{params[:max_guests]}")
        else
            @listings = Listing.all
        end
        
        # @listings = Listing.
        render :index
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.owner_id = current_user.id
        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end
    
    def update
        
    end

    def destroy
        @listing = Listing.find_by(id: params[:id])
        @listing.destroy
        render :index
    end

    private
    
    def listing_params
        params.require(:listing).permit(:title, :description, :address, :lat, :lng, :max_guests, :num_rooms, :num_beds, :num_baths, :owner_id, :price_per_night, :location, photos: [])
    end

    def search_params
        params.permit(:location, :max_guests)
    end

    def bounds
        params[:bounds]
    end

end