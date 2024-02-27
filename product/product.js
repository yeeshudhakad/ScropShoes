function buyProduct() {
    // You can put your buy logic here
    alert("Thank you for your purchase!");
  }
  


    // JavaScript to handle the color selection
    const colorOptions = document.querySelectorAll('.color-option');
    const selectedColor = document.getElementById('selected-color');

    // Add click event listeners to each color option
    colorOptions.forEach(colorOption => {
        colorOption.addEventListener('click', () => {
            // Remove the 'selected-color' class from all color options
            colorOptions.forEach(option => {
                option.classList.remove('selected-color');
            });
            // Add the 'selected-color' class to the clicked color option
            colorOption.classList.add('selected-color');
            // Update the selected color display
            selectedColor.style.backgroundColor = colorOption.style.backgroundColor;
        });
    });