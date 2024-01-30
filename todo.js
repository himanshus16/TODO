document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".add-bar button");
    const inputBox = document.getElementById("input-val");
    const listContainer = document.getElementById("list-container");
    const clearlist = document.getElementById("clearlist");
    const alertmsg=document.getElementById("validation");

    addButton.addEventListener("click", function () {
        const taskText = inputBox.value.trim();   //trim() update the original text in input
        if (taskText === "") {
            // inputBox.parentElement="Plese write task to add!";
            // inputBox.style.color="red";
            // inputBox.style.fontWeight="1000";
            alertmsg.innerHTML="Plese write task to add!";
            alertmsg.style.color="red";
            return;
        }
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        const deleteButton = document.createElement("span");
        deleteButton.innerHTML = "<img src='images.png'>";
        deleteButton.classList.add("delete-button");
        listItem.appendChild(deleteButton);
        listContainer.appendChild(listItem);
        inputBox.value = "";
        alertmsg.innerHTML="";
        saveData();
    });

    listContainer.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
            saveData();
        }
       else{
            event.target.parentElement.parentElement.remove(); 
            saveData();
        } 
    });

    clearlist.addEventListener("click", function (){
        listContainer.innerHTML="";
    })
   
    function saveData() {
        localStorage.setItem("tasks", listContainer.innerHTML);
    }

    function loadData() {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            listContainer.innerHTML = savedTasks;
        }
    }

    loadData();
});
