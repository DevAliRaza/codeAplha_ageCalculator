// Get DOM elements
const dobInput = document.getElementById("dob");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

// Calculate age when the button is clicked
calculateButton.addEventListener("click", () => {
    const dob = new Date(dobInput.value);
    const today = new Date();
    const ageInMilliseconds = today - dob;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    const age = Math.floor(ageInYears);

    if (!isNaN(age)) {
        result.textContent = `Your age is ${age} years.`;
    } else {
        result.textContent = "Please enter a valid date of birth.";
    }
});
