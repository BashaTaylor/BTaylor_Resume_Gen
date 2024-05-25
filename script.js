function listSkills() {
    // Get all elements with class 'skills'
    const skillsElements = document.querySelectorAll('.skills');

    // Create an empty array to store skills
    let skills = [];

    // Iterate through each element with class 'skills'
    skillsElements.forEach(skillElement => {
        // Get the text content of the skill element
        const skillText = skillElement.textContent.trim();
        // If the skill text is not empty, push it to the skills array
        if (skillText !== "") {
            skills.push(skillText);
        }
    });

    // Get the skillsList div
    const skillsListDiv = document.getElementById('skillsList');

    // Create a new unordered list
    const ul = document.createElement('ul');

    // Add each skill as a list item to the unordered list
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        ul.appendChild(li);
    });

    // Append the unordered list to the skillsList div
    skillsListDiv.appendChild(ul);
} 



function sortSkills() {
    // Get the skills list element
    var skillsList = document.getElementById('skillsList');

    // Get all the list items inside the skills list
    var skills = skillsList.getElementsByTagName('li');

    // Convert the HTMLCollection to an array for easier sorting
    skills = Array.from(skills);

    // Sort the skills alphabetically
    skills.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });

    // Clear the skills list
    skillsList.innerHTML = '';

    // Append the sorted skills back to the skills list
    skills.forEach(function(skill) {
        skillsList.appendChild(skill);
    });
}


function showAndSortSkills() {
    listSkills(); // Call the function to list skills
    sortSkills(); // Call the function to sort skills
}

function clearSkillsList() {
    // Get the skillsList div
    const skillsListDiv = document.getElementById('skillsList');

    // Remove all children of the skillsList div
    while (skillsListDiv.firstChild) {
        skillsListDiv.removeChild(skillsListDiv.firstChild);
    }

}








// function showPopup() {
//     var popup = document.getElementById("To print in correct scale, go to: More Settings, change Scale from default to Custom, and select 45%");
//     popup.style.visibility = "visible";
// }

// function printPage() {
//     window.print();
// }





// function addComment() {
//     // Get the message of the new Comment
//     let comment = document.getElementById("new_comment");
//     // If the user has left a comment, display a po-up
//     if (comment.value != null && comment.value.trim() != "") {
//         console.log("New comment added");
//         // Call showPopup here
//         showPopup(true);


//         // Create a new 'comment' element and set it's value to the user's message
//         var element = document.createElement("div");
//         element.setAttribute("class", "comment");
//         element.innerHTML = "\<span\>&#8220;\</span\>" + comment.value + "\<span\>&#8221;\</span\>";
//         // Add this element to the end of the list of comments
//         document.getElementById("all_comments").appendChild(element);

//         // Reset the value of the textarea
//         comment.value = "";
//     }
// }

// function showPopup(bool) {
//     if (bool) {
//         document.getElementById('popup').style.visibility = 'visible'

//     } else {
//         document.getElementById('popup').style.visibility = 'hidden'
//     }
// }


