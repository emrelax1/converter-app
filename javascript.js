const convertions = [
  {
    from_key: "kg",
    to_key: "lb",
    multiplier: 2.20462,
  },
  {
    from_key: "kg",
    to_key: "g",
    multiplier: 1000,
  },
  {
    from_key: "g",
    to_key: "kg",
    multiplier: 0.001,
  },
  {
    from_key: "g",
    to_key: "lb",
    multiplier: 0.00220462,
  },
  {
    from_key: "lb",
    to_key: "kg",
    multiplier: 0.45359237,
  },
  {
    from_key: "lb",
    to_key: "g",
    multiplier: 453.59237,
  },
  {
    from_key: "m",
    to_key: "cm",
    multiplier: 100,
  },
  {
    from_key: "m",
    to_key: "ft",
    multiplier: 3.28084,
  },
  {
    from_key: "m",
    to_key: "in",
    multiplier: 39.3701,
  },
  {
    from_key: "cm",
    to_key: "m",
    multiplier: 0.01,
  },
  {
    from_key: "cm",
    to_key: "ft",
    multiplier: 0.0328084,
  },
  {
    from_key: "cm",
    to_key: "in",
    multiplier: 0.3937,
  },
  {
    from_key: "ft",
    to_key: "m",
    multiplier: 0.3048,
  },
  {
    from_key: "ft",
    to_key: "cm",
    multiplier: 30.48,
  },
  {
    from_key: "ft",
    to_key: "in",
    multiplier: 12,
  },
  {
    from_key: "in",
    to_key: "m",
    multiplier: 0.0254,
  },
  {
    from_key: "in",
    to_key: "cm",
    multiplier: 2.54,
  },
  {
    from_key: "in",
    to_key: "ft",
    multiplier: 0.08333,
  },
  {
    from_key: "l",
    to_key: "ml",
    multiplier: 1000,
  },
  {
    from_key: "l",
    to_key: "gal",
    multiplier: 0.2642,
  },
  {
    from_key: "ml",
    to_key: "l",
    multiplier: 0.001,
  },
  {
    from_key: "ml",
    to_key: "gal",
    multiplier: 0.0002642,
  },
  {
    from_key: "gal",
    to_key: "l",
    multiplier: 3.78541,
  },
  {
    from_key: "gal",
    to_key: "ml",
    multiplier: 3785.41,
  },
  {
    from_key: "k",
    to_key: "c",
    multiplier: (value) => {
      return value - 273.15;
    },
  },
  {
    from_key: "f",
    to_key: "c",
    multiplier: (value) => {
      return ((value - 32) * 5) / 9;
    },
  },
];

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

/* function getInputValueAgirlik(ValueAgirlik) {
  
  console.log(inputValueAgirlik);
} */
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

function weightConverter() {
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
    var converter_result = parseFloat(inputValueAgirlik) * current_multiplier;
    document.getElementById("agirliksonuc").value = converter_result;
  }
}
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
    var converter_result = parseFloat(inputValueUzunluk) * current_multiplier;
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
    var converter_result = parseFloat(inputValueVolume) * current_multiplier;
    document.getElementById("hacimsonuc").value = converter_result;
  }
}
