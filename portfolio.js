window.onload = function () {
  const get = id => localStorage.getItem(id);

  document.getElementById("display-name").textContent = get("name");
  document.getElementById("display-email").textContent = get("email");
  document.getElementById("display-phone").textContent = get("phone");

  document.getElementById("display-about").innerHTML = get("about").replace(/\n/g, "<br>");
  document.getElementById("display-education").innerHTML = get("education").replace(/\n/g, "<br>");
  document.getElementById("display-experience").innerHTML = get("experience").replace(/\n/g, "<br>");
  document.getElementById("display-objective").innerHTML = get("objective").replace(/\n/g, "<br>");
  document.getElementById("display-internships").innerHTML = get("internships").replace(/\n/g, "<br>");
  get("skills").split(",").forEach(skill => {
    if (skill.trim()) {
      const li = document.createElement("li");
      li.textContent = skill.trim();
      document.getElementById("display-skills").appendChild(li);
    }
  });

  get("projects").split("\n").forEach(project => {
    if (project.trim()) {
      const li = document.createElement("li");
      li.textContent = project.trim();
      document.getElementById("display-projects").appendChild(li);
    }
  });

  get("achievements").split("\n").forEach(ach => {
    if (ach.trim()) {
      const li = document.createElement("li");
      li.textContent = ach.trim();
      document.getElementById("display-achievements").appendChild(li);
    }
  });

  get("social-links").split(",").forEach(link => {
    if (link.trim()) {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${link.trim()}" target="_blank">${link.trim()}</a>`;
      document.getElementById("display-social-links").appendChild(li);
    }
  });

  document.getElementById("display-gender").textContent = get("gender");
  document.getElementById("display-dob").textContent = get("dob");
  document.getElementById("display-hobbies").textContent = get("hobbies");
  document.getElementById("display-languages").textContent = get("languages");

  const profileImage = get("profileImage");
  if (profileImage) {
    document.getElementById("profileImage").src = profileImage;
  }
  document.getElementById("display-declaration").innerHTML = get("declaration").replace(/\n/g, "<br>");

};