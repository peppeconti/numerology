import { render, preTemplate, loader } from "./render.js";
import { clickHandler, links } from "./scroll.js";
import { formState, forms } from "./form-handler.js";
import { resetButtons, resetQuery } from "./reset.js";
import { hamb, toggleMenu } from "./hamb-menu.js";

document.addEventListener("DOMContentLoaded", () => {
  // SCROLL

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  // TOGGLE

  hamb.addEventListener("click", toggleMenu);

  // FETCH

  let controller;

  forms.forEach((form) => form.addEventListener("submit", submit));

  async function submit(e) {
    e.preventDefault();

    const route = e.target.id;

    let values = [];

    for (const property in formState[route]) {
      let param = `${property}=${formState[route][property]}`;
      values.push(param);
    }

    const uri = `${window.location.origin}/api/${route}?${values.join("&")}`;

    // ELABORATING REQUEST

    const requestContainer = document.querySelector(`#${route} .request`);
    const responseContainer = document.querySelector(`#${route} .response`);

    requestContainer.classList.remove("hide");
    render(requestContainer, preTemplate(uri));
    responseContainer.classList.remove("hide");
    render(responseContainer, loader);

    controller = new AbortController();

    try {
      const response = await fetch(uri, {
        signal: controller.signal,
      });
      const responseJSON = await response.json();
      setTimeout(() => {
        if (!controller.signal.aborted) {
          render(
            responseContainer,
            preTemplate(JSON.stringify(responseJSON), responseJSON.status)
          );
        } else if (controller.signal.aborted) return;
      }, 3000);
    } catch (err) {
      if (err.name == "AbortError") {
        console.log("error");
        render(
          responseContainer,
          "<p>Your request couldn't be elaborated...</p>"
        );
      } else {
        render(responseContainer, "<p>An unknown error occured...</p>");
        throw err;
      }
    }
  }

  // RESETTING

  resetButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      resetQuery(e, controller);
    })
  );

  // GETTING YEAR IN FOOTER

  const year = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  year.innerHTML = currentYear;
});
