import * as PINAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receivePins = (pins) => {
    return {
        type: RECEIVE_PINS,
        pins
    }
}
export const receivePin = (pin) => {
    return {
        type: RECEIVE_PIN,
        pin
    }
}
export const removePin = (pinId) => {
    return {
        type: REMOVE_PIN,
        pinId
    }
}
export const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const getPins = () => {
    return dispatch => {
        return PINAPIUtil.pinIndex()
            .then((pins) =>
                dispatch(receivePins(pins)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const getPin = (pinId) => {
    return dispatch => {
        return PINAPIUtil.showPin(pinId)
            .then((pin) =>
                dispatch(receivePin(pin)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const createPin = (pin) => {
    // debugger
    return dispatch => {
        return PINAPIUtil.newPin(pin)
            .then((pin) =>
                dispatch(receivePin(pin)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const updatePin = (pin) => {
    return dispatch => {
        return PINAPIUtil.updatePin(pin)
            .then((pin) =>
                dispatch(receivePin(pin)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const deletePin = (pinId) => {
    return dispatch => {
        return PINAPIUtil.destroyPin(pinId)
            .then((pin) =>
                dispatch(removePin(pin)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}