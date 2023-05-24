// function for clock
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var session = document.querySelector(".session");
  
    if(hrs >= 12){
      session.innerHTML = 'PM';
    }else{
      session.innerHTML = 'AM';
    }
  
    //add 0 for the values < 10
    if(hrs < 10){
        hrs = '0' + hrs;
    }
    
    if(min < 10){
        min = '0' + min;
    }

    document.querySelector(".hours").innerHTML = hrs;
    document.querySelector(".minutes").innerHTML = min;

    //get the current date
    var dayNumber = dateTime.getDate();
    var year = dateTime.getFullYear();
    var monthName = dateTime.getMonth() + 1;
    let day = dateTime.getDay();
    const dayName = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

    document.querySelector(".month-name").innerHTML = monthName;
    document.querySelector(".day-name").innerHTML = dayName[day];
    document.querySelector(".day-number").innerHTML = dayNumber;
    document.querySelector(".year").innerHTML = year;
  }
  
  setInterval(displayTime, 10);