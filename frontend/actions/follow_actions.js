import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const UNFOLLOW = "UNFOLLOW";

export const receiveFollow = (follow) => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    }
}

export const receiveUnfollow = (follow) => {
    return {
        type: UNFOLLOW,
        follow
    }
}

export const createFollow = (follow) => {
    return dispatch => {
        return FollowApiUtil.newFollow(follow)
            .then((follow) =>
                dispatch(receiveFollow(follow)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}

export const unfollow = (follow) => {
    return dispatch => {
        return FollowApiUtil.unfollow(follow)
            .then((follow) =>
                dispatch(receiveUnfollow(follow)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}