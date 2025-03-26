themePopupVisible = false
function newNoter(btn){
  let subject= btn.parentElement.parentElement
  console.log(subject)
  const newNote= document.createElement("input")
  newNote.className= "notes"
  subject.appendChild(newNote)
  
}
function newSubject(btn){
  let box= document.getElementById("box")
  console.log("words")
  const newSubject= document.createElement("div")
  newSubject.className="subject"
  const newSubtitle= document.createElement("input")
  newSubtitle.className="subTitle"
  const newNote= document.createElement("input")
  newNote.className="notes"
  newNote.className="notes"
  const new2note= document.createElement("input")
  new2note.className="notes"


  
  
  newSubject.appendChild(newSubtitle)
  newSubject.appendChild(newNote)
  box.appendChild(newSubject)
  newSubject.appendChild(new2note)
}

function showOrHide(){
  themePopupVisible = !themePopupVisible
  console.log(themePopupVisible)
  
}
 function applyTheme(theme){
 document.body.className=theme
 localStorage.setItem('selectedTheme',theme)//stores the selected theme

 }
 const themeCheckBoxes= document.querySelectorAll('input[name="theme"]')
 function handleThemeSelection(selectedCheckBox){
 for(let checkbox of themeCheckBoxes){
  checkbox.checked=false;
  selectedCheckBox.checked=true;
  applyTheme(selectedCheckBox.value);
 }

 } 

themeCheckBoxes.forEach(checkbox=>{
  checkbox.addEventListener("change",handleThemeSelection)
});
document.addEventListener("DOMContentLoaded",function(){
  const saveTheme=localStorage.getItem('selectedTheme') ||'Ocean';// grabbing selecting theme to reuse after page reloads
  applyTheme(saveTheme);
  // find the checkbox that matches the selected theme and check it
})





  



























































