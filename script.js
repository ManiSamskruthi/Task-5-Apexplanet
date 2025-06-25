function generatePortfolio() {
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");

  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  let valid = true;

  // Reset error messages
  emailError.textContent = "";
  phoneError.textContent = "";

  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Please enter a valid 10-digit phone number.";
    valid = false;
  }

  if (!valid) return;

  const fields = [
    "name", "email", "phone", "about", "education", "skills", "projects",
    "experience", "objective", "internships", "achievements", "gender",
    "dob", "hobbies", "languages", "social-links", "declaration", "theme-color"
  ];

  fields.forEach(id => {
    localStorage.setItem(id, document.getElementById(id).value.trim());
  });

  const profilePic = document.getElementById("profile-pic").files[0];
  if (profilePic) {
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("profileImage", reader.result);
      window.location.href = "portfolio.html";
    };
    reader.readAsDataURL(profilePic);
  } else {
    localStorage.removeItem("profileImage");
    window.location.href = "portfolio.html";
  }
}