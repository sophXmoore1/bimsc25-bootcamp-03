// console.log('hello')

// const myConstVar = 5


// let foo = 93
// console.log(foo)

// foo = "my string"

// let foodArray = ['pizza', "pasta", "salad"]
// console.log(foodArray)

// let foodItem = foodArray[1]
// console.log("foodItem:", foodItem)

// let objectVariable = {
//     key: 'value',
//     foods: foodArray
// }
// console.log(objectVariable)

// let foods = objectVariable['foods']
// console.log('foods:', foods)

// function AddTwoNumbers(num1, num2){ 
//     let sum = num1 + num2
//     return sum 
// }

// let mySum = AddTwoNumbers(10, -8)
// console.log('mySum:', mySum)

let breakfastElement = document.getElementById("breakfast")
console.log(breakfastElement)

function breakfastClicked(){
    console.log('breakfast element was clicked')
    let breakfastFoodsDiv = document.getElementById('breakfastFoods')
    breakfastFoodsDiv.style.display = 'flex'
    let lunchFoodsDiv = document.getElementById('lunchFoods')
    lunchFoodsDiv.style.display = 'none'
}

function lunchClicked() {
    let breakfastFoodsDiv = document.getElementById('breakfastFoods')
    breakfastFoodsDiv.style.display = 'none'
    let lunchFoodsDiv = document.getElementById('lunchFoods')
    lunchFoodsDiv.style.display = 'flex'
}

// Old syntax: breakfastElement.addEventListener("click", function breakfastClicked(){})
breakfastElement.addEventListener("click", () => breakfastClicked())

let lunchElement = document.getElementById('lunch')
lunchElement.addEventListener("click", () => lunchClicked())
