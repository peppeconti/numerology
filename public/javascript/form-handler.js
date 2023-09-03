const inputs = Array.from(document.querySelectorAll("input[data-route]"));
const forms = Array.from(document.querySelectorAll("#examples form"));

const formState = {};

forms.forEach(form => formState[form.id] = {});

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (e.target.value.length) formState[input.dataset.route][input.name] = e.target.value;
    if (!e.target.value.length) delete formState[input.dataset.route][input.name];
  });
});

export { formState, forms };
