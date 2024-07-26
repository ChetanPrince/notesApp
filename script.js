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
        <input type="text" class="data" name="title" placeholder="Write A Title">
        <textarea name="text" class="data" placeholder="Thoughts"></textarea>`;
    
    // Append the new note to the body
    document.body.appendChild(div);

    // Attach event listeners to the save and delete buttons
    const saveBtn = div.querySelector(".saveImg");
    const deleteBtn = div.querySelector(".deleteImg");

    saveBtn.addEventListener("click", () => {
        const titleNote = div.querySelector("input[name='title']").value;
        const details = div.querySelector("textarea[name='text']").value;
        const id = Date.now();

        const note = { id, titleNote, details };
        localStorage.setItem(`note-${id}`, JSON.stringify(note));
        alert("Note Saved!");
    });

    deleteBtn.addEventListener("click", () => {
        const title = div.querySelector("input[name='title']").value;
        const text = div.querySelector("textarea[name='text']").value;
    
        // Find the note ID in local storage and remove it
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("note-")) {
                const note = JSON.parse(localStorage.getItem(key));
                if (note.titleNote === title && note.details === text) {
                    localStorage.removeItem(key);
                    break;
                }
            }
        }
    
        div.remove();
    });
});

// Retrieving notes on page reload
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("note-")) {
            const note = JSON.parse(localStorage.getItem(key));

            // Create note elements and append to the body
            const div = document.createElement("div");
            div.classList.add("container");
            div.innerHTML = `
                <h2>Write Note</h2>
                <div class="upperBar">
                    <img class="saveImg" src="icons8-save-50.png" alt="saveNote"/>
                    <img class="deleteImg" src="icons8-delete-24.png" alt="deleteNote"/>
                </div>
                <input type="text" class="data" name="title" placeholder="Write A Title" value="${note.titleNote}">
                <textarea name="text" class="data" placeholder="Thoughts">${note.details}</textarea>`;

            document.body.appendChild(div);

            // Re-attach event listeners to the newly created note elements
            const saveBtn = div.querySelector(".saveImg");
            const deleteBtn = div.querySelector(".deleteImg");

            saveBtn.addEventListener("click", () => {
                const titleNote = div.querySelector("input[name='title']").value;
                const details = div.querySelector("textarea[name='text']").value;
                const id = note.id;

                const updatedNote = { id, titleNote, details };
                localStorage.setItem(`note-${id}`, JSON.stringify(updatedNote));
                alert("Note Updated!");
            });

            deleteBtn.addEventListener("click", () => {
                localStorage.removeItem(`note-${note.id}`);
                div.remove();
            });
        }
    }
});
