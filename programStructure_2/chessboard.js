let blank = " ";
let chess = "#";
let size = 8;
for(let i = 0; i < 8; i++){
    let row = " ";
    for(let j = 0; j < 8; j++){
        if((i + j) % 2 == 0){
            row += blank;
        }else{
            row += chess;
        }
    }
    console.log(row);
}
