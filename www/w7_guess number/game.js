var num=Math.floor(Math.random()*10)+1;
console.log("num = "+num)
var stringnum = prompt('guess a number')
var guess = Number(stringnum)

var maxtry = 5
var tries
while(tries<=maxtry)
else if(guess>stringnum){alert('too high,guess again')}
else if(guess<stringnum){alert('too low,guess again')}