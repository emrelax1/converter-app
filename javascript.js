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
  filterToUnitOptions();

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
  }
}

function filterToUnitOptions() {
  const fromValue = document.getElementById("girilen_agirlik").value;
  const toUnit = document.getElementById("donusturulen_agirlik");

  for (let i = 0; i < toUnit.options.length; i++) {
    const option = toUnit.options[i];
    const isSame = option.value === fromValue;
    option.disabled = isSame;
    //aynı birim fronUnitte 1 ise toUnitte 0 olsun., ilk seçilen birim seçildiyse , ikincide diğeri seçilsin
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

  let current_multiplier = convertions.find(
    (x) =>
      x.from_key == selectedWeight1Value && x.to_key == selectedWeight2Value
  ).multiplier;

  if (current_multiplier) {
    var converter_result = current_multiplier(parseFloat(inputValueAgirlik));
    document.getElementById("agirliksonuc").value = converter_result;
  }
  inputMinChanger();
}
