let screen = document.getElementById("display");
buttons = document.querySelectorAll("button");
let screenvalue = "";
for(items of buttons){
    items.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;
        if(buttonText == "X"){
            buttonText="*";
            screenvalue += buttonText;
            screen.value = screenvalue;

        } else if(buttonText == "C"){
            screenvalue = "";
            screen.value = screenvalue;
        } else if(buttonText == "="){
            var result;
            try{
                result = eval(screenvalue);

            } catch (error){
                result = "Expression error";

            }
            screen.value = result;

        } else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
    });
}