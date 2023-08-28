document.addEventListener("DOMContentLoaded", () => {
  const her = document.getElementById("her");
  const him = document.getElementById("him");
  const lan = document.getElementById("lan");
  const affinity = document.getElementById("affinity");
  const affinityRequest = document.querySelector("#affinity .request");

  affinity.addEventListener("submit", submit);

  const affinity__values = {};

  [her, him, lan].forEach((input) => {
    input.addEventListener("input", (e) => {
      if (e.target.value.length) affinity__values[input.name] = e.target.value;
      if (!e.target.value.length) delete affinity__values[input.name];
      console.log(affinity__values);
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

  const preTemplate = (request) =>
    `<h3>Request:</h3><pre><a href="${request}" target="_blank">${request}</a></pre>`;

  async function submit(e) {
    e.preventDefault();

    let values = [];

    for (const property in affinity__values) {
      let param = `${property}=${affinity__values[property]}`;
      values.push(param);
    }

    const uri = `${window.location.origin}/api/affinity?${values.join("&")}`;
    console.log(uri);
    const response = await fetch(uri);
    const affinity = await response.json();

    affinityRequest.classList.remove('hide');
    affinityRequest.innerHTML = preTemplate(uri);
  }
});
