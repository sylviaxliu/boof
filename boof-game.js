


/************ ACTIONS **************/

// display the key sequence



/************ SPAWNING **************/

function createSprite(ctx, path, coords) {
    let obj = {};

    let img = new Image();
    img.src = path;

    obj.img = img;
    obj.coords = coords;

    return obj;
}


var objects = [];
var enemies = [];
var canvas = document.getElementById("boof-gamecanvas");
var ctx = canvas.getContext("2d");


//Draw house
var house = createSprite(ctx, "./sprites/house.png", { x: 0, y: 350, w: 300, h: 250 });
objects.push(house);

//Draw boof_gun
var boof_gun = createSprite(ctx, "./sprites/boof_gun.png", { x: 45, y: 215, w: 240, h: 150 });
objects.push(boof_gun);

//Draw enemy
//var enemy = createSprite(ctx, "./sprites/enemy.png", { x: 910, y: 460, w: 440, h: 350 });
//objects.push(enemy);


function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let obj of objects) {
        ctx.drawImage(obj.img, obj.coords.x, obj.coords.y, obj.coords.w, obj.coords.h);
    }
    for (let obj of enemies) {
        ctx.drawImage(obj.img, obj.coords.x, obj.coords.y, obj.coords.w, obj.coords.h);
    }
    for (let obj of k2) {
        ctx.drawImage(obj.img, obj.coords.x, obj.coords.y, obj.coords.w, obj.coords.h);
    }
    ctx.strokeText("Score:", 800, 100);
    ctx.strokeText(score, 850, 100);
}

var globalTime = 0;
setInterval(() => {
    globalTime += 1000;
}, 1000);

//controls movement of sprite
setInterval(() => {
    for (i = 0; i < enemies.length; i++) {
        enemies[i].coords.x -= 1;
    }
    drawCanvas();
}, 10);

// create new enemy
//   let spawnInterval = setInterval(() => {
//     var enemy = createSprite(ctx, "./sprites/enemy.png", { x: 910, y: 460, w: 240, h: 150 });
//     objects.push(enemy);
//     spawnTimer-=globalTime;
//   }, spawnTimer)


setInterval(() => {
    var enemy = createSprite(ctx, "./sprites/enemy.png", { x: 910, y: 460, w: 240, h: 150 });
    enemies.push(enemy);
    if (enemies[0].coords.x <= 200) {
        window.location = `./boof-death.html#score=#${score}`;
    };
}, 1750);

startFunction();


