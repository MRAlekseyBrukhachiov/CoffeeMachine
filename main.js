const input = require('sync-input')

let typesCoffee = [
    espresso = {
        water: 250,
        beans: 16,
        price: 4
    },
    latte = {
        water: 350,
        milk: 75,
        beans: 20,
        price: 7
    },
    cappuccino = {
        water: 200,
        milk: 100,
        beans: 12,
        price: 6
    }
];
let coffeeMachine = {
    water: 400,
    milk: 540,
    beans: 120,
    disCups: 9,
    money: 550
}

function show() {
    console.log(`The coffee machine has:
${coffeeMachine.water} ml of water
${coffeeMachine.milk} ml of milk
${coffeeMachine.beans} g of coffee beans
${coffeeMachine.disCups} disposable cups
$${coffeeMachine.money} of money`);
}

function buy() {
    let coffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
    if (coffee === "1" || coffee === "2" || coffee === "3") {
        if (coffeeMachine.water < typesCoffee[Number(coffee) - 1].water) {
            console.log("Sorry, not enough water!");
        } else if (coffee !== "1" && coffeeMachine.milk < typesCoffee[Number(coffee) - 1].milk) {
            console.log("Sorry, not enough milk!");
        } else if (coffeeMachine.beans < typesCoffee[Number(coffee) - 1].beans) {
            console.log("Sorry, not enough beans!");
        } else if (coffeeMachine.disCups === 0) {
            console.log("Sorry, not enough cups!");
        } else {
            coffeeMachine.water -= typesCoffee[Number(coffee) - 1].water;
            if (coffee !== "1") {
                coffeeMachine.milk -= typesCoffee[Number(coffee) - 1].milk;
            }
            coffeeMachine.beans -= typesCoffee[Number(coffee) - 1].beans;
            coffeeMachine.money += typesCoffee[Number(coffee) - 1].price;
            coffeeMachine.disCups--;
            console.log("I have enough resources, making you a coffee!");
        }
    }
}

function fill() {
    let water = Number(input("Write how many ml of water you want to add:\n"));
    let milk = Number(input("Write how many ml of milk you want to add:\n"));
    let beans = Number(input("Write how many grams of coffee beans you want to add:\n"));
    let cups = Number(input("Write how many disposable coffee cups you want to add:\n"));
    coffeeMachine.water += water;
    coffeeMachine.milk += milk;
    coffeeMachine.beans += beans;
    coffeeMachine.disCups += cups;
}

function take() {
    console.log(`I gave you $${coffeeMachine.money}`);
    coffeeMachine.money = 0;
}

let run = true;
do {
    let action = input("Write action (buy, fill, take, remaining, exit):\n");
    console.log();
    switch (action) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            show();
            break;
        case "exit":
            console.log("Have a nice day!");
            run = false;
            break;
        default:
            console.log("Unknown action");
            break;
    }
    console.log();
} while (run);
