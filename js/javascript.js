  // Get references to DOM elements
  const ctaBtn = document.querySelector('.cta');
  const loginForm = document.getElementById('loginForm');
  const signupBtn = document.getElementById('signupBtn');
  const joinBtn = document.getElementById('joinBtn');

  // Toggle button functionality
  let check = 0;

  ctaBtn.addEventListener('click', function () {
    const textElement = this.nextElementSibling; // .text div
    const loginTextElement = this.parentElement; // .login-text div

    // Toggle show-hide on text
    textElement.classList.toggle('show-hide');

    // Toggle expand on login-text
    loginTextElement.classList.toggle('expand');

    // Change icon
    if (check === 0) {
      this.innerHTML = '<i class="fas fa-chevron-up"></i>';
      check++;
    } else {
      this.innerHTML = '<i class="fas fa-chevron-down"></i>';
      check = 0;
    }
  });

  // ✅ Form Validation Logic
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // 1. Prevent default submission

    // 2. Get trimmed values
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();

    // 3. Flag
    let isValid = true;

    // 4. Validate username
    const usernameError = document.getElementById('username-error');
    if (username === "") {
      usernameError.textContent = "Username is required";
      usernameError.style.display = "block";
      isValid = false;
    } else {
      usernameError.style.display = "none";
    }

    // 5. Validate password
    const passwordError = document.getElementById('password-error');
    if (password === "") {
      passwordError.textContent = "Password is required";
      passwordError.style.display = "block";
      isValid = false;
    } else if (password.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters";
      passwordError.style.display = "block";
      isValid = false;
    } else {
      passwordError.style.display = "none";
    }

    // 6. If valid
    if (isValid) {
      alert(`Login successful! Welcome, ${username}.`);
      loginForm.reset();
    }
  });

  // ✅ 1. Sign Up Button
  signupBtn.addEventListener('click', function () {
    alert("Redirecting to sign up page...");
  });

  // ✅ 2. Join the Community Button
  joinBtn.addEventListener('click', function () {
    if (check === 0) {
      // Trigger CTA click to reveal the form
      ctaBtn.click();
    }
    alert("Join our creative community!");
  });