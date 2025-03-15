
const div = document.querySelector(".div1")

div.addEventListener("click", () => {
    div.style.width = "150px"
    div.style.height = "200px"
    div.style.borderRadius = "10px"
    div.style.border = "5px dashed green"
})

const div1 = document.querySelector(".div2")

div1.addEventListener("click", () => {
    div1.style.width = "500px"
    div1.style.height = "400px"
    div1.style.borderRadius = "100%"
    div1.style.border = "5px solid pink"
})



const number9btn = document.querySelector(".number-btn")

console.log(number9btn)

let num2 = 10

number9btn.addEventListener("click", () => {
   
    num2 = num2 + 5

    number9btn.textContent = num2
})


let num = 5

console.log(num)

num = num + 1

console.log(num)

num = num + 2

console.log(num)