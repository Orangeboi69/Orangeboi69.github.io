function ask() {
    var name = prompt("What is your name?");
    var age = prompt("How old are you?");
    var height = prompt("How tall are you in centimeter?");
    var output = confirm("Your name is " + name + ", you are " + age + " years old, and you are " + height + " cm tall.");
}
function downloadFile() {
    // Create a temporary link
    const link = document.createElement('a');
    link.href = '/Game.zip';
    link.download = 'Game.zip';
    document.body.appendChild(link);
  
    // Trigger the download
    link.click();
  
    // Clean up the link
    document.body.removeChild(link);
  }