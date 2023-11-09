let button1;
let i = 0
let buttonText = ["All", "Breakfast", "Lunch", "Dinner"]
let menuItems = [
    {
        imgSrc:"./Assets/halwapuri.jpg",
        price: " $ <u>150</u><br>",
        description: "<b>Halwa Puri<b><br>Lorem ipsum dolor si",
        catogory:"breakfast"
    },
    {
        imgSrc:"./Assets/kachori.jpg",
        price: " $ <u>$ 200</u><br>",
        description: "<b>Kachori<b><br>Lorem ipsum dolor si",
        catogory:"breakfast"
    },
    {
        imgSrc:"./Assets/biryani.jpg",
        price: " $ <u>$ 150</u><br>",
        description: "<b>Biryani<b><br>Lorem ipsum dolor si",
        catogory:"lunch"
    },
    {
        imgSrc:"./Assets/Daal.jpg",
        price: " $ <u>$ 120</u><br>",
        description: "<b>Daal Fry<b><br>Lorem ipsum dolor si",
        catogory:"lunch"
    },
    {
        imgSrc:"./Assets/Quorma.jpg",
        price: " $ <u>$ 300</u><br>",
        description: "<b>Quorma<b><br>Lorem ipsum dolor si",
        catogory:"dinner"
    },
    {
        imgSrc:"./Assets/karahi.jpg",
        price: " $ <u>$ 1000</u><br>",
        description: "<b>Karahi<b><br>Lorem ipsum dolor si",
        catogory:"Karahi"
    },
]
function buttonCreator(){
    button1 = document.createElement('button');
    let buttonName = document.createTextNode(buttonText[i]);
    button1.classList.add("buttonstyling");
    button1.setAttribute("id", buttonText[i]);
    button1.appendChild(buttonName);
    siblingOfLastDiv = document.getElementById("buttons").appendChild(button1)
    i++

    
}
buttonText.forEach(buttonCreator)

let allButton = document.querySelector("#All");
let breakfastButton = document.querySelector("#Breakfast");
let lunchButton = document.querySelector("#Lunch");
let dinnerButton = document.querySelector("#Dinner");
let mainContainerHtml = document.querySelector("#menuContainer")


function mainContainer(){
    let allbuttonHtml = `

    <div class="breakfast" style="display: flex;">
    <div class="halwapuri" style="display: flex; padding: 10px 10px; width: 50%;">
        <div class="image">
            <img src=${menuItems[0].imgSrc} alt="">
        </div>
        <div class="PD" style="padding: 0px 10px;"> <u>${menuItems[0].price}</u> ${menuItems[0].description}</div>
    </div> 
    <div class="kachori" style="display: flex; padding: 10px 10px; width: 50%;">
        <div class="image">
            <img src=${menuItems[1].imgSrc} alt="">
        </div>
        <div class="PD" style="padding: 0px 10px;"> <u>${menuItems[1].price}</u> ${menuItems[1].description}</div>
    </div> 
 </div>
    </div>
        <div class="lunch" style="display: flex;">
            <div class="biryani" style="display: flex; padding: 10px 10px; width: 50%;">
                <div class="image">
                    <img src=${menuItems[2].imgSrc} alt="">
                </div>
                <div class="PD" style="padding: 0px 10px;"> <u>${menuItems[2].price}</u> ${menuItems[2].description}</div>
            </div> 
            <div class="Daal" style="display: flex; padding: 10px 10px; width: 50%;">
                <div class="image">
                    <img src=${menuItems[3].imgSrc} alt="">
                </div>
                <div class="PD" style="padding: 0px 10px;"> <u>${menuItems[3].price}</u> ${menuItems[3].description}</div>
            </div> 
        </div>
        <div class="Dinner" style="display: flex;">
            <div class="quorma" style="display: flex; padding: 10px 10px; width: 50%;">
                <div class="image">
                    <img src=${menuItems[4].imgSrc} alt="">
                </div>
                <div class="PD" style="padding: 0px 10px;"> <u>${menuItems[4].price}</u> ${menuItems[4].description}</div>
            </div> 
            <div class="karahi" style="display: flex; padding: 10px 10px; width: 50%;">
                <div class="image">
                    <img src=${menuItems[5].imgSrc} alt="">
                </div>
                <div class="PD" style="padding: 0px 10px;"> <u>${menuItems[5].price}</u> ${menuItems[5].description}</div>
            </div> 
        </div> 
</div>
    `
    mainContainerHtml.innerHTML += allbuttonHtml;
                     
}
mainContainer()
let breakfastVisibiltyControl = document.querySelector(".breakfast")
let lunchVisibiltyControl = document.querySelector(".lunch")
let dinnerVisibiltyControl = document.querySelector(".Dinner")



    breakfastButton.addEventListener("click",() => {
        breakfastVisibiltyControl.style.display = "block";
        lunchVisibiltyControl.style.display = "none";
        dinnerVisibiltyControl.style.display = "none";
    });

    lunchButton.addEventListener("click",() => {
        
        lunchVisibiltyControl.style.display = "block";
        dinnerVisibiltyControl.style.display = "none";
        breakfastVisibiltyControl.style.display = "none";
    });
    dinnerButton.addEventListener("click",() => {
        console.log("working")
        lunchVisibiltyControl.style.display = "none";
        dinnerVisibiltyControl.style.display = "block";
        breakfastVisibiltyControl.style.display = "none";
    });
    allButton.addEventListener("click",() => {
        
        lunchVisibiltyControl.style.display = "block";
        dinnerVisibiltyControl.style.display = "block";
        breakfastVisibiltyControl.style.display = "block";
    });
