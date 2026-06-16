let streak = 3;
let longest = 7;

// NAVIGATION
function showScreen(screen) {
document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
document.getElementById(screen).classList.add("active");
}

// DETOX
function addDay() {
streak++;
if (streak > longest) longest = streak;
updateDetox();
}

function resetStreak() {
streak = 0;
updateDetox();
}

function updateDetox() {
document.getElementById("streak").innerText = streak;
document.getElementById("longest").innerText = longest + " Days";
}

// REPORT
function submitIssue() {
let model = document.getElementById("modelInput").value;
let issue = document.getElementById("issueInput").value;

if (!model || !issue) {
document.getElementById("confirmation").innerText = "Please fill all fields.";
return;
}

document.getElementById("confirmation").innerText =
"Report submitted successfully.";

document.getElementById("modelInput").value = "";
document.getElementById("issueInput").value = "";
}

// INIT
updateDetox();
showScreen("dashboard");
