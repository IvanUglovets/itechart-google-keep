export const getFullDate = (): string => {
    const day = new Date().getDate()
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    const hover = new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours();
    const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
    return `${day}/${month}/${year} : ${hover}:${minutes}`
}