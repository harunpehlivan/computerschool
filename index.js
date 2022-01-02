console.log("computer school! Send your computer to school. The speed of your computer will we printed out as how many miliseconds it took for your computer to run 10000 loops or if loops, in javascript")
function school(){
  const d = new Date();
  var a = 0;
  let time = d.getTime();
  for(i = 0; i<10000; i++){
    if(i === 10001){
      alert("hi")
      var a = a+1
    }
  }
  const p = new Date();
  let time2 = p.getTime();
  console.log(time2-time)
}
school()