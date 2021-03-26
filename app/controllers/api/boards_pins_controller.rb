class Api::BoardsPinsController < ApplicationController

    def create
        if params[:boardPin][:boardPin][:board_id] == ""
            @board = Board.create!({user_id: params[:boardPin][:newBoard][:user_id], name: "Quick Saves", description: "", owner_email: params[:boardPin][:newBoard][:owner_email]})
            @user = User.find_by(id: params[:boardPin][:newBoard][:user_id] )
            @pins = @user.pins.includes(photo_attachment: :blob).to_a
            @boardsPin = BoardsPin.new(board_id: @board.id, pin_id: params[:boardPin][:boardPin][:pin_id])
            if @boardsPin.save
                render :quicksave
            else
                render json: @boardsPin.errors.full_messages, status: 404
            end
        else
            debugger
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