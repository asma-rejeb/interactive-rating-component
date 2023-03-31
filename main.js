var mainBox= document.querySelector(".box")
var thanksBox= document.querySelector(".thanks")
var list = document.querySelector(".ul")
var rating= document.getElementById("rating")
const submitBtn= document.querySelector(".submit")
const submitAgain= document.querySelector(".again")
var rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click" , () => {
    thanksBox.classList.remove("hidden")
    mainBox.classList.add("hidden")
})
submitAgain.addEventListener("click" , () => {
    thanksBox.classList.add("hidden")
    mainBox.classList.remove("hidden")
})

rates.forEach((rate) => {

  rate.addEventListener("click" , () =>{
      rating.innerHTML = rate.innerHTML
  })
})