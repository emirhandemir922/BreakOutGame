$(document).ready(function () {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var brick_width = 80;
    var brick_height = 20;
    var bricklvl1 = [
        { 'id': 0, 'visibility': true, 'x': 50, 'y': 50, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 1, 'visibility': true, 'x': 200, 'y': 50, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 2, 'visibility': true, 'x': 350, 'y': 50, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 3, 'visibility': true, 'x': 500, 'y': 50, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 4, 'visibility': true, 'x': 650, 'y': 50, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 5, 'visibility': true, 'x': 800, 'y': 50, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 6, 'visibility': true, 'x': 950, 'y': 50, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 7, 'visibility': true, 'x': 1100, 'y': 50, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 8, 'visibility': true, 'x': 1250, 'y': 50, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 9, 'visibility': true, 'x': 1400, 'y': 50, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 10, 'visibility': true, 'x': 1550, 'y': 50, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 11, 'visibility': true, 'x': 125, 'y': 75, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 12, 'visibility': true, 'x': 275, 'y': 75, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 13, 'visibility': true, 'x': 425, 'y': 75, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 14, 'visibility': true, 'x': 575, 'y': 75, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 15, 'visibility': true, 'x': 725, 'y': 75, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 16, 'visibility': true, 'x': 875, 'y': 75, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 17, 'visibility': true, 'x': 1025, 'y': 75, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 18, 'visibility': true, 'x': 1175, 'y': 75, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 19, 'visibility': true, 'x': 1325, 'y': 75, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 20, 'visibility': true, 'x': 1475, 'y': 75, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 21, 'visibility': true, 'x': 1625, 'y': 75, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 22, 'visibility': true, 'x': 50, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 23, 'visibility': true, 'x': 200, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 24, 'visibility': true, 'x': 350, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 25, 'visibility': true, 'x': 500, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 26, 'visibility': true, 'x': 650, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 27, 'visibility': true, 'x': 800, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 28, 'visibility': true, 'x': 950, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 29, 'visibility': true, 'x': 1100, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 30, 'visibility': true, 'x': 1250, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 31, 'visibility': true, 'x': 1400, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 32, 'visibility': true, 'x': 1550, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 33, 'visibility': true, 'x': 125, 'y': 125, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 34, 'visibility': true, 'x': 275, 'y': 125, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 35, 'visibility': true, 'x': 425, 'y': 125, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 36, 'visibility': true, 'x': 575, 'y': 125, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 37, 'visibility': true, 'x': 725, 'y': 125, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 38, 'visibility': true, 'x': 875, 'y': 125, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 39, 'visibility': true, 'x': 1025, 'y': 125, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 40, 'visibility': true, 'x': 1175, 'y': 125, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 41, 'visibility': true, 'x': 1325, 'y': 125, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 42, 'visibility': true, 'x': 1475, 'y': 125, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 43, 'visibility': true, 'x': 1625, 'y': 125, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 44, 'visibility': true, 'x': 50, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 45, 'visibility': true, 'x': 200, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 46, 'visibility': true, 'x': 350, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 47, 'visibility': true, 'x': 500, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 48, 'visibility': true, 'x': 650, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 49, 'visibility': true, 'x': 800, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 50, 'visibility': true, 'x': 950, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 51, 'visibility': true, 'x': 1100, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 52, 'visibility': true, 'x': 1250, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 53, 'visibility': true, 'x': 1400, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height },
        { 'id': 54, 'visibility': true, 'x': 1550, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height }

    ]
    var bricklvl2 = [
        { 'id': 0, 'visibility': true, 'x': 50, 'y': 50, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 1, 'visibility': true, 'x': 200, 'y': 50, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 2, 'visibility': true, 'x': 350, 'y': 50, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 3, 'visibility': true, 'x': 500, 'y': 50, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 4, 'visibility': true, 'x': 650, 'y': 50, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 5, 'visibility': true, 'x': 800, 'y': 50, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 6, 'visibility': true, 'x': 950, 'y': 50, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 7, 'visibility': true, 'x': 1100, 'y': 50, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 8, 'visibility': true, 'x': 1250, 'y': 50, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 9, 'visibility': true, 'x': 1400, 'y': 50, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 10, 'visibility': true, 'x': 1550, 'y': 50, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 11, 'visibility': true, 'x': 50, 'y': 100, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 12, 'visibility': true, 'x': 200, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 13, 'visibility': true, 'x': 350, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 14, 'visibility': true, 'x': 500, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 15, 'visibility': true, 'x': 650, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 16, 'visibility': true, 'x': 800, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 17, 'visibility': true, 'x': 950, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 18, 'visibility': true, 'x': 1100, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 19, 'visibility': true, 'x': 1250, 'y': 100, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 20, 'visibility': true, 'x': 1400, 'y': 100, 'type': 'speed', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 21, 'visibility': true, 'x': 1550, 'y': 100, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 22, 'visibility': true, 'x': 50, 'y': 150, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 23, 'visibility': true, 'x': 200, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 24, 'visibility': true, 'x': 1400, 'y': 150, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 25, 'visibility': true, 'x': 1550, 'y': 150, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 26, 'visibility': true, 'x': 50, 'y': 200, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 27, 'visibility': true, 'x': 200, 'y': 200, 'type': 'speed', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 28, 'visibility': true, 'x': 1400, 'y': 200, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 29, 'visibility': true, 'x': 1550, 'y': 200, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 30, 'visibility': true, 'x': 50, 'y': 250, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 31, 'visibility': true, 'x': 200, 'y': 250, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 32, 'visibility': true, 'x': 1400, 'y': 250, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 33, 'visibility': true, 'x': 1550, 'y': 250, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 34, 'visibility': true, 'x': 50, 'y': 300, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 35, 'visibility': true, 'x': 200, 'y': 300, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 36, 'visibility': true, 'x': 1400, 'y': 300, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 37, 'visibility': true, 'x': 1550, 'y': 300, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 38, 'visibility': true, 'x': 50, 'y': 350, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 39, 'visibility': true, 'x': 200, 'y': 350, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 40, 'visibility': true, 'x': 1400, 'y': 350, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 41, 'visibility': true, 'x': 1550, 'y': 350, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 42, 'visibility': true, 'x': 50, 'y': 400, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 43, 'visibility': true, 'x': 200, 'y': 400, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 44, 'visibility': true, 'x': 1400, 'y': 400, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 45, 'visibility': true, 'x': 1550, 'y': 400, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0 },
        { 'id': 46, 'visibility': true, 'x': 50, 'y': 450, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 47, 'visibility': true, 'x': 200, 'y': 450, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 48, 'visibility': true, 'x': 1400, 'y': 450, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 49, 'visibility': true, 'x': 1550, 'y': 450, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 50, 'visibility': true, 'x': 50, 'y': 500, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 51, 'visibility': true, 'x': 200, 'y': 500, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 52, 'visibility': true, 'x': 1400, 'y': 500, 'type': null, 'width': brick_width, 'height': brick_height, 'crash': 0  },
        { 'id': 53, 'visibility': true, 'x': 1550, 'y': 500, 'type': 'metal', 'width': brick_width, 'height': brick_height, 'crash': 0  }

    ]
    
    var bricklvl = bricklvl2;

    var lives = 3;
    var brickLeft = 0;

    var ball_position = { x: 400, y: 200 };
    var velocity = 3,
        corner = 15,
        rad = 10;
    var ball = { x: ball_position.x, y: ball_position.y, rad: rad, angle: corner };
    var moveX = Math.cos(Math.PI / 180 * corner) * velocity;
    var moveY = Math.sin(Math.PI / 180 * corner) * velocity;

    var paddle_position = 500;
    var paddle_width = 210;

    function createBricks() {
        for (i = 0; i < bricklvl.length; i++) {
            if (bricklvl[i]["visibility"] == true) {
                brickLeft += 1;

                if (bricklvl[i]['type'] == "metal") {
                    const destX = bricklvl[i]["x"];
                    const destY = bricklvl[i]["y"];
                    const destWidth = bricklvl[i]["width"];
                    const destHeight = bricklvl[i]["height"];

                    if (bricklvl[i]["crash"] == 0) {
                        var img = new Image();
                        img.src = 'white-gray-metallic.jpg';
                    }
                    else {
                        var img = new Image();
                        img.src = 'white-gray-metallic-broken.jpg';
                    }
                    ctx.drawImage(img, destX, destY, destWidth, destHeight);
                }
                else {
                    const destX = bricklvl[i]["x"];
                    const destY = bricklvl[i]["y"];
                    const destWidth = bricklvl[i]["width"];
                    const destHeight = bricklvl[i]["height"];

                    var img = new Image();
                    img.src = 'brick.jpg';
                    ctx.drawImage(img, destX, destY, destWidth, destHeight);
                }
            }
        }
    } 

    function updateBricks() {
        brickLeft = 0;

        for (i = 0; i < bricklvl.length; i++) {
            if (bricklvl[i]["visibility"] == true) {
                brickLeft += 1 ;

                if (bricklvl[i]['type'] == "metal") {
                    const destX = bricklvl[i]["x"];
                    const destY = bricklvl[i]["y"];
                    const destWidth = bricklvl[i]["width"];
                    const destHeight = bricklvl[i]["height"];

                    if (bricklvl[i]["crash"] == 0) {
                        ctx.drawImage(metalImg, destX, destY, destWidth, destHeight);
                    }
                    else {
                        ctx.drawImage(brokenMetalImg, destX, destY, destWidth, destHeight);
                    }
                }
                else {
                    const destX = bricklvl[i]["x"];
                    const destY = bricklvl[i]["y"];
                    const destWidth = bricklvl[i]["width"];
                    const destHeight = bricklvl[i]["height"];

                    ctx.drawImage(brickImg, destX, destY, destWidth, destHeight);
                }
            }
        }
    } 

    function collision(ballObj, brickObj) {
        if (brickObj.visibility == true) {
            if (((ballObj.x + ballObj.rad / 2 ) > brickObj.x) &&
                ((ballObj.x - ballObj.rad / 2 ) < brickObj.x + brick_width) &&
                ((ballObj.y - ballObj.rad / 2 ) < brickObj.y + brick_height) &&
                ((ballObj.y + ballObj.rad / 2 ) > brickObj.y)) {

                brickObj.crash += 1;

                var audio = document.getElementById("audio");
                audio.play();

                if (brickObj.type != "metal") {
                    if (brickObj.type == "speed") {
                        alert("Speed brick");

                        if (moveX < 0) {
                            moveX -= 1;
                        }
                        else {
                            moveX += 1;
                        }

                        if (moveY < 0) {
                            moveY -= 1;
                        }
                        else {
                            moveY += 1;
                        }

                        brickObj.visibility = false;
                    }
                    else {
                        brickObj.visibility = false;
                    }
                }
                else if (brickObj.type == "metal" && brickObj.crash == 2) {
                    brickObj.visibility = false;
                }

                //If else statements for the direction of the ball after bouncing back from the bricks
                if (moveX < 0 && moveY > 0) {
                    if ((ballObj.y + ballObj.rad / 2 - (brickObj.y)) < (brickObj.x + brickObj.width - (ballObj.x - ballObj.rad/2))) {
                        moveY = -1 * moveY;
                        return null;
                    }
                    else {
                        moveX = -1 * moveX;
                        return null;
                    }
                }
                else if (moveX < 0 && moveY < 0) {
                    if ((brickObj.y + brickObj.height) - (ballObj.y + ballObj.rad/2) < (brickObj.x + brickObj.width - (ballObj.x - ballObj.rad/2))) {
                        moveY = -1 * moveY;
                        return null;
                    }
                    else {
                        moveX = -1 * moveX;
                        return null;
                    }
                }
                else if (moveX > 0 && moveY < 0) {
                    if (brickObj.y + brickObj.height - (ballObj.y - ballObj.rad/2) < (ballObj.x + ballObj.rad/2 - (brickObj.x))) {
                        moveY = -1 * moveY;
                        return null;
                    }
                    else {
                        moveX = -1 * moveX;
                        return null;
                    }
                }
                else if (moveX > 0 && moveY > 0) {
                    if (ballObj.y + ballObj.rad / 2 - (brickObj.y) < (ballObj.x + ballObj.rad/2 - (brickObj.x))) {
                        moveY = -1 * moveY;
                        return null;
                    }
                    else {
                        moveX = -1 * moveX;
                        return null;
                    }
                }
            }
        }
    }

    function checkPaddleInterception(x, y, paddle_position) {
        //Depending on the paddle's position ball-angle changes

        if ((ball.x >= paddle_position) && (ball.x < paddle_position + paddle_width * 1/8)) {
            corner = 165;
        }
        else if ((ball.x >= paddle_position + paddle_width * 1 / 8) && (ball.x < paddle_position + paddle_width * 2 / 8)) {
            corner = 150;
        }
        else if ((ball.x >= paddle_position + paddle_width * 2 / 8) && (ball.x < paddle_position + paddle_width * 3 / 8)) {
            corner = 135;
        }
        else if ((ball.x >= paddle_position + paddle_width * 3 / 8) && (ball.x < paddle_position + paddle_width * 4 / 8)) {
            corner = 100;
        }
        else if ((ball.x >= paddle_position + paddle_width * 4 / 8) && (ball.x < paddle_position + paddle_width * 5 / 8)) {
            corner = 80;
        }
        else if ((ball.x >= paddle_position + paddle_width * 5 / 8) && (ball.x < paddle_position + paddle_width * 6 / 8)) {
            corner = 45;        }
        else if ((ball.x >= paddle_position + paddle_width * 6 / 8) && (ball.x < paddle_position + paddle_width * 7 / 8)) {
            corner = 30;
        }
        else if ((ball.x >= paddle_position + paddle_width * 7 / 8) && (ball.x <= paddle_position + paddle_width * 8 / 8)) {
            corner = 15;
        }
        else {
            return null;
        }

        moveX = Math.cos(Math.PI / 180 * corner) * velocity;
        if (moveY > 0) {
            moveY = -1 * (Math.sin(Math.PI / 180 * corner) * velocity);
        }
        else {
            moveY = Math.sin(Math.PI / 180 * corner) * velocity;
        }
    }

    createBricks();

    function DrawMe() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (i = 0; i < bricklvl.length; i++) {
            collision(ball, bricklvl[i]);
        }

        if (brickLeft == 0) { alert("You won!"); }
        updateBricks();

        //If statements for checking if the ball hit the game borders 
        if (ball.x > canvas.width - rad || ball.x < rad) {
            moveX = -moveX;
        }
        if (ball.y < rad) {
            moveY = -moveY;
        }
        if (ball.y > canvas.height - 50 - rad) {
            if (ball.x > paddle_position && ball.x < (paddle_position + 280)) {
                checkPaddleInterception(ball.x, ball.y, paddle_position);
            }
            else {
                lives -= 1;
                if (lives == 0) {
                    alert("Game over");
                    location.reload();
                }
                else {
                    ball.x = 1000;
                    ball.y = 200;
                }
            }
        }

        //Paddle control function
        $(document).on('keydown', function (e) {
            if (!key) {
                if (e.which == 37 && paddle_position > 0) {
                    paddle_position -= 30;
                    key = true;
                    return;
                }
                else if (e.which == 39 && paddle_position < 1600) {
                    paddle_position += 30;
                    key = true;
                    return;
                }
            }
        });
        key = false;

        ball.x += moveX;
        ball.y += moveY;

        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(ball.x, ball.y, rad, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();

        //var img = new Image();
        //img.src = '../images/silver-ball.jpg';
        //ctx.drawImage(img, paddle_position, 850, 210, 15);

        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.fillRect(paddle_position, 850, 210, 15);
        ctx.closePath();

        $('#lives').text("Lives Left :" + lives);

        $('#info').html(
            'moveX:' + moveX +
            ' moveY:' + moveY +
            ' ball.x:' + ball.x +
            ' ball.y:' + ball.y);
    }
    var brickImg = new Image();
    brickImg.onload = function () {
        return null;
    }
    brickImg.src = 'brick.jpg';

    var metalImg = new Image();
    metalImg.onload = function () {
        return null;
    }
    metalImg.src = 'white-gray-metallic.jpg';

    var brokenMetalImg = new Image();
    brokenMetalImg.onload = function () {
        return null;
    }
    brokenMetalImg.src = 'white-gray-metallic-broken.jpg';

    setInterval(DrawMe, 10);
});