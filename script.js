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