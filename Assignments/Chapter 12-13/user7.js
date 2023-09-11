var userTime = prompt("Enter Time In 24 Hours Format");
var correctTime;
if (userTime > 12) {
   correctTime =  userTime - 12;
   alert(correctTime + " PM")
} else if (userTime < 12) {
    alert(userTime + " AM")
}