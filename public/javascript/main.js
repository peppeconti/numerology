document.addEventListener("DOMContentLoaded", () => {
  const her = document.getElementById("her");
  const him = document.getElementById("him");
  const lan = document.getElementById("lan");
  const affinity = document.getElementById("affinity");
  const affinity__response = document.getElementById("affinity__response");

  affinity.addEventListener("submit", submit);

  let herValue = "";
  let himValue = "";
  let lanValue = "";

  her.addEventListener("input", (e) => {
    herValue = e.target.value;
    console.log(herValue);
  });

  him.addEventListener("input", (e) => {
    himValue = e.target.value;
    console.log(himValue);
  });

  lan.addEventListener("input", (e) => {
    lanValue = e.target.value;
    console.log(lanValue);
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
    const uri = `https://numerology-mpm7.onrender.com/api/affinity?her=${herValue}&him=${himValue}`;
    const response = await fetch(uri);
    const affinity = await response.json();

    affinity__response.innerHTML = `<pre>${JSON.stringify(affinity)}</pre>`
  }
});
