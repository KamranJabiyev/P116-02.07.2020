//Start Form Event
let input=document.getElementById("input");

input.addEventListener("focus",function(){
    console.log("inputa focus olundu")
})

input.addEventListener("blur",function(){
    console.log("inputdan blur olundu")
})

input.addEventListener("change",function(){
    console.log("content deyishdi")
})

document.getElementById("slct").onchange=function(){
    console.log("metn deyishdirildi")
}

input.addEventListener("keyup",()=>{
    if(input.value==""){
        input.nextElementSibling.classList.remove("d-none") 
    }else{
        input.nextElementSibling.classList.add("d-none")  
    }
})

document.getElementById("login").addEventListener("submit",function(e){
    e.preventDefault();
    if(input.value==""){
       input.nextElementSibling.classList.remove("d-none") 
    }
})

//End Form Event

//Slider Start
// let rightBtn=document.querySelector(".right");
// let leftBtn=document.querySelector(".left");

// rightBtn.addEventListener("click",function(){
//     let active=document.querySelector(".active");
//     active.classList.remove("active");
//     if(active.nextElementSibling!=null){
//         active.nextElementSibling.classList.add("active");
//     }else{
//         active.parentNode.firstElementChild.classList.add("active");
//     }
// })

// leftBtn.addEventListener("click",function(){
//     let active=document.querySelector(".active");
//     active.classList.remove("active");
//     if(active.previousElementSibling!=null){
//         active.previousElementSibling.classList.add("active");
//     }else{
//         active.parentNode.lastElementChild.classList.add("active");
//     }
// })

//Slider End

//TAB MENU Start
// let menus=document.querySelectorAll(".menu div");
// let contents=document.querySelectorAll(".content div");

// for (const menu of menus) {
//     menu.addEventListener("click",function(){
//         let active=document.querySelector(".active")
//         this.classList.add("active");
//         active.classList.remove("active");
//         let index=this.getAttribute("data-index");

//         contents.forEach(content=>{
//             if(content.getAttribute("data-index")==index){
//                 content.classList.remove("d-none")
//             }else{
//                 content.classList.add("d-none")
//             }
//         })
//     })
// }

//TAB MENU Start