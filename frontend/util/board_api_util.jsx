export const newBoard = (board) => {
    return $.ajax({
        method: "POST",
        url: '/api/boards',
        data: {
            board
        }
    })
}

// export const boardIndex = () => {
//     return $.ajax({
//         method: "GET",
//         url: "/api/boards"
//     })
// }

export const showBoard = (boardId) => {
    return $.ajax({
        method: "GET",
        url: `/api/boards/${boardId}`,
    })
}

export const updateBoard = (board) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/boards/${board.id}`,
        data: { board }
    })
}

export const destroyBoard = (boardId) => {
    debugger
    return $.ajax({
        method: "DELETE",
        url: `/api/boards/${boardId}`
    })
}
