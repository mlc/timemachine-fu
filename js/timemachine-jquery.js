$(function() {
    var styles = ["geocities.css", "xmas.css", "crazygame.css"];
    var ourstyle = styles[Math.floor(Math.random() * 3)];

    var sslink = $("<link/>").attr("rel", "stylesheet").attr("href", "/timemachine/" + ourstyle)
    $("head").append(sslink);

    if (ourstyle == "xmas.css") {
	// Midi Datei hinzufügen, wenn xmas style erscheint

	var midilink = $("<embed/>").attr({
            "src": "/timemachine/jingle.mid",
            "autostart": "true",
            "loop": "true",
            "hidden": "true",
            "height": '0',
            "width": '0',
            "autoplay": "true",
            "type": "application/x-mplayer2"});
	$("body").append(midilink);
    }
			
    // Die ersten 4 Absätze mit speziellen random Bildern versehen (jetzt funzt!!)
    var paras = $("p");
    for (var i = 1; i <= 4; ++i) {
	$(paras[Math.floor(Math.random() * paras.size())]).addClass("p" + i);
    }
});
