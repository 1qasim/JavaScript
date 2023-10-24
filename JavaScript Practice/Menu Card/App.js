let button1;
let i = 0
let buttonText = ["All", "Breakfast", "Lunch", "Dinner"]
function buttonCreator(){
    button1 = document.createElement('button');
    let buttonName = document.createTextNode(buttonText[i]);
    button1.appendChild(buttonName);
    document.body.appendChild(button1);
    i++;
}
buttonText.forEach(buttonCreator);