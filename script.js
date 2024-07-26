
const mainDiv = document.getElementById("main-div");
document.getElementById("addNote").addEventListener("click", () => {
    const div = document.createElement("div");
    const heading2 = document.createElement("h2");
    heading2.textContent = "Write Note";
    div.appendChild(heading2);
    div.classList.add("container");
    div.innerHTML += `
        <div class="upperBar">
            <img class="saveImg" src="icons8-save-50.png" alt="saveNote"/>
            <img class="deleteImg" src="icons8-delete-24.png" alt="deleteNote"/>
        </div> 
        <input type="text" class="data" name="title" id="title" placeholder="Write A Title">
        <textarea name="text" id="textarea" class="data" placeholder="Thoughts"></textarea>`;
    document.body.appendChild(div);

    const saveBtn = div.querySelector(".saveImg");
    const deleteBtn = div.querySelector(".deleteImg");

    saveBtn.addEventListener("click", () => {
      const titleInput = document.querySelector("#title").value;
	   const text = document.querySelector("#textarea").value;
	   const id = Date.now();
	   const note = {id, titleInput, text};
	   localStorage.setItem(`note-${id}`, JSON.stringify(note));
	   alert("Note Saved");    });

    deleteBtn.addEventListener("click", () => {
		const titleInput = document.getElementById("title").value;
		const text = document.getElementById("textarea").value;
		
		for(let i=0; i<localStorage.length; i++){
			const key = localStorage.key(i);
			if(key.startsWith("note-")){
				const note = JSON.parse(localStorage.getItem(key));
				if(note.titleInput===titleInput && note.text ===text){
					localStorage.removeItem(key);
		break;}}}
		div.remove();
    });
});


document.addEventListener("DOMContentLoaded",()=>{
for(let i=0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    if(key.startsWith("note-")){
        const note = JSON.parse(localStorage.getItem(key));

        const div = document.createElement("div");
        div.classList.add("container");
        div.innerHTML = `
        <h2>Write Note</h2>
        <div class="upperBar">
            <img class="saveImg" src="icons8-save-50.png" alt="saveNote"/>
            <img class="deleteImg" src="icons8-delete-24.png" alt="deleteNote"/>
        </div> 
        <input type="text" class="data" name="title" placeholder="Write A Title" value="${note.titleInput}">
        <textarea name="text" class="data" placeholder="Thoughts">${note.text}</textarea>`;
        document.body.appendChild(div);

//  document to reattach eventListener to recreated element

const saveBtn = div.querySelector(".saveImg"); const deleteBtn = div.querySelector(".deleteImg");

saveBtn.addEventListener("click", ()=>{
    const titleInput = div.querySelector("input[name='title']").value; 
    const text = div.querySelector("textarea[name='text']").value
    const id = note.id;
    const updatedNote = {id, titleInput, text};

    localStorage.setItem(`note-${id}`,JSON.stringify(updatedNote));
    alert("Note Updated")
});
deleteBtn.addEventListener("click", ()=>{
    localStorage.removeItem(`note-${note.id}`);
    div.remove();
});

    }
}

});

