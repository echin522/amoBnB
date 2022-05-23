class Api::ReviewsController < ApplicationController
    def create
        if logged_in?
           @review = Review.create!(review_params)
           render json: @review
        #    render "api/reviews/show" 
        else
            render json: "You must be signed in to write a review!"
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if current_user
            @review.destroy
        else
            render json: "You cannot delete this review", status: 404
        end
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body, :listing_id, :reviewer_id)
    end
end
