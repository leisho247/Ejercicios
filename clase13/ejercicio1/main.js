document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener valores de los campos
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();
    const birthday = document.getElementById("birthday").value.trim();
    const newsletter = document.getElementById("newsletter").checked;

    // Validación de nombre y apellido
    const name = /^[a-zA-Z\s]+$/;
    if (!name.test(firstName)) {
      document.getElementById("firstNameError").innerText =
        "El nombre debe contener letras y espacios.";
      return;
    } else {
      document.getElementById("firstNameError").innerText = "";
    }

    if (!name.test(lastName)) {
      document.getElementById("lastNameError").innerText =
        "El apellido debe contener letras y espacios.";
      return;
    } else {
      document.getElementById("lastNameError").innerText = "";
    }

    // Validación de contraseña
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerText =
        "La contraseña no coincide.";
      return;
    } else {
      document.getElementById("confirmPasswordError").innerText = "";
    }

    // Guardar datos en localStorage
    const userData = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      birthday: birthday,
      newsletter: newsletter,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // Si todas las validaciones pasan
    alert("validacion exitosa!");
  });
