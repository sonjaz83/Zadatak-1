

function generate() {
  ///sssss
  const boxWrapper = document.getElementById("boxWrapper");
  let inputValue = document.getElementById("inputBtnVal").value;
  //console.log(inputValue);

  //clear boxWrapper
  boxWrapper.innerHTML = '';

  if (isNaN(inputValue) || inputValue < 2 || inputValue > 500) {
    alert('Broj treba da bude veci od 2 i manji od 500');
    return;
  }

  for (let i = 0; i < inputValue; i++) {

    var colorStep = document.createElement('div');

    let count = i + 1;
    colorStep.innerText = 'Ja sam ' + count; // Text content for each div
    colorStep.style.padding = '10px';
    colorStep.style.margin = '5px 0';

    //deo koji se mnozi: 0 je crna, 255 je bela
    let colorPart = 255 / (inputValue - 1); //-1, jer ako npr. ima 3 elementa ide 0, 255/2, 255
    let colorNum = colorPart * i;
    
    colorStep.style.backgroundColor = 'rgb(' + colorNum + ',' + colorNum + ',' + colorNum + ')';

    if(colorNum < 126){
      colorStep.style.color = 'rgb(255,255,255)';
    }else{
      colorStep.style.color = 'rgb(0,0,0)';
    }

    boxWrapper.appendChild(colorStep);

  }
}
document.getElementById("inputBtnVal").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
      // Check if Enter key is pressed
      document.getElementById("generateBtn").click();
      // Trigger button click
  }
});
