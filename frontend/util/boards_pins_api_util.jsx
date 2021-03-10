export const boardsPins = (boardPin) => {
    return $.ajax({
        method: "POST",
        url: '/api/boards_pins',
        data: {
            boardPin
        }
    })
}