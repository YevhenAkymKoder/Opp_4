// Get all elements with id="color"
const colorSwitch = document.querySelectorAll("#dark-theme");
let darkMode = true;

function themeSwitch() {
    if (darkMode) {
        colorSwitch.forEach(function(colorSwitch) {
            colorSwitch.classList.add("darkMode"), ("darkMode header"), ("darkMode top"), ("darkMode footer")
        });
    } else {
        colorSwitch.forEach(function(colorSwitch) {
            colorSwitch.classList.remove("darkMode"), ("darkMode header"), ("darkMode top"), ("darkMode footer")
        });
    }
    darkMode = !darkMode;
}