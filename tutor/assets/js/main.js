function newQuiz() {
    document.getElementById('backdrop').style.left = "0%";
    document.getElementById('quizForm').style.left = "50%";
}

function closeSetup() {
    document.getElementById('backdrop').style.left = "-150%";
    document.getElementById('quizForm').style.left = "250%";
}

function closeSide() {
    document.getElementById('opener').style.display = "block";
    document.getElementById('closer').style.display = "none";
    document.getElementById('sidenav').style.width = "0";
    document.getElementById('truePage').style.paddingLeft = "20px";
}

function openSide() {
    document.getElementById('closer').style.display = "block";
    document.getElementById('opener').style.display = "none";
    document.getElementById('sidenav').style.width = "180px";
    document.getElementById('truePage').style.paddingLeft = "200px";
}