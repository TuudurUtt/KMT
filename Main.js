// JS funtsioon, mida kasutame lehtede vahel navigeerimiseks. Kood pärineb Tuudur Jürgen Utti eemlmisel aastal kirjutdatud projektist,
// mis oli pea kindlasti sattunud sinna kusagilt Stack overflow sügavustest, kuid see allikas on kaotsi läinud.
function Navigate() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}