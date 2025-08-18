// Step 1: Grab all tabs and contents
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

// Step 2: Loop through tabs and listen for clicks
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove "active" from all tabs + contents
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Add "active" to clicked tab
    tab.classList.add("active");

    // Find correct content and activate it
    const target = tab.getAttribute("data-target");
    document.getElementById(target).classList.add("active");
  });
});
