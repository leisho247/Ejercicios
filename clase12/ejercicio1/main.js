document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // valores de los campos
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const birthday = document.getElementById("birthday").value;

    // Validación de nombre y apellido
    const name = /^[a-zA-Z\s]+$/;
    if (!name.test(firstName)) {
      alert("el nombre solo puede contener letras y espacios.");
      return;
    }
    if (!name.test(lastName)) {
      alert("El apellido solo puede tener letras y espacios.");
      return;
    }

    // Validación de contraseña
    if (password !== confirmPassword) {
      alert("La contraseña no coincide.");
      return;
    }

    // Si todas las validaciones pasan
    alert("validacion exitosa!");
  });
