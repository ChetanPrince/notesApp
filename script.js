document.getElementById('addNote').addEventListener('click', function() {
    var container = document.getElementById('container');
    var addButton = document.getElementById("addNote");
    
    container.classList.toggle('hide');
    if (container.classList.contains('hide')) {
        addButton.textContent = "+ Add Note";
    } else {
        addButton.textContent = "Remove Note";
    }
});

document.getElementById("submit").addEventListener("click", () => {
    const inputTitle = document.getElementById("title").value;
    const noteData = document.getElementById("textarea").value;

    const tbody = document.getElementById("table").querySelector("tbody");
    let tr = document.createElement("tr");
    
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    
    td1.className = "table-data";
    td2.className = "table-data";
    td3.className = "table-data";
    td4.className = "table-data";
    
    td1.textContent = inputTitle;
    td2.textContent = noteData;
    td3.innerHTML = `<button class="button edit" onclick="editRow(this)">Edit</button>`;
    td4.innerHTML = `<button class="button delete" onclick="deleteRow(this)">Delete</button>`;
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
    
    document.getElementById("title").value = "";
    document.getElementById("textarea").value = "";
});

function editRow(button) {
    let row = button.parentElement.parentElement;  // Correct reference to the row
    document.getElementById("title").value = row.cells[0].textContent;  // Correct cell index for title
    document.getElementById("textarea").value = row.cells[1].textContent;  // Correct cell index for note
    
    // Optionally, you can remove the row to avoid duplicates.
    row.remove();
}

function deleteRow(button) {
    let row = button.parentElement.parentElement;  // Correct reference to the row
    row.remove();
}
