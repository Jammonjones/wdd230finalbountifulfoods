// Create the fruit choice list for the user from the API
async function LoadFruitChoices(){
    apiResponse = await fetch("https://brotherblazzard.github.io/canvas-content/fruit.json");
    apiData = await apiResponse.json();

    apiData.forEach((fruit) =>{
        const fruitOptions = document.querySelector(".fruit_choices");
        const fruitOptionLabel = document.createElement("label");
        fruitOptionLabel.textContent = fruit.name;
        const fruitOptionInput = document.createElement("input");
        fruitOptionInput.setAttribute("type", "checkbox");
        fruitOptionInput.setAttribute("name", "fruit_choices");
        fruitOptionInput.setAttribute("value", fruit.name);
        fruitOptionLabel.prepend(fruitOptionInput);

        fruitOptions.append(fruitOptionLabel);
    })
}
LoadFruitChoices();

// Get the form data and use it when submitted
const form = document.querySelector("form");
const order_confirmation = document.querySelector(".order_confirmation");
const oName= document.querySelector(".oName");
const oEmail = document.querySelector(".oEmail");
const oPhone = document.querySelector(".oPhone");
const oFruits = document.querySelector(".oFruits");
const oSInstruct = document.querySelector(".oSInstruct");
const oNutritDetails = document.querySelector(".oNutritDetails");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    oName.textContent = formData.get("first_name");
    oEmail.textContent = formData.get("email");
    oPhone.textContent = formData.get("number");
    oFruits.textContent = formData.getAll("fruit_choices");
    oSInstruct.textContent = formData.get("special_instructions");

    async function CalcNutTotals(){
        apiResponse = await fetch("https://brotherblazzard.github.io/canvas-content/fruit.json");
        apiData = await apiResponse.json();

        let carbs = 0;
        let protein = 0;
        let fat = 0;
        let sugar = 0;
        let calories = 0;

        formData.getAll("fruit_choices").forEach((fruit) =>{
            apiData.forEach((fruitObject) =>{
                if(fruitObject.name === fruit){
                    carbs = carbs + fruitObject.nutritions.carbohydrates;
                    protein = protein + fruitObject.nutritions.protein;
                    fat = fat + fruitObject.nutritions.fat;
                    sugar = sugar + fruitObject.nutritions.sugar;
                    calories = calories + fruitObject.nutritions.calories;
                }
            })
        })

        const nutdeets = `Carbs: ${carbs}, Protein: ${protein}, Fat: ${fat}, Sugar: ${sugar}, Calories: ${calories}`;
        oNutritDetails.textContent = nutdeets;
    }
    CalcNutTotals()

    order_confirmation.style.display = "block";

})