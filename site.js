
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