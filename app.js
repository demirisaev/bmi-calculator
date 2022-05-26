const form = document.querySelector("#bmi-calc");
const weightKg = document.getElementById('weightkg');
const heightCm = document.getElementById('heightcm');
const submitBtn = document.getElementById('button');
const display = document.querySelector('.display');
const result = document.getElementById('result');
const category = document.getElementById('category');
const reset = document.querySelector("#reset");
const idealkilo = document.querySelector(".idealkilo");
//let height = parseInt(heightCm);
//et weight = parseInt(weightKg);

eventListeners();

function eventListeners(){
    form.addEventListener('submit', CalculateBMI);
    form.addEventListener('reset', Reset);
}


function CalculateBMI(e) {
    let weight = weightKg.value.trim();
    let height = heightCm.value.trim();
    const idealbmi = 22.5;

    
    let BMI = Math.round(weight / (height/100 * height/100));
    let idealKilo = Math.round(idealbmi * (height/100 * height/100));
   
   
    Result(BMI, idealKilo);
  
    
     
   e.preventDefault();
   weightKg.value = "";
   heightCm.value = "";
}

function Result(BMI, idealKilo){
    if (BMI > 1){
        display.style.display = "block"; 
    }
    idealkilo.textContent =  `Your ideal kilo is ${idealKilo}`;
    result.textContent = BMI ;
    if (BMI < 18.5) {

        category.textContent = "Underweight";
        result.style.color = "#ffc44d";
          
      } 
      else if (BMI >= 18.5 && BMI <= 24.9 ) {
          category.textContent = "Normal Weight";
          result.style.color = "#0be881";
      }
      else if (BMI >= 25 && BMI <= 29.9 ) {
          category.textContent = "OverWeight";
          result.style.color = "#ff884d";
      }
      else  {
          category.textContent = "Obese";
          result.style.color = "#ff5e57";
      }
}

function Reset(e){
    display.style.display = "none"; 
}

Result(BMI);

CalculateBMI(e);


