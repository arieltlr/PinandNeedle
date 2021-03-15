class Api::PinsController < ApplicationController

    def create
        @pin = Pin.new(pin_params)
        if @pin.save
            @board = Board.find(params[:board_id])
            debugger
            BoardsPin.create!(board_id: params[:board_id], pin_id: @pin.id)
            @user = User.find(@pin.user_id)
            @boards = Board.where(user_id: @pin.user_id).includes(:pins).to_a
            @pins = @user.pins.includes(photo_attachment: :blob).to_a
            render :show
        else
            render json: @pin.errors.full_messages, status: 404
            
        end
    end

    def edit
        @pin = Pin.find(params[:id])
        # @user = User.find_by(id: @pin.user_id)
        render :edit
    end

    def index
        @pins = Pin.all
        render :index
    end

    def update
        @pin = Pin.find_by(id: params[:id])
        @pin_to_delete = Pin.find_by(id: params[:pin][:id])
        debugger
        if @pin && @pin.update_attributes(pin_params)
            @user = User.find(@pin.user_id)
            @boards = Board.where(user_id: @pin.user_id).includes(:pins).to_a
            @pins = @user.pins.includes(photo_attachment: :blob).to_a
                if params[:pin][:new_board_id]
                    debugger
                    @boardsPins = BoardsPin.where(pin_id: @pin.id, board_id: params[:pin][:board_id])
                    BoardsPin.delete(@boardsPins[0][:id])
                    @newBoardPin = BoardsPin.create!(board_id: params[:pin][:new_board_id], pin_id: @pin.id)
                    @board = Board.find(params[:pin][:new_board_id])
                    debugger
                else
                    @board = Board.find(params[:pin][:board_id])
                end
            render :show
        elsif @pin_to_delete && params[:pin][:delete_boardsPin]
            debugger
            @boardsPins = BoardsPin.where(pin_id: @pin.id, board_id: params[:pin][:board_id])
            BoardsPin.delete(@boardsPins[0][:id])
            
        else
            render json: @pin.errors.full_messages
        end
    end

    def destroy
        @pin = Pin.find(params[:id])
        if @pin.destroy
            render :delete
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def show
        @pin = Pin.find_by(id: params[:id])
        @user = User.find(@pin.user_id)
        @boards = Board.where(user_id: @pin.user_id).includes(:pins).to_a
        @pins = @user.pins.includes(photo_attachment: :blob).to_a
        
        if params[:board_id]
            
            @board = Board.find(params[:pin][:board_id])
        else 
            
            @board = Board.find(@boards[0].id)
        end
        if @pin 
            render :show
        else
            render json: ["Oops! Couldn't find that pin!"], status: 404
        end
    end

    private
    def pin_params
        params.require(:pin).permit(:title, :pin_url, :description, :user_id, :photo, :owner_email)
    end

end