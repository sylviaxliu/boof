let k = [];
let check = [];
let output = [];
let score = 0;
let k2 = [];

function random() {
    return Math.floor(Math.random() * 4);
}
function startFunction() {

    for (let num = 0; num < 4; num++) {
        let i = random();
        if (i == 0) {
            let right = createSprite(ctx, "./sprites/arrow_right.png", { x: 200 + (150 * num), y: 20, w: 150, h: 100 });
            k.push("ArrowRight");
            k2.push(right);
        } else if (i == 1) {
            let left = createSprite(ctx, "./sprites/arrow_left.png", { x: 200 + (150 * num), y: 20, w: 150, h: 100 });
            k.push("ArrowLeft");
            k2.push(left);
        } else if (i == 2) {
            let up = createSprite(ctx, "./sprites/arrow_up.png", { x: 200 + (150 * num), y: 20, w: 150, h: 100 });
            k.push("ArrowUp");
            k2.push(up);
        } else if (i == 3) {
            let down = createSprite(ctx, "./sprites/arrow_down.png", { x: 200 + (150 * num), y: 20, w: 150, h: 100 });
            k.push("ArrowDown");
            k2.push(down);
        }
    }
}

// function drawCanvas() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let obj of k) {
//       ctx.drawImage(obj.img, obj.coords.x, obj.coords.y, obj.coords.w, obj.coords.h);
//       }
//     }
document.onkeydown = function myFunction(event) {
    check.push(event.key);
    console.log(check);

    let bool = true;
    //document.getElementById("space1").innerHTML = "";

    if (check.length % 4 == 0) {
        for (let y = 0; y < k.length; y++) {
            if (check[y] != k[y]) {
                bool = false;
                check = [];
            }
        }
        if (bool == true) {
            score++;
            enemies.shift();
            setTimeout(() => {
                softResetFunction();
            }, 250);
        } else {
            //document.getElementById("space1").innerHTML = "Try again!";
            setTimeout(() => {
                //document.getElementById("space1").innerHTML = "";
            }, 250);
        }
    }
    // else {
    //     setTimeout(() => {
    //         softResetFunction();
    //     }, 250);
    // }
};

function softResetFunction() {
    check = [];
    k = [];
    k2 = [];
    objects.splice(2, 1);
    //document.getElementById("space1").innerHTML = "";
    startFunction();
}