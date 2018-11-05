// Setup Canvas and graphics Context 
let cnv = document.getElementById("cvs");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Vars
let mouseIsPressed = false;
let mouseX, mouseY;
let size = 5;

// main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
    // Update Variables

    // Draw circle if mouseIsPressed
    if (mouseIsPressed) {
        ctx.fillStyle = "black"
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, size, 0, 2 * Math.PI);
        ctx.fill();
    }

    requestAnimationFrame(loop);
}
// Event stuff
document.addEventListener("mousedown", mouseHandler);
document.addEventListener("mouseup", mouseHandler2);
document.addEventListener("mousemove", mouseHandler3);
document.addEventListener("keydown", keyHandler);

function mouseHandler() {
    console.log(event);
    mouseIsPressed = true;
}

function mouseHandler2() {
    mouseIsPressed = false;
}

function mouseHandler3(event) {
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

function keyHandler(event) {
    if (event.code == "Space") {
        //Draw background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.height);
    }
}