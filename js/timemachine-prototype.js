document.observe('dom:loaded', function() {
    var styles = ["geocities.css", "xmas.css", "crazygame.css"];
    var ourstyle = styles[Math.floor(Math.random() * 3)];

    var sslink = new Element("link", { "rel": "stylesheet", "href": "/timemachine/" + ourstyle});
    $$("head")[0].insert(sslink);

    if (ourstyle == "xmas.css") {
	var midilink = new Element("embed", {
	    "src": "/timemachine/jingle.mid",
	    "autostart": "true",
	    "loop": "true",
	    "hidden": "true",
	    "height": '0',
	    "width": '0',
	    "autoplay": "true",
            "type": "application/x-mplayer2"});
	$$("body")[0].insert(midilink);
    }
			
    // Die ersten 4 Absätze mit speziellen random Bildern versehen (jetzt funzt!!)
    var paras = $$("p");
    for (var i = 1; i <= 4; ++i) {
	$(paras[Math.floor(Math.random() * paras.length)]).addClassName("p" + i);
    }
});
