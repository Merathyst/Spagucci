
$(document).ready(function() {
	$('#gifDiv').hide();
	$('#gifButton').click(function () {
	$('#gifDiv').slideDown(400)
	document.getElementById("gifButton").id = "gifButtonPressed"
	});
	$('#gifButtonPressed').click(function() {
	$('#gifDiv').slideUp(400)
	document.getElementById("gifButtonPressed").id = "gifButton"
	});
});