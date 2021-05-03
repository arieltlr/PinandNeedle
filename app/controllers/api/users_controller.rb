class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            @boards = []
            @pins = []
            @followers = []
            @users_followed = []
            render :show
        else
            render json: @user.errors.full_messages, status: 404
            
        end
    end

    def show
        @user = User.find(params[:id])
        @boards = Board.where(user_id: params[:id]).includes(:pins).to_a
        @pins = []
        if @boards 
            @boards.each do |board|
                @pins.concat(board.pins.includes(photo_attachment: :blob).to_a)
            end
        end
        # @pins = @user.pins.includes(photo_attachment: :blob).to_a
        @followers = User.where(id: @user.followers.pluck(:follower_id)).includes(:followers).to_a
        @users_followed = User.where(id: @user.users_followed.pluck(:user_id)).includes(:followers).to_a
        
        render :show
    end



    private
    def user_params
        params.require(:user).permit(:email, :age, :password)
    end
end