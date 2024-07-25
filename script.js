const mainDiv = document.getElementById("main-div");
document.getElementById("addNote").addEventListener("click", ()=>{
    const div = document.createElement("div");
    const heading2 = document.createElement("h2");
    heading2.textContent ="Write Note";
    div.appendChild(heading2);
    div.classList.add("container");
    div.innerHTML = `<div class="upperBar"><img src="icons8-save-50.png" alt="saveNote"><img src="icons8-delete-24.png" alt="deleteNote"></div> 
    <input type="text" class="data" name="title" id="title" placeholder="Write A Title">
    <textarea name="text" id="textarea" class="data" placeholder="Thoughts"></textarea>`;
    document.body.appendChild(div);
   

})













// document.getElementById('addNote').addEventListener('click', function() {
//     var container = document.getElementById('container');
//     var addButton = document.getElementById("addNote");
    
//     container.classList.toggle('hide');
//     if (container.classList.contains('hide')) {
//         addButton.textContent = "+ Add Note";
//     } else {
//         addButton.textContent = "Remove Note";
//     }
// });
// document.getElementById("submit").addEventListener("click", ()=>{
//     const inputTitle = document.getElementById("title").value;
//     const noteData = document.getElementById("textarea").value;

//     const tbody = document.getElementById("table").querySelector("tbody");
//    let tr = document.createElement("tr");
//    let td1 = document.createElement("td");
//    let td2 = document.createElement("td");
//    let td3 = document.createElement("td");
//    let td4 =document.createElement("td");
//    td1.className ="table-data";
//    td2.className ="table-data";
//    td3.className = "table-data";
//    td4.className ="table-data";
   
//    td1.textContent = inputTitle;
//    td2.textContent = noteData;
//    td3.innerHTML =`<button id="edit" onClick="edit(this)">Edit</button>`
//    td4.innerHTML =`<button id="delete" onClick="deleteRow(this)">Delete</button>`

//    tr.appendChild(td1);
//    tr.appendChild(td2);
//    tr.appendChild(td3);
//    tr.appendChild(td4);
//    tbody.appendChild(tr);
//    document.getElementById("title").value = "";
//     document.getElementById("textarea").value = "";
// });

// function edit(button){
//     let row = button.parentElement.parentElement;
//     document.getElementById("title").value = row.cells[0].textContent;
//      document.getElementById("textarea").value = row.cells[1].textContent; 
   
//      row.remove();

// }
// function deleteRow(td) {
//     let row = td.parentElement.parentElement;  // Correct reference to the row
//     row.remove();
// }