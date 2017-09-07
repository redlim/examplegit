(function () {
    var element1 = document.getElementById("task1");
    element1.addEventListener("click",function () {
        var labelTask1 = document.getElementById("labelTask1");
        if(element1.checked){
            labelTask1.className += " underline";
        }else{
            labelTask1.classList.remove("underline");
        }
    });
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click",function () {
        // obtener texto
        var newTaskName = document.getElementById("newTask").value;
        // crear elementos
        var newElementList  = document.createElement("li");
        var newInputElement = document.createElement("input");
        newInputElement.type = "checkbox";
        var newLabelElement = document.createElement("label");

        var myList = document.getElementById("myList");
        myList.appendChild(newElementList);
        newElementList.appendChild(newInputElement);
        newElementList.appendChild(newLabelElement);
        // añadir el texto al elemento
        newLabelElement.innerText = newTaskName;
    })
})();
