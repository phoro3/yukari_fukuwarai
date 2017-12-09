const $ = require("konva");


const stageWidth = 500;
const stageHeight = 500;
const imageSettings = [
    {
        'path': 'assets/face.gif',
        'x': 100,
        'y': 100,
        'width': 248,
        'height': 310,
        'draggable': false,
    },
    {
        'path': 'assets/eye_left.gif',
        'x': 10,
        'y': 10,
        'width': 22,
        'height': 31,
        'draggable': true,
    },
];

const stage = new Konva.Stage({
    container: 'container',
    width: stageWidth,
    height: stageHeight
});

for (let i = 0; i < imageSettings.length; i++) {
    let imageObj = new Image();
    settings = imageSettings[i];
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
};


