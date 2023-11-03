let toDay = new Date();

let 시간 = toDay.getHours();

if(시간<=10){
    console.log('국모닝');
}
else if (시간>10|| 시간>=18){
    console.log("국에푸터눈");
}
else if (시간>18){
    console.log("잘자욘~");
}