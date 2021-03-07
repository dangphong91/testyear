let year = prompt("Enter year:");
let yr = parseInt(year);
if (yr % 4 == 0) {
    if (yr % 100 == 0) {
        if (yr % 400 == 0) {
            alert(year + " is a leap year")
        } else {
            alert(year + " is Not a leap year")
        }
    } else {
        alert(year + " is la leap year")
    }
} else {
    alert(year + " is Not a leap year")
}