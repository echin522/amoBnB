class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        if logged_in?
            render json: ['You are already signed in']
        end
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render json: @user
            # render "/api/users/show"
        else
            render json: ['Invalid email or password.'], status: 401
        end

    end

    def destroy
        if current_user
            logout
            render plain: "successfully logged out"
            # render "/api/users/show"
        else
            render json: ["Already signed out"], status: 404
        end
    end
end
