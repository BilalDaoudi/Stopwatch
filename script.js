function Time() {
    let tournMS = 0
    let tournS = 0
    let tournM = 0
    let nb = document.getElementById("MS").textContent;
    if (nb < 9) {
        let test = parseInt(nb) + 1;
        let u = "0" + test;
        document.getElementById("MS").textContent = u;
    }
    if (nb >= 9 && nb < 99) {
        let test = parseInt(nb) + 1;
        document.getElementById("MS").textContent = test;
    }

    if (nb == 99) {
        document.getElementById("MS").textContent = "00";
        tournMS++
    }



    if (tournMS == 1) {
        tournMS = 0;
        let nb = document.getElementById("S").textContent;
        if (nb < 9) {
            let test = parseInt(nb) + 1;
            let u = "0" + test;
            document.getElementById("S").textContent = u;
        }
        if (nb >= 9 && nb < 59)
            document.getElementById("S").textContent = parseInt(nb) + 1;
        if (nb == 59) {
            document.getElementById("S").textContent = "00";
            tournS++
        }
    }

    if (tournS == 1) {
        tournS = 0;
        let nb = document.getElementById("M").textContent;
        if (nb < 9) {
            let test = parseInt(nb) + 1;
            let u = "0" + test;
            document.getElementById("M").textContent = u;
        }
        if (nb >= 9 && nb < 59)
            document.getElementById("M").textContent = parseInt(nb) + 1;
        if (nb == 59) {
            document.getElementById("M").textContent = "00";
            tournM++
        }
    }

    if (tournM == 1) {
        tournM = 0
        let h = document.getElementById("H").textContent;
        if (h < 9) {
            let test = parseInt(h) + 1;
            let u = "0" + test;
            document.getElementById("H").textContent = u;
        }
        else
            document.getElementById("H").textContent = parseInt(h) + 1;
    }
}

var t = "";

function start(btn) {
    btn.disabled = true;
    t = setInterval(Time, 10);
}
function stop() {
    clearInterval(t);
}
function Reset() {
    clearInterval(t);
    document.getElementById("btn").disabled = false;
    document.getElementById("H").textContent = "00";
    document.getElementById("M").textContent = "00";
    document.getElementById("S").textContent = "00";
    document.getElementById("MS").textContent = "00";
}
