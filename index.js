const $ = require("konva");

const imageSettings = [
    {
        'path': 'assets/face.gif',
        'x': 80,
        'y': 200,
        'width': 372,
        'height': 464,
        'draggable': false,
    },
    {
        'path': 'assets/eye_left.gif',
        'x': 10,
        'y': 10,
        'width': 66,
        'height': 104,
        'draggable': true,
    },
    {
        'path': 'assets/eye_right.gif',
        'x': 70,
        'y': 10,
        'width': 66,
        'height': 95,
        'draggable': true,
    },
    {
        'path': 'assets/eye_left2.gif',
        'x': 130,
        'y': 10,
        'width': 36,
        'height': 71,
        'draggable': true,
    },
    {
        'path': 'assets/eye_right2.gif',
        'x': 190,
        'y': 10,
        'width': 36,
        'height': 74,
        'draggable': true,
    },
    {
        'path': 'assets/eye_left3.gif',
        'x': 260,
        'y': 10,
        'width': 86,
        'height': 83,
        'draggable': true,
    },
    {
        'path': 'assets/eye_right3.gif',
        'x': 330,
        'y': 10,
        'width': 83,
        'height': 82,
        'draggable': true,
    },
    {
        'path': 'assets/eyebrow_left.gif',
        'x': 10,
        'y': 120,
        'width': 30,
        'height': 32,
        'draggable': true,
    },
    {
        'path': 'assets/eyebrow_right.gif',
        'x': 50,
        'y': 120,
        'width': 38,
        'height': 30,
        'draggable': true,
    },
    {
        'path': 'assets/eyebrow_left2.gif',
        'x': 90,
        'y': 120,
        'width': 38,
        'height': 30,
        'draggable': true,
    },
    {
        'path': 'assets/eyebrow_right2.gif',
        'x': 150,
        'y': 120,
        'width': 38,
        'height': 30,
        'draggable': true,
    },
    {
        'path': 'assets/mouth.gif',
        'x': 210,
        'y': 120,
        'width': 29,
        'height': 8,
        'draggable': true,
    },
    {
        'path': 'assets/mouth2.gif',
        'x': 270,
        'y': 120,
        'width': 60,
        'height': 33,
        'draggable': true,
    },
    {
        'path': 'assets/mouth3.gif',
        'x': 330,
        'y': 120,
        'width': 69,
        'height': 61,
        'draggable': true,
    },
];


const stageWidth = 500;
const stageHeight = 1200;

const stage = new Konva.Stage({
    container: 'container',
    width: stageWidth,
    height: stageHeight
});

for (let i = 0; i < imageSettings.length; i++) {
    let imageObj = new Image();
    let settings = imageSettings[i];
    imageObj.onload = function () {
        drawImage(this, settings['x'], settings['y'], settings['width'], settings['height'], settings['draggable']);
    };
    imageObj.src = settings['path'];
}




function drawImage (imageObj, x, y, width, height, draggable) {
    const layer = new Konva.Layer();
    //Add image
    const img = new Konva.Image({
        x: x,
        y: y,
        image: imageObj,
        width: width,
        height: height,
        draggable: draggable,
    });

    if (draggable) {
        img.on('mouseover', function () {
            document.body.style.cursor = 'pointer';
        });
        img.on('mouseout', function () {
            document.body.style.cursor = 'default';
        });
    }

    layer.add(img);
    stage.add(layer);
    layer.moveToTop();
    layer.draw();
};


