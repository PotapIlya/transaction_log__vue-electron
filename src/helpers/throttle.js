export default (callback, time = 500) => {
    let timeout = null;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        callback()
    }, time);
}