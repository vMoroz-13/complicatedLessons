let num = 266219 ;

var arr = num.toString().split('') ;


   let res = arr.reduce((sum, key) => sum  * key); 
    console.log(res);

let sqr = res ** 3;

    console.log(sqr);

  let str =sqr + '';

document.write(str.slice(0, 2));