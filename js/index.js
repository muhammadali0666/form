const elForm = document.querySelector(".form");
const elInputName = document.querySelector(".input_name");
const elInputRelation = document.querySelector(".input_relation");
const elInputPhone = document.querySelector(".input_phone");
const elDiv = document.querySelector(".div");

let dates = [];

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  const inputNameValue = elInputName.value;
  const inputRelationValue = elInputRelation.value;
  const inputPhone = elInputPhone.value;

  let materials = {
    name: inputNameValue,
    relation: inputRelationValue,
    phone: inputPhone,
  }

  dates.push(materials)

  elInputName.value = null;
  elInputRelation.value = null;
  elInputPhone.value = null;

  elDiv.innerHTML = null;

  for (item of dates) {
    const createDiv = document.createElement("div");
    const createP = document.createElement("p");
    const createOther = document.createElement("p");
    const createOtherP = document.createElement("p");
  
    createP.textContent = `${item.name}`;
    createOther.textContent = `${item.relation}`;
    createOtherP.textContent = `${item.phone}`;
    
    createDiv.appendChild(createP);
    createDiv.appendChild(createOther);
    createDiv.appendChild(createOtherP);

    elDiv.appendChild(createDiv);

    createDiv.style.border = "2px solid black";
    createDiv.style.backgroundColor = "rgb(203, 235, 232)";
  }
})