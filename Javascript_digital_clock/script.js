const gettime=()=>{

 let d = new Date();
  let h=d.getHours();
  let AMPM = h>=12 ? "PM":"AM";
  h= h%12;
  h= h==0? 12:h;
  let m=d.getMinutes();
  let s=d.getSeconds();
   

  return `${h} : ${m} : ${s} : ${AMPM}` ;


//return d.toLocaleDateString;

    
}


setInterval(()=>{
let time=document.querySelector('.clock');
time.innerHTML=gettime();

},1000);


