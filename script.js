function addComment() {
    // Get the message of the new Comment
    let comment = document.getElementById("new_comment");
    // If the user has left a comment, display a po-up
    if (comment.value != null && comment.value.trim() != "") {
        console.log("New comment added");
        // Call showPopup here
        showPopup(true);


// Create a new 'comment' element and set it's value to the user's message
var element = document.createElement("div");
element.setAttribute("class", "comment");
element.innerHTML = "\<span\>&#8220;\</span\>" + comment.value + "\<span\>&#8221;\</span\>";
// Add this element to the end of the list of comments
document.getElementById("all_comments").appendChild(element);

// Reset the value of the textarea
comment.value = "";
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible'

    }   else {
        document.getElementById('popup').style.visibility = 'hidden'
    }
}

