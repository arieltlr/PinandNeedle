class Api::SessionsController < ApplicationController

    def create
        @user = User.find_user_by_credentials(params[:user][:email], params[:user][:password]);
        if @user
            login(@user)
            @boards = Board.where(user_id: @user.id).includes(:pins).to_a
            @pins = @user.pins.includes(photo_attachment: :blob).to_a
            @followers = User.where(id: @user.followers.pluck(:follower_id)).includes(:followers).to_a
            @users_followed = User.where(id: @user.users_followed.pluck(:user_id)).includes(:followers).to_a
            render "api/users/show"
        else
            render json: ['Invalid credentials'], status: 404 
        end
    end

    def destroy
        if current_user
            logout
            render json: {}
        else
             render json: ['Not logged in'], status: 404
        end

    end

end