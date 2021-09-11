const yaricap = process.argv.slice(2);

function calcArea(yaricap){
    const alan = Math.PI * yaricap * 2;
    console.log('Yarıçapı ' + yaricap + ' olan dairenin alanı: ' + alan);
}

calcArea(yaricap[0]);
