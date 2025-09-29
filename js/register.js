let form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email");
  let name = document.getElementById("name");
  let password = document.getElementById("password");

  let failMessages = document.querySelectorAll(".failCheck");
  let inputs = [email, name, password];

  let users = JSON.parse(localStorage.getItem("users")) || [];

  failMessages.forEach((msg) => (msg.style.display = "none"));
  inputs.forEach((input) => input.classList.remove("fail"));

  let isValid = true;

  if (name.value.trim() === "") {
    failMessages[1].textContent = "Tên không được để trống";
    failMessages[1].style.display = "block";
    name.classList.add("fail");
    isValid = false;
  }

  if (email.value.trim() === "") {
    failMessages[0].textContent = "Vui lòng nhập Email hoặc số điện thoại";
    failMessages[0].style.display = "block";
    email.classList.add("fail");
    isValid = false;
  } else if (!isValidEmailOrPhone(email.value.trim())) {
    failMessages[0].textContent = "Email hoặc số điện thoại không hợp lệ";
    failMessages[0].style.display = "block";
    email.classList.add("fail");
    isValid = false;
  } else if (users.some((user) => user.email === email.value.trim())) {
    failMessages[0].textContent = "Email hoặc số điện thoại đã được sử dụng";
    failMessages[0].style.display = "block";
    email.classList.add("fail");
    isValid = false;
  }

  if (password.value.trim() === "") {
    failMessages[2].textContent = "Mật khẩu không được để trống";
    failMessages[2].style.display = "block";
    password.classList.add("fail");
    isValid = false;
  } else if (password.value.length < 8) {
    failMessages[2].textContent = "Mật khẩu phải có ít nhất 8 ký tự";
    failMessages[2].style.display = "block";
    password.classList.add("fail");
    isValid = false;
  }

  if (isValid) {
    let newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    let newUser = {
      id: newId,
      email: email.value.trim(),
      name: name.value.trim(),
      password: password.value,
      role: "user",
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "../pages/login.html";
  }
});

function isValidEmailOrPhone(value) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^(0|\+84)(\d{9})$/;
  return emailRegex.test(value) || phoneRegex.test(value);
}

document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    let passwordInput = document.getElementById("password");
    let icon = this;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });
