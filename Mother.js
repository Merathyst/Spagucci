var mom = document.getElementById("mum");
function yourMother() {
    document.getElementById("mum").innerHTML = "Your Mother";
};
function backToMother() {
    document.getElementById("mum").innerHTML = "Mother";
    };
function meMum() {
    document.getElementById("mum").innerHTML = "Me Mum";
    };
    setInterval(yourMother, 1000)
    setInterval(backToMother, 850)
    setInterval(meMum, 600)
