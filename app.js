const Days = document.getElementById('days')
const Hours = document.getElementById('hours')
const Mins = document.getElementById('mins')
const Secs = document.getElementById('secs')


const newYear = "1 Jan 2024"

function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const TotalSeconds = (newYearDate - currentDate)/1000;

    const days = Math.floor(TotalSeconds/3600/24)
    const hours = Math.floor((TotalSeconds/3600)%24)
    const minutes = Math.floor(TotalSeconds/60)%60
     const seconds = Math.floor((TotalSeconds%60))

console.log(days,hours,minutes,seconds)

Days.innerHTML = days
Hours.innerHTML = hours
Mins.innerHTML = minutes
Secs.innerHTML = seconds
    
}

countDown();

setInterval(countDown,1000)
