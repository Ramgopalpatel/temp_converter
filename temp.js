setInterval(() => {
  const d = new Date();
  let text = d.toLocaleTimeString();
  document.getElementById("currentTime").innerHTML = text;
}, 1000);

const calculateTemp = () => {
  const numberTemp = document.getElementById("inputTemp").value;
  // console.log(numberTemp);

  const tempSelected = document.getElementById("selectType");
  const temp = selectType.options[tempSelected.selectedIndex].value;

  const celToCel = (cel) => {
    return cel;
  };

  const celToKel = (cel) => {
    const kel =  Number(cel) + +273;
    return kel;
  };
  const celToFah = (cel) => {
    const fah = (9*Number(cel)/5)+32;
    return fah;
  };

  const celToRea = (cel) => {
    const rea = (4 * cel) / 5;
    return rea;
  };

  if (temp == "Cel") {
    let result = celToCel(numberTemp);
    document.getElementById("resultContainer").innerHTML = `=  ${result} °C`;
  } else if (temp == "Kel") {
    let result = celToKel(numberTemp);
    document.getElementById("resultContainer").innerHTML = `=  ${result} K`;
  } else if (temp == "Fah") {
    let result = celToFah(numberTemp);
    document.getElementById("resultContainer").innerHTML = `=  ${result} °F`;
  } else if (temp == "Rea") {
    let result = celToRea(numberTemp);
    document.getElementById("resultContainer").innerHTML = `=  ${result} °R`;
  }
};
