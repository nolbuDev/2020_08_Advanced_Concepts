var favouriteFood = "grapes";

//1. var foodThoughts = function(){  // Same Result
//2. function foodThoughts(){
const foodThoughts = function (){
    console.log("Original favourite food: " + favouriteFood);

    var favouriteFood = "sushi";

    console.log("New Favourite food: " + favouriteFood);
}

foodThoughts();
