function RollTheDice() {
    document.getElementById("die1").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("die2").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("die3").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("die4").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("die5").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("die6").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("die7").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("die8").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("die9").value = Math.floor(Math.random() * 6) + 1;
}