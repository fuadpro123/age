const FORM = document.getElementById("inputs");

// Inputs
const INPDAY = document.getElementById("inp-day");
const INPMON = document.getElementById("inp-mon");
const INPYER = document.getElementById("inp-yer");

// btn
const BTN = document.getElementById("btn");

// outputs
const OPYER = document.getElementById("op-yer");
const OPMON = document.getElementById("op-mon");
const OPDAY = document.getElementById("op-day");

FORM.onsubmit = (e) => {
  e.preventDefault();
  const date = new Date();
  const currentDate = new Date(date.getFullYear(), date.getMonth(), 0);

  OPYER.textContent = currentDate.getFullYear() - parseInt(INPYER.value);
  OPDAY.textContent = currentDate.getDate() - parseInt(INPDAY.value);
  OPMON.textContent = 12 - parseInt(INPMON.value);
};

