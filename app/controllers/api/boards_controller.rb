class Api::BoardsController < ApplicationController

    def create
        @board = Board.new(board_params)
        @user = User.find(@board.user_id)
        @boards = Board.where(user_id: @board.user_id).includes(:pins).to_a
        @ownerPins = @user.pins.includes(photo_attachment: :blob).to_a
        @pins = []
        if @board.save
            render :new
        else
            
            render json: @board.errors.messages[:name], status: 404
            
        end
    end

    def edit
        @board = Board.find(params[:id])
        # @user = User.find_by(id: @board.user_id)
        render :edit
    end

    def update
        @board = Board.find(params[:id])
        @user = User.find(@board.user_id)
        @boards = Board.where(user_id: @board.user_id).includes(:pins).to_a
        @pins = @user.pins.includes(photo_attachment: :blob).to_a
        if @board && @board.update_attributes(board_params)
            render :show
        else
            render json: @board.errors.full_messages
        end
    end

    def destroy
        @board = Board.find(params[:id])
        @pins = @board.pins.includes(photo_attachment: :blob).to_a
        if @board.destroy
            @pins.each do |pin|
                pin.destroy
            end
            render :delete
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def show
        @board = Board.find_by(id: params[:id])
        @user = User.find(@board.user_id)
        @boards = Board.where(user_id: @board.user_id).includes(:pins).to_a
        @pins = @user.pins.includes(photo_attachment: :blob).to_a
        if @board 
            render :show
        else
            render json: ["Looks like that board doesn't exist yet"], status: 404
        end
    end

    private
    def board_params
        params.require(:board).permit(:name, :description, :user_id, :owner_email)
    end

end