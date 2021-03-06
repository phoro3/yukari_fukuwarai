const $ = require("konva");

const imageSettings = [
    {
        'path': 'assets/face.gif',
        'x': 600,
        'y': 50,
        'width': 372,
        'height': 464,
        'draggable': false,
    },
    {
        'path': 'assets/eye_right.gif',
        'x': 10,
        'y': 30,
        'width': 66,
        'height': 95,
        'draggable': true,
    },
    {
        'path': 'assets/eye_left.gif',
        'x': 100,
        'y': 30,
        'width': 66,
        'height': 104,
        'draggable': true,
    },
    {
        'path': 'assets/eye_right2.gif',
        'x': 190,
        'y': 30,
        'width': 36,
        'height': 71,
        'draggable': true,
    },
    {
        'path': 'assets/eye_left2.gif',
        'x': 260,
        'y': 30,
        'width': 36,
        'height': 74,
        'draggable': true,
    },
    {
        'path': 'assets/eye_right3.gif',
        'x': 310,
        'y': 30,
        'width': 86,
        'height': 83,
        'draggable': true,
    },
    {
        'path': 'assets/eye_left3.gif',
        'x': 410,
        'y': 30,
        'width': 83,
        'height': 82,
        'draggable': true,
    },
    {
        'path': 'assets/eyebrow_right.gif',
        'x': 30,
        'y': 230,
        'width': 30,
        'height': 32,
        'draggable': true,
    },
    {
        'path': 'assets/eyebrow_left.gif',
        'x': 90,
        'y': 230,
        'width': 38,
        'height': 30,
        'draggable': true,
    },
    {
        'path': 'assets/eyebrow_right2.gif',
        'x': 160,
        'y': 230,
        'width': 38,
        'height': 30,
        'draggable': true,
    },
    {
        'path': 'assets/eyebrow_left2.gif',
        'x': 230,
        'y': 230,
        'width': 38,
        'height': 30,
        'draggable': true,
    },
    {
        'path': 'assets/mouth.gif',
        'x': 300,
        'y': 230,
        'width': 29,
        'height': 8,
        'draggable': true,
    },
    {
        'path': 'assets/mouth2.gif',
        'x': 360,
        'y': 230,
        'width': 60,
        'height': 33,
        'draggable': true,
    },
    {
        'path': 'assets/mouth3.gif',
        'x': 450,
        'y': 230,
        'width': 69,
        'height': 61,
        'draggable': true,
    },
];



const stageWidth = 1000;
const stageHeight = 600;

const box_x = 600;
const box_y = 50;
const box_width = 380;
const box_height = 300;
const box_color = '#FC7A62';

const stage = new Konva.Stage({
    container: 'container',
    width: stageWidth,
    height: stageHeight
});


reset();

function reset() {
    //Clear Stage
    stage.clear();
    stage.removeChildren();

    const layer = new Konva.Layer();
    const group = new Konva.Group();
    
    //Add images
    for (let i = 0; i < imageSettings.length; i++) {
        let imageObj = new Image();
        let settings = imageSettings[i];
        imageObj.onload = function () {
            drawImage(this, settings['x'], settings['y'], settings['width'], settings['height'], settings['draggable'], group);
            layer.add(group);
            stage.add(layer);
            group.moveToBottom();
            layer.draw();
        };
        imageObj.src = settings['path'];
    }

    //Add Box
    const box = new Konva.Rect({
        x: box_x,
        y: box_y,
        width: box_width,
        height: box_height,
        fill: box_color,
        opacity: 1
    });
    layer.add(box);
}




function drawImage (imageObj, x, y, width, height, draggable, group) {
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

    group.add(img);
};

document.getElementById('open_button').addEventListener('click', function () {
    const layer = stage.getChildren(function (node) {
        return node.getClassName() === 'Layer';
    });
    const box = layer[layer.length - 1].getChildren(function (node) {
        return node.getClassName() === 'Rect';
    });
    const group = layer[layer.length - 1].getChildren(function (node) {
        return node.getClassName() === 'Group';
    });
    const images = group[group.length - 1].getChildren(function (node) {
        return node.getClassName() === 'Image';
    });
    box.opacity(0);
    console.log(images[0]);
    for (let i = 0; i < images.length; i++) {
        images[i].draggable(false);
    }
    layer.draw();
}, false);

document.getElementById('reset_button').addEventListener('click', function () {
    reset();
}, false);
