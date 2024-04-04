let counterElemenmt = document.getElementById("counter");
let count=0;

const updateCount=()=>{
    counterElemenmt.innerHTML=count;
}

const increaseCounter=()=>{
    count+=1;
    updateCount();
}
const descreaseCounter=()=>{
    if (count>0){
        count-=1;
        updateCount();
    }
    
}