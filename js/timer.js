let difference = 10800000
let timers = document.querySelectorAll('.three-timer')

const timerTnterval = setInterval(() => {

    let hoursDif = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutesDif = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let secondsDif = Math.floor((difference % (1000 * 60)) / 1000);
      timers.forEach(el => {
        el.innerHTML= `${hoursDif}:${minutesDif}:${secondsDif}`
      })
    // document.getElementById("three-timer").innerHTML= `${hoursDif}:${minutesDif}:${secondsDif}`
    if(difference == 0){
    clearInterval(timerTnterval)
}
difference -= 1000
}, 1000)