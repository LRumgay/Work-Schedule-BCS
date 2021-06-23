let now = moment();

//Clock//
const currentTimeInterval = setInterval(function () {
    now = moment();
    $("#now").text(`${now.format('MMM DD, YYYY')} at ${now.format('HH:mm:ss')}`);
  }, 1000);

 
  
var SubButton = document.getElementById("#SubButton")
      
    SubButton.onclick = SubButton;


function saveData(){
  var input = document.getElementById("#Wplanner");
  localStorage.setItem("Wplanner", input.value);
  var storedValue = localStorage.getItem("Wplanner");
}
  
  







