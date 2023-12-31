// Add an event listener to a file input element
document.getElementById('file-input').addEventListener('change', function() {
    // Get the selected file
    let file = this.files[0];

    // Create a new FileReader
    let reader = new FileReader();

    // Add an event listener for when the file is loaded
    reader.onload = function(event) {
        // Parse the data from the file
        let data = JSON.parse(event.target.result);

        // Log the data to the console
        console.log(data);
    };

    // Read the file as text
    reader.readAsText(file);
});