class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new(follow_params)
        if @follow
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
        if @follow.destroy
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