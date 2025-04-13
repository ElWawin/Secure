function generarPassword() {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < 12; i++) {
    const random = Math.floor(Math.random() * caracteres.length);
    password += caracteres[random];
  }
  document.getElementById("resultado").innerText = password;
}
