export const userShow = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    })
}