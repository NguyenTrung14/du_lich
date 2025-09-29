let form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let failMessages = document.querySelectorAll(".failCheck");

  failMessages.forEach((msg) => (msg.style.display = "none"));
  email.classList.remove("fail");
  password.classList.remove("fail");

  let isValid = true;

  if (email.value.trim() === "") {
    failMessages[0].textContent = "Vui lòng nhập Email hoặc số điện thoại";
    failMessages[0].style.display = "block";
    email.classList.add("fail");
    isValid = false;
  }

  if (password.value === "") {
    failMessages[1].textContent = "Mật khẩu không được để trống";
    failMessages[1].style.display = "block";
    password.classList.add("fail");
    isValid = false;
  }

  if (!isValid) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = users.find(
    (u) =>
      u.email.toLowerCase() === email.value.trim().toLowerCase() &&
      u.password === password.value
  );

  if (user) {
    let currentUser = {
      email: user.email,
      name: user.name,
      role: user.role,
    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    if (user.role === "admin") {
      window.location.href = "../pages/trademark_manager.html";
    } else {
      window.location.href = "../pages/home.html";
    }
  } else {
    failMessages[1].textContent = "Tài khoản không hợp lệ";
    failMessages[1].style.display = "block";
    password.classList.add("fail");
  }
});

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
