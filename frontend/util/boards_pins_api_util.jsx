export const boardsPins = (boardPin) => {
    debugger
    return $.ajax({
        method: "POST",
        url: '/api/boards_pins',
        data: {
            boardPin
        }
    })
}