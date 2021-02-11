
var days = [" Sunday ", " Monday ", " Tuesday ", " Wesnesday ", " Thursday ", " Friday ", " Saturday "]

var months = [" January ", " February ", " March ", " April ", " May ", " June ", " July ", " August ", " September ", " October ", " November ", " December "]
function showtime() {
    var x = new Date()
    var seconds
    var minutes
    ampm = x.getHours() > 12 ? ' PM ' : ' AM ';
    var hours = x.getHours() % 12;
    seconds = (x.getSeconds() < 10) ? '0' + x.getSeconds() : x.getSeconds()
    minutes = (x.getMinutes() < 10) ? '0' + x.getMinutes() : x.getMinutes()
    hours = (hours < 10) ? '0' + hours : hours
    p_time = hours + " : " + minutes + " : " + seconds + ampm;
    document.getElementById("time").innerHTML = p_time;
    day = x.getDay();
    month = x.getMonth();
    date_p = x.getDate();
    document.getElementById("day").innerHTML = days[day] + ',' + months[month] + date_p + " ," + x.getFullYear();
    document.getElementById("title").innerHTML = "Time is " + p_time;
    display()
}
display()
function display() {
    setTimeout('showtime()', 1000);
}

