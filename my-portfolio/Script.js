function toggleDrawer(skillId) {
    const skillDetailElement = document.getElementById(skillId);
    const skillElement = skillDetailElement.parentElement;
  
    // Close any open drawer
    document.querySelectorAll('.skill-details').forEach(detail => {
      if (detail !== skillDetailElement) {
        detail.style.maxHeight = '0'; // Close other drawers
        detail.parentElement.classList.remove("open");
      }
    });
  
    // Toggle the clicked drawer
    if (skillElement.classList.contains("open")) {
      skillDetailElement.style.maxHeight = '0';
      skillElement.classList.remove("open");
    } else {
      skillDetailElement.style.maxHeight = skillDetailElement.scrollHeight + "px"; // Expand to content height
      skillElement.classList.add("open");
    }
  }
  