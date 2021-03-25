class Api::BoardsPinsController < ApplicationController

    def create
        debugger
        if params[:boardPin][:boardPin][:board_id] == ""
            @board = Board.create!({user_id: params[:boardPin][:newBoard][:user_id], name: "Quick Saves", description: "", owner_email: params[:boardPin][:newBoard][:owner_email]})
            @boardsPin = BoardsPin.new(board_id: @board.id, pin_id: params[:boardPin][:boardPin][:pin_id])
            debugger
            if @boardsPin.save
                debugger
                render :show
            else
                render json: @boardsPin.errors.full_messages, status: 404
            end
        else
            @boardsPin = BoardsPin.new(boards_pins_params)
            if @boardsPin.save
                render :show
            else
                render json: @boardsPin.errors.full_messages, status: 404
                
            end
        end
        
    end

    private
    def boards_pins_params
        params.require(:boardPin).permit(:board_id, :pin_id)
    end
end