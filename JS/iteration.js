const genrateHexCode = function(){
    const letters = '0123456789ABCDEF'
    color = '#';
    for(i = 0 ; i < 6 ; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}
console.log(genrateHexCode());