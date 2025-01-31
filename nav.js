document.write('\
    <nav id="navbar" class="navbar navbar-expand-md bg-light navbar-light fixed-top">\
        <a class="navbar-brand" href="index.html">\
            <img src="img/6WheelsFullLogo.png"/>\
        </a>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="navbarSupportedContent">\
            <ul class="navbar-nav ml-auto">\
                <li class="nav-item">\
                    <a class="nav-link active" href="index.html">Home</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link" href="map.html">Map</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link" href="mossyearth.html">Mossy Earth</a>\
                </li>\
                <li class="nav-item last-link">\
                    <a class="nav-link" href="aboutus.html">About Us</a>\
                </li>\
                <li class="nav-item flags">\
                    <input type="image" src="img/flag_fr.svg" onclick="translateTo(\'fr\');" />\
                    <input type="image" src="img/flag_uk.svg" onclick="translateTo(\'en\');" />\
                </li>\
            </ul>\
        </div>\
    </nav>\
');