let screen = document.getElementsByClassName("screen")[0]; //access the first element with the class screen

let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.value){ //get event where the event occured and get the value of the clicked element
            case "AC" :
                screen.value = " ";
                break;
            case "DE" :
                if(screen.value){
                    screen.value = screen.value.slice(0,-1);
                }
                break;
            case "=" :
                screen.value = eval(screen.value);                
                break;
            default : 
                screen.value += e.target.value;
        }
    });
});