export const getFullDate = (): string => {
    const day = new Date().getDay()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const hover = new Date().getHours()
    const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
    console.log('hover', hover)
    console.log('min', minutes)
    return `${day}/${month}/${year} : ${hover}:${minutes}`
}