'use strict';
let arr = ['452', '13', '205', '104', '47', '748', '1377']; // в виде строк

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item );
  }
});

mark:
for (let i = 2; i <= 100; i++) { 

	for (let j = 2; j < i; j++) { 
	  if (i % j === 0) continue mark; // не подходит, берём следующее
	}
  
	console.log( i + ' -Делители этого числа: 1 и ' + i); 
  }


