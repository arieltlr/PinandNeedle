class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            @boards = Board.where(user_id: params[:id]).includes(:pins).to_a
            @pins = []
            @boards.each do |board|
            @pins.concat(board.pins.includes(photo_attachment: :blob).to_a)
        end
            render :show
        else
            render json: @user.errors.full_messages, status: 404
            
        end
    end

    def show
        @user = User.find(params[:id])
        @boards = Board.where(user_id: params[:id]).includes(:pins).to_a
        @pins = []
        @boards.each do |board|
            @pins.concat(board.pins.includes(photo_attachment: :blob).to_a)
        end
        # @pins = @user.pins.includes(photo_attachment: :blob).to_a
        render :show
    end



    private
    def user_params
        params.require(:user).permit(:email, :age, :password)
    end

end