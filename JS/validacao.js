const camposFormulario = document.querySelectorAll(
  ".formulario input, .formulario select",
);

function validarCampo(campo) {
  campo.classList.add("campo-validado");
}

camposFormulario.forEach(function (campo) {
  campo.addEventListener("blur", function () {
    validarCampo(campo);
  });

  campo.addEventListener("input", function () {
    validarCampo(campo);
  });
});
