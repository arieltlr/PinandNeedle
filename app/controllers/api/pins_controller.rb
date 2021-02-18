class Api::PinsController < ApplicationController

    def create
        @pin = Pin.new(pin_params)
        if @pin.save
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
        if @pin && @pin.update_attributes(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages
        end
    end

    def destroy
        @pin = Pin.find(params[:id])
        if @pin.destroy
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def show
        @pin = Pin.find_by(id: params[:id])
        if @pin 
            render :show
        else
            render json: ["Oops! Couldn't find that pin!"], status: 404
        end
    end

    private
    def pin_params
        params.require(:pin).permit(:pin_url, :description, :user_id, :photo, :board_id)
    end

end