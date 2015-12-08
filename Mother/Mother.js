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
function stahp() {
	document.getElementById("mum").id = "stahped";
	document.getElementById("stahped").innerHTML = "&nbsp;";
	document.getElementById("button").innerHTML = "<button onclick='go()'>Go</button>";
	};
function go() {
	document.getElementById("stahped").id = "mum";
	document.getElementById("button").innerHTML = "<button onclick='stahp()'>Stahp</button>";
	};
    setInterval(yourMother, 1000)
    setInterval(backToMother, 850)
    setInterval(meMum, 600)
