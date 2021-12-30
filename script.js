const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


function wrapText(context, text, x, y, maxWidth, lineHeight, size, c = "black", font = "", makeItCenter = false) {
    var words = text.split(' ');
    var line = '';

    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    if (makeItCenter) context.textAlign = "center";
    context.fillStyle = c
    context.font = `${size}px ${font}`
    context.fillText(line, x, y);
}

//drawfunction
//!this is for rectangle
//use this if object is not move
/**
 * 
 * @param {x} number
 * @param {y} number
 * @param {w} number
 * @param {h} number
 * @param {c} string 
 * 
 * this is for draw rectangle easy using this function make
 * some
 */
function drawRect(x, y, w, h, c) {
    ctx.fillStyle = c
    ctx.fillRect(x, y, w, h)
}

//*use this if object is block
/**
 * 
 * @param {Symbol} number
 * @param {y} number
 * @param {w} number
 * @param {h} number
 * @param {c} string 
 */
function drawRectMove(x, y, w, h, c) {
    ctx.fillStyle = c
    ctx.beginPath()
    ctx.fillRect(x, y, w, h)
    ctx.closePath()
}
//-------------------------------------\\

//!this is for circle
//*use this if circle is not move
function drawCircle(x, y, r, c) {
    ctx.fillStyle = c
    ctx.arc(x, y, r, 0, Math.PI * 2, false)
    ctx.fill()
}

//*this is if circle is not move
function drawCircleMove(x, y, r, c) {
    ctx.fillStyle = c
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2, false)
    ctx.fill()
    ctx.closePath()
}
//-----------------------------------------------\\

//!text
//*this is fill text
function text(context, text, x, y, c, font, size, makeItCenter = false, maxWidth) {
    if (makeItCenter) context.textAlign = "center";
    context.fillStyle = c
    context.font = `${size}px ${font}`
    context.fillText(text, x, y, maxWidth)
}

//*this is stroke text
function textStroke(context, text, x, y, c, font, size, makeItCenter = false, maxWidth) {
    if (makeItCenter) context.textAlign = "center";
    context.beginPath()
    context.fillStyle = c
    context.font = `${size}px ${font}`
    context.strokeText(text, x, y, maxWidth)
}

/* --------------------------------------- */

//image
/**
 * 
 * @param {image} image
 * @param {sx} sourceX
 * @param {sy} sourceY
 * @param {sw} source_Width
 * @param {sh} source_height
 * @param {dx} documentX
 * @param {dy} documentY
 * @param {dw} document_width
 * @param {dh} document_height
 */
function image(image, [sx], [sy], [sw], [sh], [dx], [dy], [dw], [dh]) {
    ctx.beginPath()
    ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.closePath()
}

let window_width;
let window_height;


setInterval(() => {
    window_width = window.innerWidth;
    window_height = window.innerHeight;
}, 0)

canvas.width = innerWidth
canvas.height = innerHeight

let textInthis = {
    2021: {
        years: "2021",
        color: "RGBA(255, 255, 255, 1)"
    },

    2022: {
        years: "2022",
        color: "RGBA(255, 255, 255, 1)"
    },

    note: "we will leave 2021 soon with a lot of memories that we leave behind we will miss it but time will continue so be excited I know we will meet again in the next year I  promise thank you very much 2021 has given us a lot of happy memories, sad also has given us a lot shock",
    from: "I'm hiyo wishing you a happy new year",
    thanks: "also thanks to member of gabutz and all of my friend also my family thank you"
}

//2021
let textX = 3
let Opacity = 0
let text2X = -3

//typing effect
let index = 0
let speed = 70
let simpleText = ""
let simpleText2 = ""
let simpleText3 = ""

let checkWindows = true

let rectwidth = canvas.width
let rectwidth2 = 0
let rectwidthOpacity = 1
let colorTransition = 0

var distance;

let textOpacity = 0
let transitionIsComplete = false

let textChangeYears = canvas.height / 2
let textChangeYears2 = canvas.height / 2 + 60
let textChangeYears3 = 310

let foundMiniGame = false
let wannaPlayGame = false
let backToTheLobby = true
let timeRectWidth2 = 500

var minutes;
var seconds;
var hours
var days

let happyNewYear = false
var countDownDate = new Date("Saturday, January 01, 2022").getTime();

let maxWidth = canvas.width
let xLayerDown = canvas.height / 2 + 290
let yLayerDown = canvas.width / 2

let size = 40

let texttransitionY = 2

function style() {
    if (canvas.width <= 920 || canvas.height <= 669 && checkWindows) {
        checkWindows = false
    } else checkWindows = true


    ctx.fillStyle = "rgba(255, 255, 255, 1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    let randomColor = {
        red: Math.floor(Math.random() * 8),
        green: Math.floor(Math.random() * 6),
        blue: Math.floor(Math.random() * 5)
    }


    setInterval(() => {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 50) {
            happyNewYear = true
        }
    }, 1000);

    canvas.style.backgroundColor = "rgb(255, 255, 255)"
    if (canvas.width !== window_width || canvas.height !== canvas.height) {
        location.reload()
    }



    if (rectwidth <= canvas.width) {
        rectwidth -= 20
    }

    if (!backToTheLobby) {
        timeRectWidth2 = -500
    }

    if (!wannaPlayGame && backToTheLobby) {
        if (rectwidth2 < canvas.width && rectwidth < 0) {
            setTimeout(() => {
                rectwidth2 += 20
            }, timeRectWidth2)
        }
    } else {
        if (transitionIsComplete) {
            if (rectwidth2 >= canvas.width || rectwidth2 < canvas.width) {
                rectwidth2 -= 20
            }
        }
    }
    // ctx.font = "40px Arial";
    // ctx.textAlign = "center";
    // ctx.fillStyle = "RGBA(255, 255, 255, 0.1)";
    // ctx.fillText("Hello World", canvas.width / 2, canvas.height / 2);

    if (rectwidth < 0 && rectwidth2 > 30) {
        if (textX > texttransitionY) {
            textX -= 0.04
        }

        if (text2X < 50) {
            text2X += 4
        }

        if (Opacity < 1) {
            Opacity += 0.09
        }

        if (textOpacity < 1) {
            textOpacity += 0.01
        }

        if (index < textInthis.note.length) {
            setTimeout(() => {
                simpleText += textInthis.note.charAt(index)
                simpleText2 += textInthis.from.charAt(index)
                simpleText3 += textInthis.thanks.charAt(index)
                index++
            }, speed)
        }

        colorTransition -= 0.01
        rectwidthOpacity -= 0.01
    }
    drawRect(0, 0, rectwidth2, canvas.height, `RGBA(0, 0, 0, 1)`)

    if (rectwidth2 >= canvas.width) {
        transitionIsComplete = true
    }

    if (happyNewYear) {
        if (distance < 50) {
            if (textChangeYears > 60) {
                textChangeYears -= 7
            }

            if (textChangeYears2 > 100) {
                textChangeYears2 -= 4
            }
            text(ctx, textInthis[2022].years, canvas.width / 2, textChangeYears, `RGBA(255, 255, 255 , 1)`, "kanit", 40, true)
            wrapText(ctx, "SELAMAT TAHUN BARU INDONESIAAAAAAA YEAH ULULULULULLULLULULULLULULULU dah saya mau makan lapar saya bikin beginian ah tidur woy besok sekolah".toUpperCase(), canvas.width / 2, textChangeYears2, 1000, 44, size, `RGBA(255, 255, 255, ${textOpacity})`, "Open-Sans", true)

            if (textChangeYears2 <= 100) {
                if (textChangeYears3 > 10) {
                    textChangeYears3 -= 6
                }

                wrapText(ctx, "Quotes di tahun ini adalah: 'Try not to become a man of success, but rather try to become a man of value || Genius is 1 % talent and 99 % hard work' - albert einstein".toUpperCase(), canvas.width / 2, canvas.height / 2 + textChangeYears3, canvas.width, 44, size, `RGBA(255, 255, 255, ${textOpacity})`, "Open-Sans", true)
            }
        } else {
            drawRect(0, 0, canvas.width, canvas.height, "black")
            if (days !== undefined || hours !== undefined || minutes !== undefined || seconds !== undefined) {
                text(ctx, `SISA: ${seconds} detik`, canvas.width / 2, canvas.height / 4, "RGBA(255, 255, 255, 1)", "kanits", "20", true)
            }
            text(ctx, textInthis[2021].years, canvas.width / 2, canvas.height / 2, `RGBA(255, 255, 255 , 1)`, "kanit", 40, true)
            if (checkWindows) {
                wrapText(ctx, "okay semuanya kita sebentar lagi akan bergantian tahun apakah yang kalian harapkan? semoga tercapai dan have fun with your family :)", canvas.width / 2, canvas.height / 2 + 60, canvas.width, 44, size, `RGBA(255, 255, 255, ${textOpacity})`, "Open-Sans", true)
                wrapText(ctx, textInthis.thanks, canvas.width / 2, canvas.height / 2 + 190, canvas.width, 44, size, `RGBA(255, 255, 255, ${textOpacity})`, "Open-Sans", true)
            }
            foundMiniGame = false
            wannaPlayGame = false
        }
    } else {
        if (rectwidth2 > 30) {
            if (days !== undefined || hours !== undefined || minutes !== undefined || seconds !== undefined) {
                text(ctx, `SISA: ${days} hari || ${hours} jam || ${minutes} menit || ${seconds} detik`, canvas.width / 2, canvas.height / 4, "RGBA(255, 255, 255, 1)", "kanits", "20", "true")
            }

            text(ctx, "🥳countDown 2022🥳", canvas.width / 2, text2X, "white", "kanit", "40", "true")



            text(ctx, textInthis[2021].years, canvas.width / 2, canvas.height / textX, `RGBA(255, 255, 255 ,${Opacity})`, "kanit", 40, true)

            if (textX < 2) {
                if (checkWindows) {
                    wrapText(ctx, simpleText, canvas.width / 2, canvas.height / 2 + 60, maxWidth, 44, size, `RGBA(255, 255, 255, ${textOpacity})`, "kanit", true)
                    wrapText(ctx, simpleText2, yLayerDown, xLayerDown, maxWidth, 44, size, `RGBA(255, 255, 255, ${textOpacity})`, "kanit", true)
                }
            }
        }
    }


    drawRect(0, 0, rectwidth, canvas.height, `rgba(0, ${colorTransition}, 0, ${rectwidthOpacity})`)

}

function offline() {
    text(ctx, "webnya offline lu gak bisa buka webnya dalam offline coook", 0, 0, "black", "normal", 40, true)
}

let fps = 50
let frame = 1000 / fps

addEventListener("keypress", event => {
    if (transitionIsComplete) {
        if (!foundMiniGame) {
            if (event.key === "/") {
                foundMiniGame = true
            }
        } else
        if (event.key === "/") {
            foundMiniGame = false
        }
    }
})


function run() {
    setInterval(() => {
        style()
    }, frame)
}

run()



























//!THIS IS DANGER ZONE PLS GET OUT!! THIS IS DANGER ZONE PLS GET OUT!! THIS IS DANGER ZONE PLS GET OUT!! THIS IS DANGER ZONE PLS GET OUT!! THIS IS DANGER ZONE PLS GET OUT!! THIS IS DANGER ZONE PLS GET OUT!! THIS IS DANGER ZONE PLS GET OUT!! THIS IS DANGER ZONE PLS GET OUT!! THIS IS DANGER ZONE PLS GET OUT!
function RectsColliding(r1, r2) {
    return !(r1.x > r2.x + r2.w ||
        r1.x + r1.w < r2.x ||
        r1.y > r2.y + r2.h ||
        r1.y + r1.h < r2.y);
}

let player = {
    x: 10,
    y: 270,
    vy: 0, //velocity
    w: 10,
    h: 25,
    c: "black"
}

let lantai = {
    x: 0,
    y: 300,
    w: canvas.width,
    h: 0.41
}

class Cactus {
    constructor(x, y, w, h, c) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.c = c
    }

    draw(context) {
        context.fillStyle = this.c
        context.fillRect(this.x, this.y, this.w, this.h)
    }

    uptade(context) {
        this.draw(context)
        this.x -= 5
    }
}

let cactus = []

function spawner() {
    setInterval(() => {
        if (wannaPlayGame) {
            cactus.push(new Cactus(1090, 280, 10, 20, "green"))
        }
    }, 2000)

}

let canJump = false

let score = 0;

let isDie = false;

function miniGame() {

    
    let text = "mau main game gak?"

    if (foundMiniGame && !wannaPlayGame) {
        alert("WOW YOU FOUND A SECRET")
        if (confirm(text) === true) {
            alert("okay then selamat bersenang senang")
            backToTheLobby = false
            foundMiniGame = false
            wannaPlayGame = true
        } else {
            alert("yah ok deh lagi pula gamenya cuman main dino dino gitu")
            foundMiniGame = false
            backToTheLobby = true
            wannaPlayGame = false
        }
    } else if (foundMiniGame && wannaPlayGame) {
        alert("udahan ngegamenya?")
        if (confirm(text) === true) {
            alert("oklah kalo masih mau lanjut :)")
            backToTheLobby = false
            foundMiniGame = false
            wannaPlayGame = true
        } else {
            alert("ok kita kembali ke lobby (tunggu sebentar aja yah)")
            if (rectwidth2 <= canvas.width) {
                rectwidth2 += 20
            }
            foundMiniGame = false
            backToTheLobby = true
            wannaPlayGame = false
        }
    }

    if (wannaPlayGame) {
        cactus.forEach((CactusParam, index) => {
            CactusParam.uptade(ctx)

            if (CactusParam.x < 0) {
                cactus.splice(index, 1)
                score += 1
            }

            if (RectsColliding(player, CactusParam) && !isDie) {
                alert("your score congrats " + score)
                wannaPlayGame = false
                isDie = true;
            }
        })
        ctx.fillStyle = "black"
        ctx.font = "30px kanits"
        ctx.fillText(`"${score} score mu ini game"`, 400, 50)

        ctx.fillStyle = "black"
        ctx.fillRect(lantai.x, lantai.y, lantai.w, lantai.h)

        ctx.fillStyle = player.c
        ctx.fillRect(player.x, player.y, player.w, player.h)

        if (!RectsColliding(lantai, player)) {
            canJump = false
            player.vy += 0.9;
            player.y += player.vy;
        } else {
            player.y = lantai.y - player.h;
            player.vy = 0;
            canJump = true
            return;
        }
    }
}


addEventListener("click", () => {
    if (wannaPlayGame) {
        if (canJump) {
            player.vy = -10;
            player.y -= 1;
        }
    }
})

addEventListener("keypress", (event) => {
    if (wannaPlayGame) {
        if (canJump) {
            if (event.key === " ") {
                player.vy = -10;
                player.y -= 1;
            }
        }
    }
})


function game() {
    spawner()
    setInterval(() => {
        miniGame()
    }, frame)
}
game()
