 

 function displayTime(){
    let dateTime = new Date()
    let hr = dateTime.getHours()
    let ampmDiv = document.getElementById('ampm')
    if(hr>12){
       hr =  hr-12
      ampmDiv.innerHTML = 'PM' 
    }
    if(hr == 12){
      ampmDiv.innerHTML = 'PM'
    }
    
    let mins = dateTime.getMinutes()
    let sec = dateTime.getSeconds()
    let hoursDiv = document.getElementById('hours')
    let minsDiv = document.getElementById('mins')
    let secondsDiv = document.getElementById('seconds')
    hoursDiv.innerHTML = padZero(hr)
    minsDiv.innerHTML = padZero(mins)
    secondsDiv.innerHTML = padZero(sec) 

}
 function padZero(num){
    return num<10?"0"+num:num
 }
setInterval(displayTime, 500);