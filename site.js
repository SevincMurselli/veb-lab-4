
function toggleSection(id) {
    const el = document.getElementById(id);
    el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
  }
  
  function addEducation() {
    const input = document.getElementById("edu-input");
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.textContent = input.value;
      document.getElementById("education-list").appendChild(li);
      input.value = "";
    }
  }
  
  function addExperience() {
    const input = document.getElementById("exp-input");
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.textContent = input.value;
      document.getElementById("experience-list").appendChild(li);
      input.value = "";
    }
  }
  
  function addSkill() {
    const input = document.getElementById("skill-input");
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.textContent = input.value;
      document.getElementById("skills-list").appendChild(li);
      input.value = "";
    }
  }
  const form = document.getElementById("myForm");
    window.onload = function () {
      document.getElementById("name").value = localStorage.getItem("name") || "";
      document.getElementById("email").value = localStorage.getItem("email") || "";
      document.getElementById("date").value = localStorage.getItem("date") || "";
      document.getElementById("description").value = localStorage.getItem("description") || "";
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;
      const name = document.getElementById("name").value.trim();
      if (name.length < 3) {
        document.getElementById("nameError").textContent = "Ad minimum 3 simvol olmalıdır.";
        isValid = false;
      } else {
        document.getElementById("nameError").textContent = "";
      }
      const email = document.getElementById("email").value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Etibarlı email daxil edin.";
        isValid = false;
      } else {
        document.getElementById("emailError").textContent = "";
      }
      const date = document.getElementById("date").value;
      if (!date) {
        document.getElementById("dateError").textContent = "Zəhmət olmasa tarix daxil edin.";
        isValid = false;
      } else {
        document.getElementById("dateError").textContent = "";
      }
      const desc = document.getElementById("description").value.trim();
      if (desc.length < 10) {
        document.getElementById("descError").textContent = "Təsvir minimum 10 simvol olmalıdır.";
        isValid = false;
      } else {
        document.getElementById("descError").textContent = "";
      }

      if (isValid) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("date", date);
        localStorage.setItem("description", desc);
        alert("Uğurla yadda saxlanıldı!");
      }
    });
