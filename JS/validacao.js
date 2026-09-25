const camposFormulario = document.querySelectorAll(
  ".formulario input, .formulario select",
);

camposFormulario.forEach(function (campo) {
  campo.addEventListener("blur", function () {
    campo.classList.add("campo-validado");
  });

  campo.addEventListener("input", function () {
    campo.classList.add("campo-validado");
  });
});
