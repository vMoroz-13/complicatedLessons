let num = 266219 ;

var arr = num.toString().split('') ;


   let res = arr.reduce((sum, key) => sum  * key); 
    console.log(res);

let sqr = res ** 3;

    console.log(sqr);

    //document.write(sqr.toString().split('').slice(0, 2).join());
let twoArrey = sqr.toString().split('').slice(0, 2);

let str = String(twoArrey);// строка
document.write(str);

twoArrey.sort((a, b)=>{
    console.log (typeof(a, b));  //строка
});

twoArrey.forEach((item)=>{
    document.write(Number(item)); //number
})
