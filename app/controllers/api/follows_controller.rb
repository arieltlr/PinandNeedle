class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new(follow_params)
        @user = User.find(params[:follow][:user_id])
        @boards = Board.where(user_id: params[:follow][:user_id]).includes(:pins).to_a
        @pins = []
        if @boards
            @boards.each do |board|
                @pins.concat(board.pins.includes(photo_attachment: :blob).to_a)
            end
        end
        if @follow.save
            @followers = User.where(id: @user.followers.pluck(:follower_id)).to_a
            @users_followed = User.where(id: @user.users_followed.pluck(:user_id)).to_a
           render "api/users/show"
        else
            render json: @follow.errors.full_messages, status: 404
        end

    end

    def delete
        # @follow = Follow.find_by(params[])
        # need to get follow instance id
        # follower_id is always the currentUser.id
        @follow = Follow.where("user_id = ?  AND follower_id = ?", params[:user_id], params[:follower_id])
        @user = User.find(params[:user_id])
        @boards = Board.where(user_id: params[:user_id]).includes(:pins).to_a
        @pins = []
        if @boards
            @boards.each do |board|
                @pins.concat(board.pins.includes(photo_attachment: :blob).to_a)
            end
        end
        if @follow.destroy
            @followers = User.where(id: @user.followers.pluck(:user_id)).to_a
            @users_followed = User.where(id: @user.users_followed.pluck(:user_id)).to_a
            render "api/users/show"
        else
            render json: @follow.errors.full_messages, status: 404
        end
    end

    private
    def follow_params
      params.require(:follow).permit(:user_id, :follower_id)
    end
end