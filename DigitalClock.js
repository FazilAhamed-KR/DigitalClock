let ampm = document.getElementById('ampm')

function displayTime() {
    let dateTime = new Date()
    let hr = dateTime.getHours()
    let min = pad(dateTime.getMinutes())
    let sec = pad(dateTime.getSeconds())

    if (hr>12) {
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }

    document.getElementById('hours').innerHTML = pad(hr)
    document.getElementById('mins').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
    
}

function pad(num) {
    return num<10?"0"+num:num
}
// displayTime()
setInterval(displayTime,500)

