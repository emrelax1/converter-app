/* var selectedType = "agirlik";

function setSelectionValue(newValue) {
  console.log(newValue.value);
  console.log(newValue.options[newValue.selectedType], text);
  selectedType = newValue.value;
}
 */

function setSelectionValue(newValue) {
  const dropdown = document.getElementById("type");
  const value = dropdown.value;
  const text = dropdown.options[dropdown.selectedIndex].text;
  console.log(value);
  console.log(text);
  if (value == null) {
    document.getElementById("agirlikdivi").style.display = "block";
    document.getElementById("sicaklikdivi").style.display = "none";
    document.getElementById("uzunlukdivi").style.display = "none";
    document.getElementById("hacimdivi").style.display = "none";
  }
  if (value == "agirlik") {
    document.getElementById("agirlikdivi").style.display = "block";
    document.getElementById("sicaklikdivi").style.display = "none";
    document.getElementById("uzunlukdivi").style.display = "none";
    document.getElementById("hacimdivi").style.display = "none";
  }
  if (value == "sicaklik") {
    document.getElementById("agirlikdivi").style.display = "none";
    document.getElementById("sicaklikdivi").style.display = "block";
    document.getElementById("uzunlukdivi").style.display = "none";
    document.getElementById("hacimdivi").style.display = "none";
  }
  if (value == "uzunluk") {
    document.getElementById("agirlikdivi").style.display = "none";
    document.getElementById("sicaklikdivi").style.display = "none";
    document.getElementById("uzunlukdivi").style.display = "block";
    document.getElementById("hacimdivi").style.display = "none";
  }
  if (value == "hacim") {
    document.getElementById("agirlikdivi").style.display = "none";
    document.getElementById("sicaklikdivi").style.display = "none";
    document.getElementById("uzunlukdivi").style.display = "none";
    document.getElementById("hacimdivi").style.display = "block";
  }
}

function getInputValue{
    
}