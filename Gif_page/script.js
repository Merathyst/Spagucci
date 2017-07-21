function over(x){
	x.style.backgroundColor = "#00cccc";
};
function out(x){
	x.style.backgroundColor = "#00bbbb";
};
function mainPageClick(x) {
	var stuff = x.innerHTML
	var displayed = prompt();
	x.innerHTML = stuff + "<br>" + displayed;
	if (displayed === "h0i") {
	document.getElementById("H0i").innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><img src='facade.gif' style='width: 137px; height: 100px;' onclick='n0thing(this)'>"
};
};
	function noDiv() {
	if (document.getElementById("anneDiv").style.width === "50%"){
	document.getElementById("anneDiv").style.width = "0px";
	document.getElementById("anneDiv").style.height = "0px";
	document.getElementById("noDivButton").innerHTML = "More div";
	}
	else {
	document.getElementById("anneDiv").style.width = "50%";
	document.getElementById("anneDiv").style.height = "200px";
	document.getElementById("noDivButton").innerHTML = "No div";
	}
};
function switchCase(x) {
	switch (x.id) {
	case "changingDiv":
	x.style.backgroundColor = "#0000ff";
	x.id = "changingDiv1"
	break;
	case "changingDiv1":
	x.style.backgroundColor = "#00ff00"
	x.id = "changingDiv2"
	break;
	case "changingDiv2":
	x.style.backgroundColor = "#ff0000"
	x.id = "changingDiv"
	break;
	default:
	x.innerHTML = "<span style='font-weight: bold; font-size: 18pt; color: #aa0000;'>You've somehow broken the system. Great job! You're learning, and so are we. File a bug complaint at <span style='color: #00ffff;'>icouldntcareless@cryforme.l0s3r</span></span>";
	break;
	};
};
function intervalFunction() {
    setInterval(switchCase, 600, [document.getElementsByClassName("changingDiv")]);
};
function n0thing(x) {
	noStuff = x.innerHTML
	x.innerHTML = noStuff + "<audio autoplay='autoplay'><source src='facade.mp3' type='audio/mpeg'></audio>"
};