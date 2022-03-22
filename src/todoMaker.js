const makeTodo = () => {   //todo pending: need to algeabrize this.
    let todo = {
        title: inputList[0].value,
        description: inputList[1].value,
        dueDate: inputList[2].value,
        project: inputList[3].value,
    }

    return todo;
}


const todoDivMaker = () => {
    let newTodo = makeTodo();

    let todoDiv = document.createElement('li');

    let titleP = document.createElement('p');
    titleP.textContent = `${newTodo.title}`;
    todoDiv.appendChild(titleP);

    let dateP = document.createElement('p');
    dateP.textContent = `${newTodo.dueDate}`;
    todoDiv.appendChild(dateP);

    homeContent.todoUl.appendChild(todoDiv);
}

homeContent.svgAddButton.addEventListener('click', () =>{
    todoDivMaker();
    homeContent.ghostDiv.style.display = "none";
    homeContent.svgButtonsDiv.style.display = "none";
})