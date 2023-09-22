let string = "";
let keys = document.querySelectorAll("#cal-btn");

Array.from(keys).forEach((btn)=>{
    btn.addEventListener('click', (ev)=>{
        if(ev.target.innerHTML == 'ON'){
            string = "ON";
            document.getElementById("display-el").innerHTML = string;
        }
        else if(ev.target.innerHTML == '='){
            string = eval(string);
            document.getElementById("display-el").innerHTML = string;
        }
        else if(ev.target.innerHTML == 'C' || ev.target.innerHTML == 'CE'){
            string = "";
            document.getElementById("display-el").innerHTML = string;
        }
        else{
            // console.log(ev.target);
            string = string  + ev.target.innerHTML;
            document.getElementById("display-el").innerHTML = string;
        }
        
    })
        
})