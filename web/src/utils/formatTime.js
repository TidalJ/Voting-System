const formatTime = (time) => {
    const d = new Date(time)
    const year = d.getFullYear()
    const month = handleTime(d.getMonth() + 1)
    const date = handleTime(d.getDate())
    const hour = handleTime(d.getHours())
    const min = handleTime(d.getMinutes())
    const sec = handleTime(d.getSeconds())
    return { year, month, date, hour, min, sec }
}

const handleTime = (time) => {
    return time >= 10 ? time : '0' + time
}

export default formatTime