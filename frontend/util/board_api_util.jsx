export const newBoard = (board) => {
    return $.ajax({
        method: "POST",
        url: '/api/boards',
        data: {
            board
        }
    })
}

export const boardIndex = () => {
    return $.ajax({
        method: "GET",
        url: "/api/boards"
    })
}

export const showBoard = () => {
    return $.ajax({
        method: "GET",
        url: `/api/boards/${board.id}`,
    })
}

export const updateBoard = (board) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/boards/${board.id}/edit`,
        data: { board }
    })
}

export const destroyBoard = () => {
    return $.ajax({
        method: "DELETE",
        url: `/api/boards/${board.id}`
    })
}