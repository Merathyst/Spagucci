var mom = document.getElementById("mum");
var div = document.getElementById("changingDiv");
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
	document.getElementById("button").innerHTML = "<button onclick='go()'>Start</button>";
	};
function go() {
	document.getElementById("stahped").id = "mum";
	document.getElementById("button").innerHTML = "<button onclick='stahp()'>Stop</button>";
	};
function blueToRed() {
	if (document.getElementById("changingDiv").style.backgroundColor = "#0000ff") {
	document.getElementById("changingDiv").style.backgroundColor = "#ff0000";
	document.getElementById("testButton").innerHTML = "Blue";
	}
	else {
	document.getElementById("changingDiv").style.backgroundColor = "#0000ff";
	document.getElementById("testButton").innerHTML = "Red";
	}
};
    setInterval(yourMother, 1000);
    setInterval(backToMother, 850);
    setInterval(meMum, 600);
