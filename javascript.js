const converter_type = {
  agirlik: ["Kilogram(kg)", "Gram(g)", "Pound(lb)"],
  sicaklik: ["Kelvin(K)", "Celsius(°C)", "Fahrenayt(°F)"],
  uzunluk: ["Metre(m)", "Santimetre(cm)", "Feet(ft)", "İnç(in)"],
  hacim: ["Litre(L)", "Mililitre(ml)", "Galon(gal)"],
};

function setSelectionValue(newValue) {
  const dropdown = document.getElementById("type");
  const value = dropdown.value;
  const birimlerSecilen = converter_type?.[value];

  optionValueAdd(birimlerSecilen);

  const text = dropdown.options[dropdown.selectedIndex].text;
}

function optionValueAdd(birimlerSecilen) {
  const selectors = document.querySelectorAll(".selector");
  selectors[0].innerHTML = "";
  selectors[1].innerHTML = "";
  for (let birim of birimlerSecilen) {
    console.log("birim: ", birim);

    selectors.forEach((element) => {
      element.innerHTML += `<option value="${birim}">${birim}</option>`;
    });
  }
}
function inputMinChanger() {
  const agirliktipi = document.getElementById("agirliktipi");
  const input_data1 = document.getElementById("girilen_agirlik").value;

  if (input_data1 == "Celsius(°C)" || input_data1 == "Fahrenayt(°F)") {
    agirliktipi.min = "-200";
    console.log("min -300 setlendi");
  } else {
    console.log("min 0 setlendi");
    agirliktipi.min = "0";

    if (agirliktipi.value < 0) {
      alert("Negatif değeri alamaz !!");
    }
  }
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

function converterFunc() {
  const input1 = document.getElementById("agirliktipi");
  var inputValueAgirlik = input1.value;

  const selectedWeight1 = document.getElementById("girilen_agirlik");
  const selectedWeight1Value = selectedWeight1.value;
  const selectedWeight2 = document.getElementById("donusturulen_agirlik");
  const selectedWeight2Value = selectedWeight2.value;

  console.log("selectedWeight1Value", selectedWeight1Value);
  console.log("selectedWeight2Value", selectedWeight2Value);

  let current_multiplier = convertions.find(
    (x) =>
      x.from_key == selectedWeight1Value && x.to_key == selectedWeight2Value
  ).multiplier;

  if (current_multiplier) {
    var converter_result = current_multiplier(parseFloat(inputValueAgirlik));
    document.getElementById("agirliksonuc").value = converter_result;
  }
  inputMinChanger();
} /* 
function heatConverter() {
  const input2 = document.getElementById("sicakliktipi");
  var inputValueSicaklik = input2.value;
  const selectedHeat1 = document.getElementById("girilen_sicaklik");
  const selectedHeat1Value = selectedHeat1.value;
  const selectedHeat2 = document.getElementById("donusturulen_sicaklik");
  const selectedHeat2Value = selectedHeat2.value;
  console.log("selectedHeat1Value", selectedHeat1Value);
  console.log("selectedHeat2Value", selectedHeat2Value);

  let current_multiplier = convertions.find(
    (x) => x.from_key == selectedHeat1Value && x.to_key == selectedHeat2Value
  ).multiplier;

  if (current_multiplier) {
    var converter_result = current_multiplier(parseFloat(inputValueSicaklik));
    document.getElementById("sicakliksonuc").value = converter_result;
  }
}
function lengthConverter() {
  const input3 = document.getElementById("uzunluktipi");
  var inputValueUzunluk = input3.value;
  const selectedLength1 = document.getElementById("girilen_uzunluk");
  const selectedLength1Value = selectedLength1.value;
  const selectedLength2 = document.getElementById("donusturulen_uzunluk");
  const selectedLength2Value = selectedLength2.value;
  console.log("selectedLength1Value", selectedLength1Value);
  console.log("selectedLength2Value", selectedLength2Value);

  let current_multiplier = convertions.find(
    (x) =>
      x.from_key == selectedLength1Value && x.to_key == selectedLength2Value
  ).multiplier;

  if (current_multiplier) {
    var converter_result = current_multiplier(parseFloat(inputValueUzunluk));
    document.getElementById("uzunluksonuc").value = converter_result;
  }
}
function volumeConverter() {
  const input4 = document.getElementById("hacimtipi");
  var inputValueVolume = input4.value;
  const selectedVolume1 = document.getElementById("girilen_hacim");
  const selectedVolume1Value = selectedVolume1.value;
  const selectedVolume2 = document.getElementById("donusturulen_hacim");
  const selectedVolume2Value = selectedVolume2.value;
  console.log("selectedVolume1Value", selectedVolume1Value);
  console.log("selectedVolume2Value", selectedVolume2Value);

  let current_multiplier = convertions.find(
    (x) =>
      x.from_key == selectedVolume1Value && x.to_key == selectedVolume2Value
  ).multiplier;

  if (current_multiplier) {
    var converter_result = current_multiplier(parseFloat(inputValueVolume));
    document.getElementById("hacimsonuc").value = converter_result;
  }
}
 */
