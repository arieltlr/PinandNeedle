export const newFollow = (follow) => {
    
    return $.ajax({
        method: "POST",
        url: '/api/follows',
        data: {
            follow
        }
    })
}

export const destroyFollow = (follow) => {
    
    return $.ajax({
        method: "DELETE",
        url: `/api/follows/${follow.id}`,
        data: {
            follow
        }
    })
}