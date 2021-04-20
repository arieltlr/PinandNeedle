import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const NEW_PIN = "NEW_PIN";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const SHOW_PIN = "SHOW_PIN";

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
export const showPin = (pin) => {
    return {
        type: SHOW_PIN,
        pin
    }
}
export const newPin = (pin) => {
    return {
        type: NEW_PIN,
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
    debugger
    return dispatch => {
        return PinAPIUtil.pinIndex()
            .then((pins) =>
                dispatch(receivePins(pins)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const getPin = (pinId) => {
    return dispatch => {
        return PinAPIUtil.showPin(pinId)
            .then((pin) =>
                dispatch(showPin(pin)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const createPin = (pin) => {
    return dispatch => {
        return PinAPIUtil.newPin(pin)
            .then((pin) =>
                dispatch(receivePin(pin)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const updatePin = (pin) => {
    return dispatch => {
        return PinAPIUtil.updatePin(pin)
            .then((pin) =>
                dispatch(receivePin(pin)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const deletePin = (pinId) => {
    return dispatch => {
        return PinAPIUtil.destroyPin(pinId)
            .then((pin) =>
                dispatch(removePin(pin)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const removeBoardsPin = (pin) => {
    return dispatch => {
        return PinAPIUtil.deleteBoardsPin(pin)
            .then((pin) =>
                dispatch(receivePin(pin)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
