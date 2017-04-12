/*Author Name= Rajvinder Singh Yogi
Student Number=200353207
Website= Mini-portfolio(assignment3)
File Name= portfolio.js
This file includes all the styling properties which makes this website more functional.

-----------------------------------------------------------------------------------------------------------*/

// JAVA Script Here
"use strict";
//IIFE 
(function(){


switch(document.title){
case"Biography::Raj Yogi":

let data={};

let XHR =new XMLHttpRequest();

XHR.open("GET","Scripts/paragraphs.json", true);

XHR.send();

XHR.onreadystatechange=function(){
    if((this.readyState === 4)&&(this.status===200)){
        data = JSON.parse(XHR.responseText);

        let heading = document.getElementById("heading");
        heading.innerHTML=data.information.MyName;
        let title = document.getElementById("title");
        title.innerHTML=data.information.WebDev;
        let paragraph = document.getElementById("paragraph");        
        paragraph.innerHTML=data.information.BioPara;
    }
};
break;


case "Portfolio::Raj Yogi":
let project={};
let portfolioXHR =new XMLHttpRequest();
portfolioXHR.open("GET","Scripts/paragraphs.json", true);
portfolioXHR.send();
portfolioXHR.onreadystatechange=function(){
    if((this.readyState === 4)&&(this.status===200)){
        project = JSON.parse(portfolioXHR.responseText);
        //project1 portfolio content starts
        let headingProject1 = document.getElementById("headingProject1");
        headingProject1.innerHTML=project.information.FirstHeading;
        let subheadingProject1 = document.getElementById("subheadingProject1");
        subheadingProject1.innerHTML=project.information.FirstSubHeading;
        let project1info = document.getElementById("project1info");
        project1info.innerHTML=project.information.Project1Para;
        //project1 portfolio content ends
        // -----------------------------------------------------------------------------------------------------------

        //project2 portfolio content starts
        let headingProject2 = document.getElementById("headingProject2");
        headingProject2.innerHTML=project.information.SecondHeading;
        let subheadingProject2 = document.getElementById("subheadingProject2");
        subheadingProject2.innerHTML=project.information.SecondSubHeading;
        let project2info = document.getElementById("project2info");
         project2info.innerHTML=project.information.Project2Para;
         //project2 portfolio content ends

        // ----------------------------------------------------------------------------------------------------------------

        //project3 portfolio content starts
        let headingProject3 = document.getElementById("headingProject3");
        headingProject3.innerHTML=project.information.ThirdHeading;
        let subheadingProject3 = document.getElementById("subheadingProject3");
        subheadingProject3.innerHTML=project.information.ThirdSubHeading;
        let project3info = document.getElementById("project3info");
        project3info.innerHTML=project.information.Project3Para;
        //project3 portfolio content ends
    }
};


break;

case"Contact Me::Raj Yogi":


let contact={};

let ContactXHR =new XMLHttpRequest();

ContactXHR.open("GET","Scripts/paragraphs.json", true);

ContactXHR.send();

ContactXHR.onreadystatechange=function(){
    if((this.readyState === 4)&&(this.status===200)){
        contact = JSON.parse(ContactXHR.responseText);

        let ContactMe = document.getElementById("ContactMe");
        ContactMe.innerHTML=contact.information.ContactHeading;
    }
};


submit.addEventListener("click",function display(event){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let mobile = document.getElementById("mobile").value;
let message = document.getElementById("message").value;

event.preventDefault();

console.log(name);
console.log(email);
console.log(mobile);
console.log(message);

});

break;

}
})();


