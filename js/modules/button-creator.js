export default function initButtonCreator() {}

const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

const handleStyle = {
  element: btn,
  texto(value) {
    // tem
    this.element.innerHTML = value;
  },
  backgroundColor(value) {
    // tem
    this.element.style.backgroundColor = value;
  },
  height(value) {
    // tem
    this.element.style.height = value + "px";
  },
  width(value) {
    // tem
    this.element.style.width = value + "px";
  },
  color(value) {
    // tem
    this.element.style.color = value;
  },
  border(value) {
    // tem
    this.element.style.border = value;
  },
  borderRadius(value) {
    // tem
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    // tem
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    // tem
    this.element.style.fontSize = value + "px";
  },
};

controles.addEventListener("change", handleChange);
function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

setValues();
function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
     controles.elements[propertie].value = localStorage[propertie];

    handleStyle[propertie](localStorage[propertie]);
  });
  showCss();
}

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}
