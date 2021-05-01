class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new(user_id: params[:follow][:user_id], follower_id: params[:follow][:follower_id])
        # Get all the info for the current User
        @current_user = User.find(current_user.id)
        @current_user_boards = Board.where(user_id: current_user.id).includes(:pins).to_a
        @current_user_pins = []
        
        if @current_user_boards
            @current_user_boards.each do |board|
                @current_user_pins.concat(board.pins.includes(photo_attachment: :blob).to_a)
            end
        end
        # Get all the info for the user being followed
        @current_profile = User.find(params[:follow][:profile_id])
        @current_profile_boards = Board.where(user_id: params[:follow][:profile_id]).includes(:pins).to_a
        @current_profile_pins = []
        if @current_profile_boards
            @current_profile_boards.each do |board|
                @current_profile_pins.concat(board.pins.includes(photo_attachment: :blob).to_a)
            end
        end
        if @follow.save
            @current_user_followers = User.where(id: @current_user.followers.pluck(:follower_id)).includes(:followers).to_a
            @current_user_following = User.where(id: @current_user.users_followed.pluck(:user_id)).includes(:followers).to_a

            @current_profile_followers = User.where(id: @current_profile.followers.pluck(:follower_id)).includes(:followers).to_a
            @current_profile_following = User.where(id: @current_profile.users_followed.pluck(:user_id)).includes(:followers).to_a

           render :new
        else
            render json: @follow.errors.full_messages, status: 404
        end

    end

    def destroy
        followArray = Follow.where("user_id = ?  AND follower_id = ?", params[:follow][:user_id], params[:follow][:follower_id])
        @follow = Follow.find(followArray[0].id)
        @current_user = User.find(current_user.id)
        @current_user_boards = Board.where(user_id: current_user.id).includes(:pins).to_a
        @current_user_pins = []
        if @current_user_boards
            @current_user_boards.each do |board|
                @current_user_pins.concat(board.pins.includes(photo_attachment: :blob).to_a)
            end
        end
        # Get all the info for the user being followed
        @current_profile = User.find(params[:follow][:profile_id])
        @current_profile_boards = Board.where(user_id: params[:follow][:profile_id]).includes(:pins).to_a
        @current_profile_pins = []
        if @current_profile_boards
            @current_profile_boards.each do |board|
                @current_profile_pins.concat(board.pins.includes(photo_attachment: :blob).to_a)
            end
        end
        if @follow.destroy
            @current_user_followers = User.where(id: @current_user.followers.pluck(:follower_id)).includes(:followers).to_a
            @current_user_following = User.where(id: @current_user.users_followed.pluck(:user_id)).includes(:followers).to_a

            @current_profile_followers = User.where(id: @current_profile.followers.pluck(:follower_id)).includes(:followers).to_a
            @current_profile_following = User.where(id: @current_profile.users_followed.pluck(:user_id)).includes(:followers).to_a
            render :new
        else
            render json: @follow.errors.full_messages, status: 404
        end
    end

    private
    def follow_params
      params.require(:follow).permit(:user_id, :follower_id, :profile_id)
    end
end