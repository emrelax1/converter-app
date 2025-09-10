function setSelectionValue(newValue) {
  const dropdown = document.getElementById("type");
  const value = dropdown.value;
  const text = dropdown.options[dropdown.selectedIndex].text;

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

function getInputValueAgirlik(ValueAgirlik) {
  const input1 = document.getElementById("agirliktipi");
  const inputValueAgirlik = input1.value;
  console.log(inputValueAgirlik);
}
function getInputValueSicaklik(ValueSicaklik) {
  const input2 = document.getElementById("sicakliktipi");
  const inputValueSicaklik = input2.value;
  console.log(inputValueSicaklik);
}
function getInputValueUzunluk(ValueUzunluk) {
  const input3 = document.getElementById("uzunluktipi");
  const inputValueUzunluk = input3.value;
  console.log(inputValueUzunluk);
}
function getInputValueHacim(ValueHacim) {
  const input4 = document.getElementById("hacimtipi");
  const inputValueHacim = input4.value;
  console.log(inputValueHacim);
}
