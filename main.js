addRow()

function addRow() {
    const div = document.createElement('div');

    div.className = '';
    var row_loop = "";
    var col_loop = "";
    var counter = 0;

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 14; j++) {
            if (counter == 71) {
                var img_content = `<a id="sample1" type="button" data-toggle="modal" data-target="#lightbox"><img class="rounded-img" src="./images/photos/p1.jpg" width="60rem" />`;
                row_loop += `<div class="col">` + img_content + `</a></div>\n`;
            } else if (counter == 79) {
                var img_content = `<img class="rounded-img" src="./images/photos/p2.jpg" width="60rem" />`;
                row_loop += `<div class="col">` + img_content + `</div>\n`;
            } else if (counter == 87) {
                var img_content = `<img class="rounded-img" src="./images/photos/p3.jpg" width="60rem" />`;
                row_loop += `<div class="col">` + img_content + `</div>\n`;
            } else if (counter == 96) {
                var img_content = `<img class="rounded-img" src="./images/photos/p4.jpg" width="60rem" />`;
                row_loop += `<div class="col">` + img_content + `</div>\n`;
            } else if (counter == 98) {
                var img_content = `<img class="rounded-img" src="./images/photos/p5.jpg" width="60rem" />`;
                row_loop += `<div class="col">` + img_content + `</div>\n`;
            } else if (counter == 104) {
                var img_content = `<img class="rounded-img" src="./images/photos/p6.jpg" width="60rem" />`;
                row_loop += `<div class="col">` + img_content + `</div>\n`;
            } else if (counter == 108) {
                var img_content = `<img class="rounded-img" src="./images/photos/p9.jpg" width="60rem" />`;
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


    console.log(document.getElementById('icon-bg').clientHeight);

    div.innerHTML = col_loop;

    document.getElementById('icon-bg').appendChild(div);
    console.log("appended.");
}