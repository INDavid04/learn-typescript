const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

const cashInRegister = 100
const orderQueue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 * 
 * Solution
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = { pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}
 */

function placeOrder(pizzaName) {
    let newOrder
    for (let i = 0; i < menu.length; i++) {
        if (menu.name === pizzaName) {
            cashInRegister += menu.price
            newOrder = { pizza: pizzaName, status: "ordered" }
            orderQueue.push(newOrder)
        }
    }
    return newOrder
}