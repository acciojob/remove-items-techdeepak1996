document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("colorSelect");
    const button = document.querySelector('input[type="button"]');

    button.addEventListener("click", function() {
        const selectedIndex = selectElement.selectedIndex;
        if (selectedIndex !== -1) {
            selectElement.remove(selectedIndex);
        }
    });
});
