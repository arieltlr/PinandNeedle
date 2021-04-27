export const newFollow = (follow) => {
    
    return $.ajax({
        method: "POST",
        url: '/api/follows',
        data: {
            follow
        }
    })
}

export const unfollow = (follow) => {
    return $.ajax({
        method: "DELETE",
        url: '/api/follows',
        data: {
            follow
        }
    })
}