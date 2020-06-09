//Решение через if
let arr;
let lang = 'ru';
if (lang === 'ru') {
   arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang === 'en') {
	arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(arr);

//Решение через switch-case
let lang1 = 'en';
switch (lang1) {
	case 'ru':
		 arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	break;
	case 'en':
		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
	break;
}
console.log(arr);

// Решение через многомерный массив: 
let lang3 = 'ru';
 arr = [
	['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
 ];
console.log(arr[0]);

let namePerson = prompt('Введите ваше имя');
if(namePerson === 'Артем'){
    console.log('Директор'); 
}else if(namePerson === 'Максим'){
    console.log('Преподователь'); 
}else{
    console.log('Студент'); 

}