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
  /* console.log(value);
  console.log(text); */
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

function getInputValueAgirlik(inValue) {
  const input1 = document.getElementById("agirliktipi");
  const inputValue1 = input1.value;
  const input2 = document.getElementById("agirliktipi2");
  const inputValue2 = input2.value;
  const input3 = document.getElementById("agirliktipi3");
  const inputValue3 = input3.value;

  console.log(inputValue1);
  console.log(inputValue2);

  console.log(inputValue3);

  /*  if (changed === "input1") {
    console.log("changed çalışıyor");
    inputValue2 = (45359237 * inputValue1) / 45359237000;
    inputValue3 = (45359237 * inputValue1) / 100000;
  }
  return { inputValue1, inputValue2, inputValue3 }; */
  /* 45359237 * inputValue1 = 45359237000 * inputValue2 = 100000 * inputValue3; */
}
function updateValues(changed, value) {
  let input1, input2, input3;

  if (changed === "input1") {
    input1 = value;
    input2 = (45359237 * input1) / 45359237000;
    input3 = (45359237 * input1) / 100000;
  } else if (changed === "input2") {
    input2 = value;
    input1 = (45359237000 * input2) / 45359237;
    input3 = (45359237000 * input2) / 100000;
  } else if (changed === "input3") {
    input3 = value;
    input1 = (100000 * input3) / 45359237;
    input2 = (100000 * input3) / 45359237000;
  }

  return { input1, input2, input3 };
}
