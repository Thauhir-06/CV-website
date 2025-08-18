// ===============================
// TAB MENU JAVASCRIPT
// ===============================

// "const" creates a constant variable (it cannot be reassigned to a new value).
// "document" represents the whole HTML page.
// "querySelectorAll" selects *all* elements that match the CSS selector.
// ".tab" means we are selecting elements with the class="tab".
// So → tabs = all tab buttons in the HTML.
const tabs = document.querySelectorAll(".tab");

// Same idea, but now we grab all the content sections.
// ".tab-content" is the class for each section (like Welcome, About, Contact).
const tabContents = document.querySelectorAll(".tab-content");

// "forEach" is like a loop: it runs the function once for each element in tabs.
// "tab" is a variable name for the current element in the loop.
tabs.forEach(tab => {

  // "addEventListener" waits for something to happen (like a click).
  // Here → when a tab is clicked, run the function inside.
  tab.addEventListener("click", () => {

    // This loop removes "active" class from ALL tabs.
    // ".classList" lets us look at or change an element’s classes.
    // ".remove()" deletes a class.
    tabs.forEach(t => t.classList.remove("active"));

    // This loop removes "active" from all content sections too.
    // This hides them all before we show the right one.
    tabContents.forEach(c => c.classList.remove("active"));

    // Now we add "active" to the tab that was clicked.
    // "tab.classList.add()" highlights it as the current tab.
    tab.classList.add("active");

    // "getAttribute" gets the value of an attribute in HTML.
    // Example: <div class="tab" data-target="about"> → data-target = "about"
    const target = tab.getAttribute("data-target");

    // "document.getElementById(target)" finds the section with that ID.
    // ".classList.add('active')" makes it visible.
    document.getElementById(target).classList.add("active");
  });
});
