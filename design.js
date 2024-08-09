document.addEventListener("DOMContentLoaded", () => {
    const menuSections = {
        Biryani: document.getElementById("Biryani"),
        Salad: document.getElementById("Salad"),
        Beverages: document.getElementById("Beverages"),
    };

    const menuButtons = document.querySelectorAll("#drop2 li a");

    menuButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const sectionId = button.getAttribute("data-section");

            for (let section in menuSections) {
                if (section === sectionId) {
                    menuSections[section].style.display = "block";
                } else {
                    menuSections[section].style.display = "none";
                }
            }
        });
    });

    // Initially show the Biryani section and hide the others
    menuSections.Biryani.style.display = "block";
    menuSections.Salad.style.display = "none";
    menuSections.Beverages.style.display = "none";
});
