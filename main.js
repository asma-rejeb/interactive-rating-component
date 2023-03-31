var mainBox= document.querySelector(".box")
var thanksBox= document.querySelector(".thanks")
var list = document.querySelector(".ul")
var rating= document.getElementById("rating")
const submitBtn= document.querySelector(".submit")
var rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click" , () => {
    thanksBox.classList.remove("hidden")
    mainBox.classList.add("hidden")

})

rates.forEach((rate) => {

    rate.addEventListener("click" , () =>{
        console.log(rate.innerHTML);
        rating.innerHTML = rate.innerHTML
    })
})

