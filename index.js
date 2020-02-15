function akanNames() {
    var day = document.getElementById("day").value;
    var DD = parseInt(day);

    var month = document.getElementById("month").value;
    var MM = parseInt(month);

    var year = document.getElementById("year").value;
    var YY = parseInt(year);

    var CC = parseInt(YY - 1) / 100 + 1; //century
    var dayOfTheWeek = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7; //day of the week
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var gender;
    //gender
    if (document.getElementById("gender").checked) {
        gender = 'male';
    } else {
        gender = 'female';
    }
    // date val
    if (MM < 0 || MM > 12) {
        alert("invalid month ");
    }
    // checking if day is correct and does not exceed limit.  if its not correct alert user
    else if (DD < 0 || DD > 31) {
        alert("invalid  Date");
    }
    // validating february month ...leap year to be checked
    else if (MM == 2 && DD > 29) {
        alert("This month does not have those number of days");
    }
    // validating year
    else if (YY < 1000 || YY > 2020) {
        alert("Invalid year");
    }
    //maleNames
    //Monday
    else if (Math.ceil(dayOfTheWeek) == 1 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[1] + " ,which means you were born on a Monday.";
    }
    //Tuesday
    else if (Math.ceil(dayOfTheWeek) == 2 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[2] + " ,which means you were born on a Tuesday.";
    }
    //Wednesday
    else if (Math.ceil(dayOfTheWeek) == 3 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[3] + " ,which means you were born on a Wednesday.";
    }
    //Thursday
    else if (Math.ceil(dayOfTheWeek) == 4 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[4] + " ,which means you were born on a Thursday.";
    }
    //Friday
    else if (Math.ceil(dayOfTheWeek) == 5 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[5] + " ,which means you were born on a Friday.";
    }
    //Saturday
    else if (Math.ceil(dayOfTheWeek) == 6 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[6] + " ,which means you were born on a Saturday.";
    }
    //Sunday
    else if (Math.ceil(dayOfTheWeek) == 0 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[0] + " ,which means you were born on a Sunday.";
    }
    //femaleNames
    //Monday
    else if (Math.ceil(dayOfTheWeek) == 1 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[1] + " ,which means you were born on a Monday.";
    }
    //Tuesday
    else if (Math.ceil(dayOfTheWeek) == 2 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[2] + " ,which means you were born on a Tuesday.";
    }
    //Wednesday
    else if (Math.ceil(dayOfTheWeek) == 3 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[3] + " ,which means you were born on a Wednesday.";
    }
    //Thursday
    else if (Math.ceil(dayOfTheWeek) == 4 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[4] + " ,which means you were born on a Thursday.";
    }
    //Friday
    else if (Math.ceil(dayOfTheWeek) == 5 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[5] + " ,which means you were born on a Friday.";
    }
    //Saturday
    else if (Math.ceil(dayOfTheWeek) == 6 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[6] + " ,which means you were born on a Saturday.";
    }
    //Sunday
    else if (Math.ceil(dayOfTheWeek) == 0 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[0] + " ,which means you were born on a Sunday.";
    } else {
        alert('enter your information please');
    }
}





