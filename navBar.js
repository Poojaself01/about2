 //-------------------------------------------------
  const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
//----------js for login and sign up page----------
 const loginOverlay = document.getElementById('loginOverlay');
    const signupOverlay = document.getElementById('signupOverlay');

    // Open popups
    document.getElementById('openLogin').onclick = () => {
      loginOverlay.style.display = 'flex';
    };
    document.getElementById('openSignup').onclick = () => {
      signupOverlay.style.display = 'flex';
    };
//----------------------------------------------------------------------
// Open popups
    document.getElementById('openLogin1').onclick = () => {
      loginOverlay.style.display = 'flex';
    };
    document.getElementById('openSignup1').onclick = () => {
      signupOverlay.style.display = 'flex';
    };
//----------------------------------------------------------------------
    // Close popup
    function closePopup(id) {
      document.getElementById(id).style.display = 'none';
    }

    // Switch between login and signup
    document.getElementById('switchToSignup').onclick = () => {
      loginOverlay.style.display = 'none';
      signupOverlay.style.display = 'flex';
    };

    document.getElementById('switchToLogin').onclick = () => {
      signupOverlay.style.display = 'none';
      loginOverlay.style.display = 'flex';
    };

    // Close popup when clicking outside the box
    window.onclick = (event) => {
      if (event.target === loginOverlay) loginOverlay.style.display = 'none';
      if (event.target === signupOverlay) signupOverlay.style.display = 'none';
    };
    //-----------------------------------done----------------------------------------
    //-------------------------------- LOGIN / SIGNUP WITH LOCAL STORAGE --------------------------------//

// ✅ SIGN UP - Save user in LocalStorage
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = this.username.value.trim();
  const email = this.email.value.trim();
  const password = this.password.value.trim();
  const confirmPass = this.confirmPassword.value.trim();

  if (password !== confirmPass) {
    alert("❌ Passwords do not match!");
    return;
  }

  localStorage.setItem("edu_user", JSON.stringify({ username, email, password }));
  localStorage.setItem("edu_logged_in", "true");

  alert("✅ Account created successfully!");
  window.location.href = "courses.html";
});


// ✅ LOGIN - verify stored user
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.loginEmail.value.trim();
  const password = this.loginPassword.value.trim();

  const user = JSON.parse(localStorage.getItem("edu_user"));

  if (!user || user.email !== email || user.password !== password) {
    alert("❌ Incorrect email or password!");
    return;
  }

  localStorage.setItem("edu_logged_in", "true");
  alert(`✅ Welcome back ${user.username}!`);
  window.location.href = "courses.html";
});


// ✅ Show Logged-in UI on Navbar
function updateNavbar() {
  const loggedIn = localStorage.getItem("edu_logged_in") === "true";
  const user = JSON.parse(localStorage.getItem("edu_user"));

  const authSection = document.getElementById("authSection");
  const userSection = document.getElementById("userSection");
  const displayUsername = document.getElementById("displayUsername");

  if (loggedIn && user) {
    authSection.style.display = "none";
    userSection.style.display = "flex";
    displayUsername.textContent = `👋 Hi, ${user.username}`;
  } else {
    authSection.style.display = "flex";
    userSection.style.display = "none";
  }
}
updateNavbar();


// ✅ Logout
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  localStorage.removeItem("edu_logged_in");
  alert("🔓 You have been logged out!");
  window.location.reload();
});
