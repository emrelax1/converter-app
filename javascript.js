// converter to type
const converter_type = {
  weight: ["Kilogram(kg)", "Gram(g)", "Pound(lb)"],
  heat: ["Kelvin(K)", "Celsius(°C)", "Fahrenayt(°F)"],
  length: ["Metre(m)", "Santimetre(cm)", "Feet(ft)", "İnç(in)"],
  volume: ["Litre(L)", "Mililitre(ml)", "Galon(gal)"],
};
// The function we call when we select the conversion type
// (adjusting the dropdown menu entries, not being able to
// select the same unit type)
function setSelectionValue(newValue) {
  const dropdown = document.getElementById("type");
  const value = dropdown.value;
  const selected_units = converter_type?.[value];

  optionValueAdd(selected_units);
  filterToUnitOptions();

  const text = dropdown.options[dropdown.selectedIndex].text;
}
// function that dynamically adds options to drop-down lists
function optionValueAdd(selected_units) {
  const selectors = document.querySelectorAll(".selector");
  selectors[0].innerHTML = "";
  selectors[1].innerHTML = "";
  for (let unit of selected_units) {
    console.log("unit: ", unit);

    selectors.forEach((element) => {
      element.innerHTML += `<option value="${unit}">${unit}</option>`;
    });
  }
}
// Since Fahrenheit and Celsius can take negative values,
// the function that allows us to take negative values ​​into its input
function inputMinChanger() {
  const taken_value = document.getElementById("taken_value");
  const input_data1 = document.getElementById("from_unit").value;

  if (input_data1 == "Celsius(°C)" || input_data1 == "Fahrenayt(°F)") {
    taken_value.min = "-200";
    console.log("min -300 setlendi");
  } else {
    console.log("min 0 setlendi");
    taken_value.min = "0";
  }
}
// same unit selection control function
function filterToUnitOptions() {
  const fromValue = document.getElementById("from_unit").value;
  const toUnit = document.getElementById("to_unit");

  for (let i = 0; i < toUnit.options.length; i++) {
    const option = toUnit.options[i];
    const isSame = option.value === fromValue;
    option.disabled = isSame;
    //aynı unit fronUnitte 1 ise toUnitte 0 olsun., ilk seçilen unit seçildiyse , ikincide diğeri seçilsin
  }
}
// calculation function
function converterFunc() {
  const input1 = document.getElementById("taken_value");
  var inputValue = input1.value;

  const selectedUnit1 = document.getElementById("from_unit");
  const selectedUnit1Value = selectedUnit1.value;
  const selectedUnit2 = document.getElementById("to_unit");
  const selectedUnit2Value = selectedUnit2.value;

  if (selectedUnit1Value == selectedUnit2Value) {
    document.getElementById("result").value = inputValue;
  } else {
    let current_multiplier = convertions.find(
      (x) => x.from_key == selectedUnit1Value && x.to_key == selectedUnit2Value
    ).multiplier;

    if (current_multiplier) {
      var converter_result = current_multiplier(parseFloat(inputValue));
      document.getElementById("result").value = converter_result;
    }
  }

  inputMinChanger();
}
