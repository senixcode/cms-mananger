export const filterByStatus = (data, property, status = true) => {
    return data.filter(d => d[property] === status)
}