const render = (wrapper, content) => (wrapper.innerHTML = content);

const preTemplate = (result, state = null) => {
  if (!state) return `<h3>Request:</h3><pre><a href="${result}" target="_blank">${result}</a></pre>`;
  if (state) return `<h3>Response: ${
      state==="true"
        ? "<span style='color: rgb(73, 255, 73);' class='fas fa-check-circle'></span>"
        : "<span style='color: rgb(255, 87, 87);' class='fas fa-times-circle'></span>"
    }</h3><pre ${state==="true" ? "style='background-color:rgb(182, 255, 182);'" : "style='background-color:rgb(255, 168, 168);'"}>${result}</pre>`;
};

const loader = `<div class="lds-ellipsis"><div></div><div></div><div></div>`;

export { render, preTemplate, loader };
