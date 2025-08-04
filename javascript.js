function changeViewScreen() {
  const screens = document.querySelectorAll(".screen");
  screens.forEach(screen => screen.classList.toggle("display-none"));
}

function sub() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("Confirm").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("❌ Email ka format ghalat hai.");
    return false; 
  }

  if (password.length < 8) {
    alert("❌ Password kam az kam 8 characters ka hona chahiye.");
    return false;  
  }


  if (password !== confirm) {
    alert("❌ Password aur Confirm Password match nahi kar rahe.");
    return false;  
  }


  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  localStorage.setItem("isRegistered", "true");

  alert("✅ Registration kamiyab ho gaya!");

  setTimeout(() => {
    changeViewScreen(); // Login screen par le jao
    showLoginMessage(); // Message dikhao
  }, 500);

  return false; 
}

function showLoginMessage() {
  const email = localStorage.getItem("userEmail");
  if (email) {
    alert(`✅ Aap registered hain is email se: ${email}`);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("#tela_login form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = loginForm.querySelector('input[name="e-mail"]').value.trim();
      const passwordInput = loginForm.querySelector('input[name="password"]').value.trim();

      const storedEmail = localStorage.getItem("userEmail");
      const storedPassword = localStorage.getItem("userPassword");

      if (emailInput === storedEmail && passwordInput === storedPassword) {
        alert("✅ Login kamiyab hua!");
      } else {
        alert("❌ Email ya password ghalat hai.");
      }
    },{ passive: true });
  }
});
