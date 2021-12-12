export const getFullDate = (): string => {
    const day = new Date().getDay()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const hover = new Date().getHours()
    const minutes = new Date().getMinutes()
    return `${day}/${month}/${year} : ${hover}:${minutes}`
}