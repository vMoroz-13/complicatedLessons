'use strict';
const date = document.querySelector('.date');
var d = new Date();
var c = d.getHours();
var y = d.getMinutes();
var k = d.getSeconds();
 
var day=new Array("Воскресенье","Понедельник","Вторник",
"Среда","Четверг","Пятница","Суббота");
 
var month=new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");

let res ="'а) Сегодня " + day[d.getDay()]+", " +d.getDate()+ " " + month[d.getMonth()]
+ " " + d.getFullYear() + " года.," + c +' час ' + y + ' мин '+ k + " секунд' ";


var Year = d.getFullYear();
var Month = d.getMonth()+1;
var Day = d.getDate();

let res2 = "'б)"+ Day + "." + Month + "." + Year + '-' + c +':'+ y + ':' + k+"'";

date.style.color = 'rgb(255, 0, 0)';
date.style.fontSize = '14pt ';
date.style.fontFamily = 'Roboto, sans-serif';
date.style.fontWeight = 'bold';
date.innerHTML = res + '<Br><Br>' + res2;

//let timerId = setInterval(() => date.innerHTML =  , 2000);
var time = setInterval(function() {
  var date = new Date();
  document.getElementById("time").innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}, 1000);