function calculator() {
    var education = document.getElementById("education");
    var family = document.getElementById("family");
    var skills = document.getElementsByClassName('skills');
    var ages = document.getElementsByClassName('ages');
    var gossips = document.getElementsByClassName('gossips');
    var btnShow = document.querySelector("button");
    var sum = 500;
    sum *= education.value;
    sum *= family.value;
    for (i = 0; i < 4; i++) {
        if (skills[i].checked === true) {
            sum += parseInt(skills[i].value);
        }
    }
    for (i = 0; i < 3; i++) {
        if (gossips[i].checked === true) {
            if (gossips[i].value !== "200") {
                sum *= Number(gossips[i].value);
            } else {
                sum -= Number(gossips[i].value);
            }
        }
    }
    for (i = 0; i < 3; i++) {
        if (ages[i].checked === true) {
            sum *= Number(ages[i].value);
        }
    }
    alert("Total: " + sum + "$")
};
