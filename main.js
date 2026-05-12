function VerifyVotingEligibility() {
    let age = document.getElementById("age").value;
    let result = document.getElementById("result");
    if (age >= 18) {
    document.getElementById("status").innerHTML = "You are eligible to vote!";
} 
else {
    document.getElementById("status").innerHTML = "You are not eligible to vote yet.";
}

}
function checkGrade() {
let grade = document.getElementById("grade").value;
let gradeResult= document.getElementById("gradeResult");
if (grade >= 94 && grade <= 100) {
window.alert ("Exellent");
}
else if (grade >= 87 && grade < 94) {
window.alert ("Above Standard");
}
else if (grade >= 86 && grade < 93) {
window.alert ("Standard");
}
else if (grade >= 79 && grade < 86) {
window.alert ("Needs Improvement");
}
else {
window.alert ("Failed");
}
}