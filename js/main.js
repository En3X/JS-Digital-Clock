var months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
];
var days = [
    "SUN","MON","TUE","WED","THU","FRI","SAT"
];
function setClock(){
    hField = document.querySelector("#hr");
    sField = document.querySelector("#sec");
    mField = document.querySelector("#min");
    dayField = document.querySelector("#day");
    dateField = document.querySelector("#fullDate");

    setInterval(() => {
        var date = new Date();
        hours = addZero(date.getHours());
        minutes = addZero(date.getMinutes());
        seconds = addZero(date.getSeconds());
        day = date.getDay();
        day = getShortDay(day);
        fullDate = date.getDay() + " "+montify(date.getMonth())+", "+date.getFullYear();


        dayField.textContent = day;
        hField.textContent = hours;
        mField.textContent = minutes;
        sField.textContent = seconds;

        dateField.textContent = fullDate;

    }, 1000);
}

function montify(month) {
    return months[month];
}

function getShortDay(day){
    return days[day];
}
function addZero(data) {
    if(data>=0 && data <=9){
        return "0"+data;
    }
    return data;
}
setClock();