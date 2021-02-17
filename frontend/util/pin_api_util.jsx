export const newPin = (pin) => {
    
    return $.ajax({
        url: '/api/pins',
        method: 'POST',
        data: pin,
        contentType: false,
        processData: false,

    })
}

export const pinIndex = () => {
    return $.ajax({
        method: "GET",
        url: "/api/pins"
    })
}

export const showPin = (pinId) => {
    return $.ajax({
        method: "GET",
        url: `/api/pins/${pinId}`,
    })
}

export const updatePin = (pin) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/pins/${pin.id}`,
        data: { Pin }
    })
}

export const destroyPin = (pinId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/pins/${pinId}`
    })
}
