var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
function akanNames () {
    var year =parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
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
    if(gender ==="male" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = maleNames[dayBorn];
        document.getElementById("results").innerHTML =
    // "Your day name is "+ dayOfTheWeek[dayBorn]+ " and your Akan name is " +akanName;
    "Your name is " + akanName + " ,which means you were born on a "+ dayOfTheWeek[dayBorn];
    }
    else if (gender === "female" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = femaleNames[dayBorn];
        document.getElementById("results").innerHTML =
    // "You were born on "+ dayOfTheWeek[dayBorn]+ " and your Akan name is " +akanName;
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