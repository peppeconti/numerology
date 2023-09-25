import { formState } from "./form-handler.js";

const resetButtons = document.querySelectorAll("button[data-route]");

function resetQuery(e) {

  const route = e.target.dataset.route;
  const requestContainer = document.querySelector(`#${route} .request`);
  const responseContainer = document.querySelector(`#${route} .response`);
  const inputs = Array.from(document.querySelectorAll(`input[data-route=${route}]`));

  setTimeout(() => {
    inputs.forEach(input => input.value = '');
    requestContainer.classList.add("hide");
    requestContainer.classList.add("hide");
    requestContainer.innerHTML = "";
    responseContainer.innerHTML = "";
  
    formState.route = {};
  }, 3000)

} 

export { resetButtons, resetQuery }
