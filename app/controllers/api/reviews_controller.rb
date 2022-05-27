class Api::ReviewsController < ApplicationController
    def create
        if !logged_in? 
            render json: "You must be signed in to write a review!"
            return
        end

        @review = Review.new(review_params)
        
        @review.reviewer_id = current_user.id
        @review.rating = (@review.cleanliness_rating + @review.check_in_rating + @review.location_rating + @review.communication_rating + @review.accuracy_rating + @review.value_rating) / 6.0

        if @review.save!
            render :show
        else
            render json: @review.errors.full_messages, status: 422
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
        params.require(:review).permit(:listing_id, :cleanliness_rating, :check_in_rating, :location_rating, \
            :communication_rating, :accuracy_rating, :value_rating, :body)
    end
end
