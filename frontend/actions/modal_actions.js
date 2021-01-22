export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const ERROR_MODAL = "ERROR_MODAL";

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

export const errorModal = modal => {
    return {
        type: ERROR_MODAL,
        modal
    }
}