const mainDiv = document.getElementById("main-div");

document.getElementById("addNote").addEventListener("click", () => {
    // Create the new note container div
    const div = document.createElement("div");
    div.classList.add("container");
    
    // Create and append the heading
    const heading2 = document.createElement("h2");
    heading2.textContent = "Write Note";
    div.appendChild(heading2);
    
    // Set the inner HTML for the note content
    div.innerHTML += `
        <div class="upperBar">
            <img class="saveImg" src="icons8-save-50.png" alt="saveNote"/>
            <img class="deleteImg" src="icons8-delete-24.png" alt="deleteNote"/>
        </div>
        <input type="text" class="data" name="title" id="title" placeholder="Write A Title">
        <textarea name="text" id="textarea" class="data" placeholder="Thoughts"></textarea>`;
    
    // Append the new note to the body
    document.body.appendChild(div);

    // Attach event listeners to the save and delete buttons
    const saveBtn = div.querySelector(".saveImg");
    const deleteBtn = div.querySelector(".deleteImg");

    saveBtn.addEventListener("click", () => {
        alert("saveimg is working");
    });

    deleteBtn.addEventListener("click", () => {
        div.remove();
    });
});