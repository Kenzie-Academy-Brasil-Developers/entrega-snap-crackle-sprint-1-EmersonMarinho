function snapCrackle (maxValue){
    let write = ""
    for (let i = 1; i <= maxValue; i++){
        if (i % 2 !==0 && i % 5 ===0){        
            write += " SnapCrakle,"
        } else if (i % 2 !==0){
            write += " Snap,"
        } else if (i % 5 ===0){
            write += " Crackle,"
        } else {
            write += ` ${i},`
        }
    }
    return write
}
console.log (snapCrackle(15))

function snapCracklePrime (maxValue){
    let write = ""
    for(let i = 2; i<= maxValue; i++){
        if (i % i === 0){
            return false; 
        }
    }
}