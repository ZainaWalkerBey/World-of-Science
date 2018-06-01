/*Coded by: Zaina Walker-Bey*/
var fill = "black";

var chess_piece = {
    x:150, 
    y:150,
    height: 80,
    width: 80,
    selected: false,
    color: 0, // 0 white, 1 black
    description: "default",
    picture:"../IMG/wpawn.png",
    setup: function(newX, newY, newIMG, color, description) {
        this.x = newX;
        this.y = newY;
        this.picture = newIMG;
        this.color = color;
        this.description = description;
    },
    drag : function(pos_x, pos_y) {
        if (this.selected == true) {
            this.x = pos_x;
            this.y = pos_y;
        }
    },
    clicked: function(x_clicked, y_clicked) {
        if (x_clicked > this.x - this.width/2 &&
            x_clicked < this.x + this.width/2 &&
            y_clicked > this.y - this.width/2 &&
            y_clicked < this.y + this.height/2) {


            this.selected = !this.selected;
        }
        else {
            this.selected = false;
        }
    },
    draw: function() {
        var img = new Image();
        img.src = this.picture;
        var ctx = document.getElementById('mainCanvas').getContext("2d");
        var temp_x = this.x;
        var temp_y = this.y;
        ctx.drawImage(img, temp_x - img.width/2, temp_y - img.height/2);

        //all pieces
    } 
} 


var chess_pieces = [Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece), Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece),Object.create(chess_piece)];

//all pawns






/***************************************
 * drawtext
 * prints text on canvas at location x, y

 ***************************************/
function drawText(text, x, y) {
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");	
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(text, x, y);	


}
/***************************************
 * setUpPage
 * sets the canvas to full width and height

 ***************************************/
function setUpPage() {
    var canvas = document.getElementById("mainCanvas");
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight /2 + 40; 
}
/***************************************
 * drawLine: draws a line on the canvas
 * from (x1,y1) to (x2,y2)

 ***************************************/
function drawLine(x1, y1, x2, y2) {
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();	
}
/***************************************
 * drawLine: draws an image on the canvas
 * at x, y from the path imagePath
 ***************************************/
function drawImage(imagePath, x, y){
    var img = new Image();
    img.src = imagePath;
    //	img.onload = function() {
    var ctx = document.getElementById('mainCanvas').getContext("2d");
    ctx.drawImage(img, x - img.width/2, y - img.height/2);
    //	}
}
/***************************************
 * keyDown: called when a key is pressed
 ***************************************/
function keyDown() {
    //alert("Key was pressed: " + window.event.key);
}
/***************************************
 * mouseMove: called when a mouse is moved

 ***************************************/
function mouseMove() {
    var canvas = document.getElementById("mainCanvas");
    var xPos = window.event.clientX - canvas.offsetLeft + window.pageXOffset;
    var yPos = window.event.clientY - canvas.offsetTop + window.pageYOffset;
    var i; //counter

    for (i=0; i < chess_pieces.length; i = i + 1) {

        if (chess_pieces[i].selected == 1) {
            chess_pieces[i].drag(xPos, yPos);
            if (chess_pieces[i].selected == 1) {
                break;
            }
        }
    }  
    drawBoard();
}
/***************************************
 * mouseMove: called when a mouse is clicked
 ***************************************/
function mouseDown() {
    var canvas = document.getElementById("mainCanvas");

    var xPos = window.event.clientX - canvas.offsetLeft + window.pageXOffset;
    var yPos = window.event.clientY - canvas.offsetTop + window.pageYOffset;

    console.log(window.innerWidth);

    var i; //counter
    for (i=0; i < chess_pieces.length; i = i + 1) {
        chess_pieces[i].clicked(xPos, yPos);
    }
}
/***************************************
 * resizeWindow: called when the window is resized
 *
 ***************************************/
function resizeWindow() {
    setUpPage();
}
/***************************************
 * listen: sets a bunch of event listeners
 ***************************************/
function listen() {
    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("mousemove", mouseMove, false);
    document.addEventListener("mousedown", mouseDown, false);
    window.addEventListener("resize", resizeWindow, false);	
}
/***************************************
 * update: called at a set interval

 ***************************************/
function update() {
    drawBoard();

}
/***************************************
 * clearCanvas: erases everthing on the canvas

 ***************************************/
function clearCanvas() {
    var ctx = document.getElementById('mainCanvas').getContext("2d");

    var canvas = document.getElementById("mainCanvas");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawRectangle(x1, y1, x2, y2) {
    var ctx = document.getElementById('mainCanvas').getContext("2d");
    var i;

    ctx.fillStyle = fill;
    ctx.rect (x1,y1,x2,y2);
    ctx.fillRect(x1,y1,x2,y2);
    ctx.strokeRect(x1,y1,x2,y2);

}



function drawCircle(x, y, radius) {
    var ctx=document.getElementById("mainCanvas").getContext("2d");
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.stroke();
}

function setupBoard() {
    chess_pieces[0].setup(40,520, "../IMG/wpawn.png",0, "Move the pawn two spaces or one space forward");
    chess_pieces[1].setup(118,520,"../IMG/wpawn.png",0,"Move the pawn two spaces or one space forward");
    chess_pieces[2].setup(200,520, "../IMG/wpawn.png",0,"Move the pawn two spaces or one space forward");
    chess_pieces[3].setup(280,520,"../IMG/wpawn.png",0,"Move the pawn two spaces or one space forward");
    chess_pieces[4].setup(359,520, "../IMG/wpawn.png",0,"Move the pawn two spaces or one space forward");
    chess_pieces[5].setup(440,520, "../IMG/wpawn.png",0,"Move the pawn two spaces or one space forward");
    chess_pieces[6].setup(520,520, "../IMG/wpawn.png",0,"Move the pawn two spaces or one space forward");
    chess_pieces[7].setup(600,520, "../IMG/wpawn.png",0,"Move the pawn two spaces or one space forward");
    chess_pieces[8].setup(200,595, "../IMG/wbishop.png",0,"Move the bishop diagonally for x spaces on the board");
    chess_pieces[9].setup(440,595, "../IMG/wbishop.png",0,"Move the bishop diagonally for x spaces on the board");
    chess_pieces[10].setup(118,595, "../IMG/wknight.png",0,"Move the knight in an L shape in any drection");
    chess_pieces[11].setup(520,595, "../IMG/wknight.png",0,"Move the knight in an L shape in an direction");
    chess_pieces[12].setup(40,590, "../IMG/wrook.png",0,"Move the rook in a straight line or diagonally for x spaces");
    chess_pieces[13].setup(600,595, "../IMG/wrook.png",0,"Move the rook in a straight line or diagonally for x spaces ");
    chess_pieces[14].setup(359,599, "../IMG/wking.png",0,"Move the king one space forward, backwards, or side to side");
    chess_pieces[15].setup(280,599, "../IMG/wqueen.png",0,"Move queen straight lines or diagonally for x spaces");    

    chess_pieces[16].setup(40,115, "../IMG/bpawn.png",1, "Move the pawn two spaces or one space forward");
    chess_pieces[17].setup(120,115, "../IMG/bpawn.png",1, "Move the pawn two spaces or one space forward");
    chess_pieces[18].setup(200,115, "../IMG/bpawn.png",1, "Move the pawn two spaces or one space forward");
    chess_pieces[19].setup(280,115, "../IMG/bpawn.png",1, "Move the pawn two spaces or one space forward",);
    chess_pieces[20].setup(360,115, "../IMG/bpawn.png",1, "Move the pawn two spaces or one space forward");
    chess_pieces[21].setup(440,115, "../IMG/bpawn.png",1, "Move the pawn two spaces or one space forward");
    chess_pieces[22].setup(520,115, "../IMG/bpawn.png",1, "Move the pawn two spaces or one space forward");
    chess_pieces[23].setup(600,115, "../IMG/bpawn.png",1, "Move the pawn two spaces or one space forward");
    chess_pieces[24].setup(200,48, "../IMG/blbishop.png",1, "Move the bishop diagonally for x spaces on the board");  
    chess_pieces[25].setup(440,48, "../IMG/blbishop.png",1, "Move the bishop diagonally for x spaces on the board");
    chess_pieces[26].setup(120,35, "../IMG/bknight.png",1, "Move the knight in an L shape in an direction"); 
    chess_pieces[27].setup(520,35, "../IMG/bknight.png",1, "Move the knight in an L shape in an direction");
    chess_pieces[28].setup(40,31, "../IMG/brook.png",1, "Move the rook forward, backwards,or side to side for x spaces"); 
    chess_pieces[29].setup(600,31, "../IMG/brook.png",1, "Move the rook forward, backwards,or side to side for x spaces");
    chess_pieces[30].setup(360,40, "../IMG/bking.png",1, "Move the king one space forward, backwards, or side to side"); 
    chess_pieces[31].setup(280,35, "../IMG/bqueen.png",1, "Move queen straight lines or diagonally for x spaces"); 
}

function changeFill(f) {
    fill = f;
}

function drawBoard() {
    var i; //counter
    clearCanvas();

    var size = 80;
    for (i = 0; i < 8; i ++) {
        for (j = 0; j < 8; j++) {

            if ((i + j)%2 == 0 ) {
                changeFill("white");
            }
            else {
                changeFill("grey");
            }
            drawRectangle(i*size,j*size,size,size);

        }
    }





    for (i=0; i < chess_pieces.length; i = i + 1) {
        chess_pieces[i].draw();
    }

    for (i=0; i < chess_pieces.length; i = i + 1) {
        if (chess_pieces[i].selected == 1) {
            drawText(chess_pieces[i].description, 700, 600); 
            break;
        }
    }



}




/***************************************
 * main: called when canvas loads
 ***************************************/
function main() {
    listen();
    setUpPage();
    setInterval(update, 10);

    setupBoard();
    drawBoard();




}
