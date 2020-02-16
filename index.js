var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
function akanNames () {
    var year =parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    var dayOfTheWeek = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7; //day of the week
    var gender=getGender();
    var date = new Date(year +"/" + month + "/"+day);
    var dayBorn = date.getDay();
    var akanName;
    var validate = (year > 0 && (month >0 && month <=12) && (day > 0 && day <= 31));
    var validateGender = (gender !== "male" && gender !== "female");
    if (year <= 0 ) {
        alert("The is invalid");
    }
    else if (month <= 0 || month > 12) {
        alert("Invalid month should be between 1 and 12");
    }
    else if (day <= 0 || day > 31){
        alert("Invalid date");
    }
    else if (validate == false) {
        alert("Invalid Input");
    }
        // validating february month ...leap year to be checked
    else if (MM == 2 && DD > 29) {
        alert("This month does not have those number of days");
    }
        // validating year
    else if (YY < 1000 || YY > 2020) {
        alert("Invalid year");
    }
    if(gender ==="male" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = maleNames[dayBorn];
        document.getElementById("results").innerHTML =
    "Your name is " + akanName + " ,which means you were born on a "+ dayOfTheWeek[dayBorn];
    }
    else if (gender === "female" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = femaleNames[dayBorn];
        document.getElementById("results").innerHTML =
    "Your name is " + akanName + " ,which means you were born on a "+ dayOfTheWeek[dayBorn];
    }
}
    function getGender(){
        var gender = document.getElementsByName("gender");
        for(i = 0; i < gender.length; i++){
            if(gender[i].checked){
                return(gender[i].value)
        }
    }
}