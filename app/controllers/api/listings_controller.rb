class Api::ListingsController < ApplicationController
    def show
        @listing = Listing.find_by(id: params[:id])
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
        params.require(:listing).permit(:title, :description, :address, :lat, :lng)
    end

    def bounds
        params[:bounds]
    end

end