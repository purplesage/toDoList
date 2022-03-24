import {isValid, format} from 'date-fns';
let todoDataBase = [];

const makeTodo = (contentInstance) => { 
    let todo = {
        divMade: false,
        dueDate: format(new Date(contentInstance.inputList[2].value), "dd/MM/yyyy"),
        title: contentInstance.inputList[0].value,
        description: contentInstance.inputList[1].value,
        projectName: contentInstance.inputList[3].value,
    };

    return todo;
};

const todoDivMaker = (contentInstance) => {
    let newTodo = makeTodo(contentInstance);
    let todoDiv;
    todoDataBase.push(newTodo); //sends todo to the database.

    for (let i = 0; i < todoDataBase.length; i++) {

        if (todoDataBase[i].divMade === false) {
            todoDiv = document.createElement('li');

            let titleP = document.createElement('p');
            titleP.textContent = `${todoDataBase[i].title}`;
            todoDiv.appendChild(titleP);
        
            let dateP = document.createElement('p');
            dateP.textContent = `${todoDataBase[i].dueDate}`;
            todoDiv.appendChild(dateP);

            todoDataBase[i].divMade = true;

            //distribuitor goes here
            contentInstance.addContent(todoDiv); 

        }else{
            continue;
        };
    }
    
}

const divMakerEventListener = (contentInstance) => {

    contentInstance.svgAddButton.addEventListener('click', () =>{
        todoDivMaker(contentInstance);
        contentInstance.ghostDiv.style.display = "none";
        contentInstance.svgButtonsDiv.style.display = "none";
    });
}

/* const todoDivDistribuitor = (todoObject) => {

    if todoObject.dueDate = //some stuff
}; */

console.log(isValid(new Date("2022-03-17")));

export { divMakerEventListener };