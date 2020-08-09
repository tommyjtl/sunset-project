var selection = 0;

addRow()

function addRow() {
    const div = document.createElement('div');

    div.className = '';
    var row_loop = "";
    var col_loop = "";
    var counter = 0;

    var selection_no = 0;
    var selection_path = "";
    var same_attribute_1 = `<a type="button" data-toggle="modal" data-target="#lightbox" onclick="selection = ` + selection_no + `; console.log(selection); generate_modal_content();"><img class="rounded-img" src="` + selection_path + `" width="60rem" /></a>`;

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 14; j++) {
            if (counter == 0) {
                var img_content = `<a class="about-text" href="#">About</a>`;
                row_loop += `<div class="col">` + img_content + `</a></div>\n`;
            }

            

            if (counter == 71) {
                var img_content = `<a type="button" data-toggle="modal" data-target="#lightbox" onclick="selection = 1; console.log(selection); generate_modal_content();"><img class="rounded-img" src="./images/photos/p1.jpg" width="60rem" /></a>`;
                row_loop += `<div class="col">` + img_content + `</a></div>\n`;
            } else if (counter == 75) {
                var img_content = `<a type="button" data-toggle="modal" data-target="#" onclick="console.log(selection);"><img class="rounded-img" src="./images/upload.png" width="60rem" /></a>`;
                row_loop += `<div class="col">` + img_content + `</a></div>\n`;
            } else if (counter == 82) {
                var img_content = `<a type="button" data-toggle="modal" data-target="#lightbox" onclick="selection = 2; console.log(selection); generate_modal_content();"><img class="rounded-img" src="./images/photos/p2.jpg" width="60rem" /></a>`;
                row_loop += `<div class="col">` + img_content + `</div>\n`;
            } else if (counter == 87) {
                var img_content = `<a type="button" data-toggle="modal" data-target="#lightbox" onclick="selection = 3; console.log(selection); generate_modal_content();"><img class="rounded-img" src="./images/photos/p3.jpg" width="60rem" /></a>`;
                row_loop += `<div class="col">` + img_content + `</div>\n`;
            } else if (counter == 93) {
                var img_content = `<a type="button" data-toggle="modal" data-target="#lightbox" onclick="selection = 4; console.log(selection); generate_modal_content();"><img class="rounded-img" src="./images/photos/p4.jpg" width="60rem" /></a>`;
                row_loop += `<div class="col">` + img_content + `</div>\n`;
            } else if (counter == 98) {
                var img_content = `<a type="button" data-toggle="modal" data-target="#lightbox" onclick="selection = 5; console.log(selection); generate_modal_content();"><img class="rounded-img" src="./images/photos/p5.jpg" width="60rem" /></a>`;
                row_loop += `<div class="col">` + img_content + `</div>\n`;
            } else if (counter == 104) {
                var img_content = `<a type="button" data-toggle="modal" data-target="#lightbox" onclick="selection = 6; console.log(selection); generate_modal_content();"><img class="rounded-img" src="./images/photos/p6.jpg" width="60rem" /></a>`;
                row_loop += `<div class="col">` + img_content + `</div>\n`;
            } else if (counter == 109) {
                var img_content = `<a type="button" data-toggle="modal" data-target="#lightbox" onclick="selection = 7; console.log(selection); generate_modal_content();"><img class="rounded-img" src="./images/photos/p9.jpg" width="60rem" /></a>`;
                row_loop += `<div class="col">` + img_content + `</div>\n`;
            } else {
                row_loop += `<div class="col"></div>\n`;
            }

            counter += 1;
        }
        row_loop = `<div class="row">\n` + row_loop + `</div>\n`;
        col_loop += row_loop;
        row_loop = "";
        // console.log(col_loop);
    }


    // console.log(document.getElementById('icon-bg').clientHeight);
    div.innerHTML = col_loop;
    document.getElementById('icon-bg').appendChild(div);
    console.log("appended.");
}

var processed_src = "./images/photos/p4.jpg"


var loc_y = 0;

function generate_modal_content() {
    if (selection == 1) {
        document.getElementById("sample-images").src = "./images/photos/p1.jpg";
        processed_src = "./images/photos/p1.jpg";
    } else if (selection == 2) {
        document.getElementById("sample-images").src = "./images/photos/p2.jpg";
        processed_src = "./images/photos/p2.jpg";
    } else if (selection == 3) {
        document.getElementById("sample-images").src = "./images/photos/p3.jpg";
        processed_src = "./images/photos/p3.jpg";
    } else if (selection == 4) {
        document.getElementById("sample-images").src = "./images/photos/p4.jpg";
        processed_src = "./images/photos/p4.jpg";
    } else if (selection == 5) {
        document.getElementById("sample-images").src = "./images/photos/p5.jpg";
        processed_src = "./images/photos/p5.jpg";
    } else if (selection == 6) {
        document.getElementById("sample-images").src = "./images/photos/p6.jpg";
        processed_src = "./images/photos/p6.jpg";
    } else if (selection == 7) {
        document.getElementById("sample-images").src = "./images/photos/p9.jpg";
        processed_src = "./images/photos/p9.jpg";
    }
    loc_y = 0;
    document.getElementById("down-btn").click();
}


// const selectedFile = document.getElementById('input').files[0];
const colorThief = new ColorThief();

function RGBToHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    var hsl = new Array();
    hsl[0] = h;
    hsl[1] = s;
    hsl[2] = l;

    return hsl;
}

Number.prototype.map = function(in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function moveup() {
    loc_y -= 1;
    if (loc_y < 1) {
        loc_y = 1;
    } else {
        console.log(loc_y);
    }
    imageOnLoadoad();
}

function movedown() {
    loc_y += 1;
    if (loc_y > 19) {
        loc_y = 19;
    } else {
        console.log(loc_y);
    }
    imageOnLoadoad();
}

function play() {

    loc_y = 1;

    console.log("disable all buttons");

    (function myLoop(i) {
        setTimeout(function() {
            console.log('hello'); //  your code here         
            document.getElementById("down-btn").click(); // Click on the checkbox       
            if (--i) myLoop(i); //  decrement i and call myLoop again if i > 0
        }, 1000)
    })(20);

}

var piano_white_key = [
    [21, 23, 24, 26, 28, 29, 31],
    [33, 35, 36, 38, 40, 41, 43],
    [45, 47, 48, 50, 52, 53, 55],
    [57, 59, 60, 62, 64, 65, 67],
    [69, 71, 72, 74, 76, 77, 79],
    [81, 83, 84, 86, 88, 89, 91],
    [93, 95, 96, 98, 100, 101, 103],
    [105, 107, 108]
];

function imageOnLoadoad() {
    var image = new Image(),
        canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        img_width = 0,
        img_height = 0;

    image.src = processed_src;
    image.onload = function() {
        ctx.drawImage(image,
            0, (this.height / 20) * loc_y, // Start at 70/20 pixels from the left and the top of the image (crop),
            this.width, this.height / 20, // "Get" a `50 * 50` (w * h) area from the source image (crop),
            0, 0, // Place the result at 0, 0 in the canvas,
            500, 50); // With as width / height: 100 * 100 (scale)

        // document.getElementById('image-attribute').innerHTML = "Width: " + this.width + ", Height: " + this.height;
        var img_generated = new Image();
        img_generated.src = canvas.toDataURL();
        document.getElementById('generated').src = img_generated.src;

        setTimeout(function() {
            const img_togetExtraceted = document.getElementById('generated');

            if (img_togetExtraceted.complete) {
                var color_extracted = colorThief.getColor(img_togetExtraceted);
                var ceR = color_extracted[0];
                var ceG = color_extracted[1];
                var ceB = color_extracted[2];

                var convertedHSL = RGBToHSL(ceR, ceG, ceB);
                var ceH = convertedHSL[0];
                var ceS = convertedHSL[1];
                var ceL = convertedHSL[2];
                console.log(RGBToHSL(ceR, ceG, ceB));

                document.getElementById('color-blob').style.backgroundColor = "rgba(" + ceR + "," + ceG + "," + ceB + ",1)";
                // document.getElementById('color-rgb-text').innerHTML = "R:" + ceR + ", G:" + ceG + ", B:" + ceB + "  |  H:" + ceH + ", S:" + ceS + ", L:" + ceL;
                document.getElementById('color-rgb-text').innerHTML = "H:" + ceH + ", S:" + ceS + ", L:" + ceL;
                document.getElementById('slider_h').value = ceH;
                document.getElementById('slider_s').value = ceS;
                document.getElementById('slider_l').value = ceL;
                // document.getElementById('current-playing').innerHTML = "Playing "+ loc_y +" of 20 segment.";

                MIDI.loadPlugin({
                    soundfontUrl: "./midi/examples/soundfont/",
                    instrument: "acoustic_grand_piano",
                    onprogress: function(state, progress) {
                        console.log(state, progress);
                    },
                    onsuccess: function() {
                        var delay = 0; // play one note every quarter second
                        var velocity = 30; // how hard the note hits
                        // play the note
                        var num_h = Math.round(convertedHSL[0]);
                        var mappingNoteValueH = Math.round(num_h.map(0, 359, 0, 6));
                        var num_s = Math.round(convertedHSL[1]);
                        var mappingNoteValueS = Math.round(num_s.map(0, 255, 0, 6));

                        console.log("Hue: " + mappingNoteValueH + ", Saturation: " + mappingNoteValueS);
                        console.log("echoing " + piano_white_key[mappingNoteValueH][mappingNoteValueS]);

                        var mappingNoteValue = piano_white_key[mappingNoteValueH][mappingNoteValueS];
                        
                        MIDI.setVolume(0, 127);
                        var note = mappingNoteValue; // the MIDI note
                        MIDI.noteOn(0, note, velocity, delay);
                        MIDI.noteOff(0, note, delay + 1);
                    }
                });
            } else {
                image.addEventListener('load', function() {
                    console.log(colorThief.getColor(img_togetExtraceted));
                });
            }
        }, 50);
    }
}

const inputElement = document.getElementById("upload-input");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {

    if (this.files && this.files[0]) {
        const fileList = this.files; /* now you can work with the file list */
        console.log("uploaded");
        const selectedFile = document.getElementById('upload-input').files[0];
        console.log(selectedFile);
        var image = document.getElementById('file-preview');
        image.src = URL.createObjectURL(event.target.files[0]);
        console.log(document.getElementById('file-preview').src);

        document.getElementById('upload-input').setAttribute("style", "margin-left: -30px;display:none;");

        var FR = new FileReader();

        FR.addEventListener("load", function(e) {
            // document.getElementById("img").src       = e.target.result;
            // console.log(e.target.result);
            document.getElementById('file-preview').src = e.target.result;
            processed_src = e.target.result;
            loc_y = 0;
            imageOnLoadoad();
        });
        FR.readAsDataURL(this.files[0]);
    }
}

function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = { r: 0, g: 0, b: 0 },
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch (e) {
        /* security error, img on diff domain */
        return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
}