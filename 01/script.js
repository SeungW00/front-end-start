console.log('hello');

//for(var i=1;i<=100;i++){


//  document.getElementsById('debug').innerHTML +=i +"<br>";

//  if(i%2===0){
//    console.log(i);
//  }
//}

var num,total=0;
for(var isEnd=false; isEnd===false; ){
  num = prompt("숫자를 입력하시오");
  if(num ===null){
    alert("합은 " + total + "입니다.");
    isEnd = true;
    //break;
  }else{
    total += parseInt(num,10);
  }
}
console.log(num)
