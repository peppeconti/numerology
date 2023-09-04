import { formState } from "./form-handler.js";

const resetButtons = document.querySelectorAll("button[data-route]");

function resetQuery(e) {
  const route = e.target.dataset.route;

  const requestContainer = document.querySelector(`#${route} .request`);
  const responseContainer = document.querySelector(`#${route} .response`);

  requestContainer.classList.add("hide");
  requestContainer.classList.add("hide");
  requestContainer.innerHTML = "";
  responseContainer.innerHTML = "";

  formState.route = {};
} 

export { resetButtons, resetQuery }
