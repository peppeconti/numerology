import { render, preTemplate, loader } from "./render.js";

document.addEventListener("DOMContentLoaded", () => {
  const her = document.getElementById("her");
  const him = document.getElementById("him");
  const lan = document.getElementById("lan");
  const affinity = document.getElementById("affinity");
  const affinityRequest = document.querySelector("#affinity .request");
  const affinityResponse = document.querySelector("#affinity .response");

  affinity.addEventListener("submit", submit);

  const affinity__values = {};

  [her, him, lan].forEach((input) => {
    input.addEventListener("input", (e) => {
      if (e.target.value.length) affinity__values[input.name] = e.target.value;
      if (!e.target.value.length) delete affinity__values[input.name];
      //console.log(affinity__values);
    });
  });

  // SCROLL
  const links = document.querySelectorAll(".nav__bar li a");

  const clickHandler = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop - 100,
      behavior: "smooth",
    });
  };

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  // FETCH

  async function submit(e) {
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
  }
});
