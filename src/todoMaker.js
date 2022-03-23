const makeTodo = (contentInstance) => { 
    let todo = {
        title: contentInstance.inputList[0].value,
        description: contentInstance.inputList[1].value,
        dueDate: contentInstance.inputList[2].value,
        project: contentInstance.inputList[3].value,
    }

    return todo;
}

const todoDivMaker = (contentInstance) => {
    let newTodo = makeTodo(contentInstance);

    let todoDiv = document.createElement('li');

    let titleP = document.createElement('p');
    titleP.textContent = `${newTodo.title}`;
    todoDiv.appendChild(titleP);

    let dateP = document.createElement('p');
    dateP.textContent = `${newTodo.dueDate}`;
    todoDiv.appendChild(dateP);

    contentInstance.addContent(todoDiv);
}

const divMakerEventListener = (contentInstance) => {

    contentInstance.svgAddButton.addEventListener('click', () =>{
        todoDivMaker(contentInstance);
        contentInstance.ghostDiv.style.display = "none";
        contentInstance.svgButtonsDiv.style.display = "none";
    });
}

export { divMakerEventListener };