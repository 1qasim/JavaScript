let personImage = document.getElementById("personimage");
let personName = document.getElementById("personname");
let personDesignation = document.getElementById("persondesignation");
let personDescription = document.getElementById("persondescription");

let reviewChanger = [
    {   imageSrc:"./Assets/person 1.jpg",
        name:"Qasim",
        desg:"Finance Executive",
        description:"Finance associates are responsible for a broad range of basic financial functions, including managing accounting duties and providing financial expertise. They offer guidance and advice on long-term financial decisions and strategic plans, using metrics and data analytics to support their positions. They are often enlisted to participate in discussions and decision-making related to budgets, investments, and other financial matters. By staying well-informed of historical trends and current economic activities, they can formulate educated predictions to guide future planning. They may also perform basic accounting and budgeting tasks."
    },
    {   imageSrc:"./Assets/person 2.jpg",
        name:"Usama",
        desg:"Mern Stack Developer",
        description:"Mern Stack Developer are responsible for a broad range of basic financial functions, including managing accounting duties and providing financial expertise. They offer guidance and advice on long-term financial decisions and strategic plans, using metrics and data analytics to support their positions. They are often enlisted to participate in discussions and decision-making related to budgets, investments, and other financial matters. By staying well-informed of historical trends and current economic activities, they can formulate educated predictions to guide future planning. They may also perform basic accounting and budgeting tasks."
    },
    {   imageSrc:"./Assets/person 3.jpg",
        name:"Abdullah",
        desg:"HR Executive",
        description:"HR associates are responsible for a broad range of basic financial functions, including managing accounting duties and providing financial expertise. They offer guidance and advice on long-term financial decisions and strategic plans, using metrics and data analytics to support their positions. They are often enlisted to participate in discussions and decision-making related to budgets, investments, and other financial matters. By staying well-informed of historical trends and current economic activities, they can formulate educated predictions to guide future planning. They may also perform basic accounting and budgeting tasks."
    },
    {   imageSrc:"./Assets/person 4.jpg",
        name:"Faiz",
        desg:"Supply Chain Executive",
        description:"Supply Chain associates are responsible for a broad range of basic financial functions, including managing accounting duties and providing financial expertise. They offer guidance and advice on long-term financial decisions and strategic plans, using metrics and data analytics to support their positions. They are often enlisted to participate in discussions and decision-making related to budgets, investments, and other financial matters. By staying well-informed of historical trends and current economic activities, they can formulate educated predictions to guide future planning. They may also perform basic accounting and budgeting tasks."
    },
    {   imageSrc:"./Assets/person 5.jpg",
        name:"Usman",
        desg:"React JS Developer",
        description:"React JS Developer are responsible for a broad range of basic financial functions, including managing accounting duties and providing financial expertise. They offer guidance and advice on long-term financial decisions and strategic plans, using metrics and data analytics to support their positions. They are often enlisted to participate in discussions and decision-making related to budgets, investments, and other financial matters. By staying well-informed of historical trends and current economic activities, they can formulate educated predictions to guide future planning. They may also perform basic accounting and budgeting tasks."
    }
];
let reviewChangerNumber = 0;

let changePersonImage;
let changePersonName;
let changePersonDesg;
let changePersonDesc;

personImage.src = reviewChanger[reviewChangerNumber].imageSrc;
personName.textContent = reviewChanger[reviewChangerNumber].name;
personDesignation.textContent = reviewChanger[reviewChangerNumber].desg;
personDescription.textContent = reviewChanger[reviewChangerNumber].description;

function forwardButton(){
    if(reviewChangerNumber < 4){   
        reviewChangerNumber++;
        changePersonImage = reviewChanger[reviewChangerNumber].imageSrc;
        changePersonName = reviewChanger[reviewChangerNumber].name;
        changePersonDesg = reviewChanger[reviewChangerNumber].desg;
        changePersonDesc = reviewChanger[reviewChangerNumber].description;
        personImage.src = changePersonImage;
        personName.textContent = changePersonName;
        personDesignation.textContent = changePersonDesg;
        personDescription.textContent = changePersonDesc;}
    
 
    
    
}
function backwardButton(){
    reviewChangerNumber--;
    changePersonImage = reviewChanger[reviewChangerNumber].imageSrc;
    changePersonName = reviewChanger[reviewChangerNumber].name;
    changePersonDesg = reviewChanger[reviewChangerNumber].desg;
    changePersonDesc = reviewChanger[reviewChangerNumber].description;
    personImage.src = changePersonImage;
    personName.textContent = changePersonName;
    personDesignation.textContent = changePersonDesg;
    personDescription.textContent = changePersonDesc;
    
}
