class Rubbit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    mulrub  () {
        if (this.y == 0) {
            this.y = 58;
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix.length; x++) {
                    matrix[y][x] = 7;
                }
                grassArr = [];
                grassEaterArr = [];
                predatorArr = [];
                hunterArr = [];
               
            }
        }
        if (this.y == 59) {
            this.y = 1;
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix.length; x++) {
                    matrix[y][x] = 7;
                }
                grassArr = [];
                grassEaterArr = [];
                predatorArr = [];
                hunterArr = [];
                
            }
        }
        if (this.x == 0) {
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix.length; x++) {
                    matrix[y][x] = 7;
                }
                grassArr = [];
                grassEaterArr = [];
                predatorArr = [];
                hunterArr = [];
                
            }
            this.x = 58;
        }
        if (this.x == 59) {
            this.x = 1;
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix.length; x++) {
                    matrix[y][x] = 7;
                }
                grassArr = [];
                grassEaterArr = [];
                predatorArr = [];
                hunterArr = [];
                
            }
        }
        if (keyCode === UP_ARROW) {
            let x = this.x;
            let y = this.y - 1;
            if (matrix.length - 1 == this.y) {
                this.y = 59;
            }
            else {
                matrix[y][x] = 6;
                matrix[this.y][this.x] = 6;
            }
            this.y = y;
            this.x = x;
        }
        else if (keyCode === DOWN_ARROW) {
            let x = this.x;
            let y = this.y + 1;
            if (matrix.length - 1 == this.y) {
                this.y = 0;
            }
            else {
                matrix[y][x] = 6;
                matrix[this.y][this.x] = 6;
            }
            this.y = y;
            this.x = x;
        }
        else if (keyCode === LEFT_ARROW) {
            let x = this.x - 1;
            let y = this.y;
            if (matrix[x].length - 1 == this.x) {
                this.x = 59;
            }
            else {
                matrix[y][x] = 6;
                matrix[this.y][this.x] = 6;
            }
            this.y = y;
            this.x = x;
        }
        else if (keyCode === RIGHT_ARROW) {
            let x = this.x + 1;
            let y = this.y;
            matrix[y][x] = 6;
            matrix[this.y][this.x] = 6;
            this.y = y;
            this.x = x;
        }
        return false;
    }
}