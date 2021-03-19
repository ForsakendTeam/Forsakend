//CONTROL VALUES
var charWidth = 2.5;
var spaceWidth = 8;
var animSpeed = 20;
var fadeSec = 0.5;
var lineSpace = 25;

var text = "Devistation, pain, war, hatred, betrayal, politics and many other wods that are bound to humanity. Situations we have all created as one and must carry day in and day out!";
var moreText = "Pain comes and goes, no one can avoid such harsh times... We must keep positive and move on with our days, time is not infinite so we should not waiste it dwelling on the past";


function writeChars(p, t, lim) {
	var zone = document.getElementById(p);
	var width = 0;
	var top = 0;
	console.log(zone);
	var chars = t.split("");
	for (var i = 0; i < chars.length; i++) {
		var s = "<span id ='" + p + "char" + i +
				"' class='writer' style='top:" + top + "px; left:" + width + 
				"px;animation:charAnim " + fadeSec + "s linear " + i/animSpeed + "s forwards;'>"
				+ chars[i] + "</span>";
		var node = document.createElement("div");
		node.innerHTML = s;
		zone.appendChild(node);
		var blah = document.getElementById(p + "char" + i);
		if (blah.offsetWidth == 0) {
			width += spaceWidth;
		}
		else {
			width += blah.offsetWidth+charWidth;
		}
		if (width >= lim && blah.offsetWidth == 0) {
			width = 0;
			top += lineSpace;
		}
		console.log(width);
	}
}

writeChars("para1",text, 500);
setTimeout(function() {
	writeChars("para2",moreText, 250);
}, 6000);