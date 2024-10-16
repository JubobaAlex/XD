function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById('time').innerText = 'Текущее время: ' + hours + ':' + minutes + ':' + seconds;
}
setInterval(showTime, 1000);
