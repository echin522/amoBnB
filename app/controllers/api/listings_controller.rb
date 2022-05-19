class Api::ListingsController < ApplicationController
    def show
        @listing = Listing.find_by(id: params[:id])
        render :show
    end

    def index
        @listings = Listing.all
        render :index
    end

    def create
        @listing = Listing.create!(listing_params)
        render :show
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
        params.require(:listing).permit(:title, :description, :address, :lat, :lng, :max_guests, :num_rooms, :num_beds, :num_baths, :owner_id, :price_per_night, :location)
    end

    def bounds
        params[:bounds]
    end

end