class Api::BoardsPinsController < ApplicationController

    def create

        @boardsPin = BoardsPin.new(boards_pins_params)
        if @boardsPin.save
            render :show
        else
            render json: @boardsPin.errors.full_messages, status: 404
            
        end
    end

    private
    def boards_pins_params
        params.require(:boardPin).permit(:board_id, :pin_id)
    end
end