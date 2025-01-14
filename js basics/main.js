const name = "eli"; 
const age = 17; 

 function showDetails(){
   console.log("hallo Wereld! Ik ben " + name + " en Ik ben " + age + " jaar oud ");
   
 }
 showDetails(); 

 const schoolCourse = "software developer"; 
 const schoolname = "ROC Mondriaan"; 
 const className = 'B1K'; 
 const teacherName = 'meneer mooijman'; 


 function showSchoolDetails(){
    console.log("Ik volg de opleiding " + schoolCourse + " op " + schoolname +  " Ik zit in klas " +  className + " en mijn docent is " + teacherName);
    
 }
 showSchoolDetails();


 function showFullDescription(){
    showDetails() + showSchoolDetails(); 
 }

 showFullDescription(); 

 function Add(a, b){
    return a + b 
 }
 
 function Subtract(a, b){
    return a - b 
 }

 
 function Mutiply(a, b){
    return a * b 
 }

 function Divide(a, b){
    return a / b 
 }

 console.log(Add(3,5));
 console.log(Subtract(7,2));
 console.log(Divide(20,5));
 console.log(Mutiply(8,4));
 console.log(Add(19, 42));
 console.log(Divide(18,3));
 console.log(Subtract(17,7));
 console.log(Add(18,22));
 console.log(Add(18,22),Mutiply(19, 2),Divide(19 -2,34));
 
 