class Api::BoardsController < ApplicationController

    def create
        @board = Board.new(board_params)
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 404
            
        end
    end

    def edit
        @board = Board.find(params[:id])
        render :edit
    end

    def index
        @boards = Board.find_by(user_id: params[:user_id])
        render :index
    end

    def update
        @board = current_user.boards.find_by(id: params[:id])
        if @board && @board.update_attributes(board_params)
            render :show
        else
            render @board.errors.full_messages
        end
    end

    def destroy
    end

    def show
        @board = Board.find_by(id: params[:id])
        if @board 
            render :show
        else
            render json: ["Looks like that board doesn't exist yet"], status: 404
        end
    end

    private
    def board_params
        params.require(:board).permit(:name, :description, :user_id)
    end

end