var hrs=document.getElementById('hrs');
var min=document.getElementById('min');
var sec=document.getElementById('sec');


function start(){
    if(sec.textContent<9){
        sec.textContent='0'+(++sec.textContent)
    }else if(sec.textContent<60){
        sec.textContent++
    }
    
    if(sec.textContent==59){
        sec.textContent=00
        if(min.textContent<9){
            min.textContent='0'+(++min.textContent)
        }
        else{
            (min.textContent++)
        }
    }
    else if(min.textContent==59){
        min.textContent=00
        if(hrs.textContent<9){
            hrs.textContent='0'+(++hrs.textContent)
        }
        else{
            (hrs.textContent++)
    }   }

}
function reset() {
    min.textContent="00"
    sec.textContent="00"
    hrs.textContent="00"
    clearInterval(myVar)
   
}
function stop(){
    clearInterval(myVar)

}
