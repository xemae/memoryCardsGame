export function getStringTimeBySeconds(seconds) {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60

    if (min < 10 && sec < 10) {
        return '0' + min + ' : 0' + sec
    } else if (min < 10 && sec >= 10) {
        return '0' + min + ' : ' + sec
    } else if (min > 9 && sec < 10) {
        return min + ' : 0' + sec
    } else {
        return min + ' : ' + sec
    }
}
