class Api::ReviewsController < ApplicationController
    def create
        if !logged_in? 
            render json: "You must be signed in to write a review!"
            return
        end

        @review = Review.new(review_params)
        @review.reviewer_id = current_user.id
        if @review.save
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
        params.require(:review).permit(:rating, :body, :listing_id, :reviewer_id)
    end
end
