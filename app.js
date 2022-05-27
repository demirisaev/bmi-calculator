const form = document.querySelector("#bmi-calc");
const weightKg = document.getElementById('weightkg');
const heightCm = document.getElementById('heightcm');
const submitBtn = document.getElementById('button');
const display = document.querySelector('.display');
const result = document.getElementById('result');
const category = document.getElementById('category');
const reset = document.querySelector("#reset");
const idealkilo = document.querySelector(".idealkilo");
const bmr = document.querySelector('#bmr');
const ageInput = document.querySelector('#age');
const diet = document.querySelector('.diet');
const idealtarget = document.querySelector('.idealkilo_target');
const eatdaily = document.querySelector('.eatdaily');
const dietweek = document.querySelector('.dietweek');
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
    let age = ageInput.value.trim();
    const idealbmi = 22.5;
   
        
    let bmrCal = Math.round((10 * weight) + (6.25 * height) - (5 * age)); 
    let BMI = Math.round(weight / (height/100 * height/100));
    let idealKilo = Math.round(idealbmi * (height/100 * height/100));
    
   
    let overCalcweight = Math.round(weight - idealKilo); 
   
    let dailyCaloris = Math.round (bmrCal * 1.4 );
    let dietWeeks = Math.round(overCalcweight / 0.5) ;
    let dietCaloris = Math.round(bmrCal - 500) ;

   
   
    Result(BMI, idealKilo, bmrCal, dietWeeks, dietCaloris, dailyCaloris);
  
    
     
   e.preventDefault();
   weightKg.value = "";
   heightCm.value = "";
   ageInput.value = "";
}

function Result(BMI, idealKilo, bmrCal, dietWeeks, dietCaloris, dailyCaloris){
    if (BMI > 1){
        display.style.display = "block"; 
        diet.style.display = "block";
    }
    idealkilo.textContent =  `Your ideal weight is ${idealKilo}`;
    bmr.textContent = `With a normal lifestyle you burn ${bmrCal} calories a day`;
    idealtarget.textContent = `If you want to reach your ideal weight of ${idealKilo} kg: `;
    eatdaily.textContent = `Eat calories  ${dietCaloris} a day`;
    dietweek.textContent = `For ${dietWeeks} weeks`;
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


