var comments = []
var carray = 0

function ask() {
    var name = prompt("What is your name?");
    if (name == null || name == "") {
        alert("You must enter a name.");
    }
    else {
        var age = prompt("How old are you?");
        if (age == null || age == "") {
            alert("You must enter an age.");
        }
        else {
            var height = prompt("How tall are you in centimeter?");
            if (height == null || height == "") {
                alert("You must enter a height.");
            }
            else {
            var output = confirm("Your name is " + name + ", you are " + age + " years old, and you are " + height + " cm tall.");
            }
        }
    };
};
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
  };

function hasSwearWord(text) {
    var swearWords = ["fuck", "shit", "asshole", "bitch"]; // list of swear words
    for (var i = 0; i < swearWords.length; i++) {
        if (text.toLowerCase().indexOf(swearWords[i]) !== -1) {
        return true; // if the text contains a swear word, return true
        }
    }
    return false; // if the text does not contain any swear words, return false
}

function Create() {
    var userName = prompt("Please enter your name:");
    if (!userName) {
        userName = "Guest";
    };
    var commentText = prompt("Please enter your comment:");
    if (commentText !== "") {
        var timestamp = new Date().toLocaleString();
        var newDiv = document.createElement('div');
        newDiv.className = 'comment';
        newDiv.innerHTML = '<p>' + commentText + '</p><span class="timestamp">' + 'On ' + '<strong>' +timestamp + '</strong>' + ' by ' + '</span><span class="user">' + userName + '</span>';
        document.body.appendChild(newDiv);
        comments.push("'" + commentText + "' by " + userName + ' at ' + timestamp);
        if (hasSwearWord(commentText) == true) {
            console.log('Comment created by ' + userName + ' at ' + timestamp + ' ,which contains a swear word.' + 'The comment ID is : ' + carray++);
        } else {
            console.log('Comment created by ' + userName + ' at ' + timestamp + '. The comment ID is : ' + carray++);
        };
    } if (commentText == ""){
        var timestamp = new Date().toLocaleString();
        alert("Please do not enter blank comments!");
        console.log(userName + ' tried to create a blank comment at ' + timestamp);
    };
}