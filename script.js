let matrix = [];
let side = 25;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let hunterArr = [];
let RubbitArr = [];
function setup() {
    matrixGenerator(60, 150, 50, 10, 10, 1, 1);
    frameRate(20);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            if (matrix[y][x] == 3) {
                let predator = new Predator(x, y);
                predatorArr.push(predator);
            }
            if (matrix[y][x] == 4) {
                let hunter = new Hunter(x, y);
                hunterArr.push(hunter);
            }
            if (matrix[y][x] == 6) {
                let rubbit = new Rubbit(x, y);
                RubbitArr.push(rubbit);
            }
        }
    }
    function matrixGenerator(matrixSize, grass, grassEater, Predator, Hunter, Rubbit) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)

            if (matrix[y][x] == 0) {
                matrix[y][x] = 1
            }
        }
        for (let i = 0; i < grassEater; i++) {

            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)

            if (matrix[y][x] == 0) {
                matrix[y][x] = 2
            }
        }
        for (let i = 0; i < Predator; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)

            if (matrix[y][x] == 0) {
                matrix[y][x] = 3
            }
        }
        for (let i = 0; i < Hunter; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)

            if (matrix[y][x] == 0) {
                matrix[y][x] = 4
            }
        }
        for (let i = 0; i < Rubbit; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)

            if (matrix[y][x] == 0) {
                matrix[y][x] = 6
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            R = random(0, 255);
            G = random(0, 255);
            B = random(0, 255);

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("#815B32");
            }
            else if (matrix[y][x] == 6) {
                fill("white");
            }
            else if (matrix[y][x] == 7) {
                fill(R, G, B);
            }

            rect(x * side, y * side, side, side);

            for (var i in grassArr) {
            }
        }
    }
    //յուրաքանչյուր խոտ փորձում է բազմանալ
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eatpredator();
    }
    for (var i in hunterArr) {
        hunterArr[i].eathunter();
    }
    for (let i in RubbitArr) {
        RubbitArr[i].mulrub();
    }
}
