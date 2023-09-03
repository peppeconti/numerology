import { render, preTemplate, loader } from "./render.js";
import { clickHandler, links } from "./scroll.js";
import { formState, forms } from "./form-handler.js";

document.addEventListener("DOMContentLoaded", () => {
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
    const responseContainer = document.querySelector(`#${route} .response`)

    requestContainer.classList.remove("hide");
    render(requestContainer, preTemplate(uri));
    responseContainer.classList.remove("hide");
    render(responseContainer, loader);

    // abort in 1 second
    let controller = new AbortController();
    setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(uri, {
        signal: controller.signal,
      });
      const responseJSON = await response.json();
      setTimeout(
        () =>
          render(
            responseContainer,
            preTemplate(JSON.stringify(responseJSON), responseJSON.status)
          ),
        3000
      );
    } catch (err) {
      if (err.name == "AbortError") {
        requestContainer.innerHTML = "<h1>funcia</h1>";
      } else {
        render(responseContainer, `<p></p>`);
        throw err;
      }
    }
  }

  // SCROLL

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  // FETCH

  /*async function submit(e) {
    e.preventDefault();

    const route = e.target.id;

    let values = [];

    for (const property in affinity__values) {
      let param = `${property}=${affinity__values[property]}`;
      values.push(param);
    }

    const uri = `${window.location.origin}/api/${route}?${values.join("&")}`;

    // ELABORATING REQUEST

    affinityRequest.classList.remove("hide");
    render(affinityRequest, preTemplate(uri));
    //affinityRequest.innerHTML = preTemplate(uri);
    affinityResponse.classList.remove("hide");
    affinityResponse.innerHTML = loader;

    // abort in 1 second
    let controller = new AbortController();
    setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(uri, {
        signal: controller.signal,
      });
      const affinity = await response.json();
      setTimeout(
        () =>
          render(
            affinityResponse,
            preTemplate(JSON.stringify(affinity), affinity.status)
          ),
        3000
      );
    } catch (err) {
      if (err.name == "AbortError") {
        affinityResponse.innerHTML = "<h1>funcia</h1>";
      } else {
        render(affinityResponse, `<p></p>`);
        throw err;
      }
    }
  }

  // RESETTING

  const reset = document.querySelector("button[type=button]");

  reset.addEventListener("click", resetQuery);

  function resetQuery() {
    affinityRequest.classList.add("hide");
    affinityResponse.classList.add("hide");
    affinityRequest.innerHTML = "";
    affinityResponse.innerHTML = "";

    [her, him, lan].forEach((input) => {
      input.value = "";
      delete affinity__values[input.name];
    });
  }*/
});
