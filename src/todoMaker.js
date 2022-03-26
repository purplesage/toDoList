import {format, isThisWeek, parseISO } from 'date-fns';
import { homeContent } from './home';
import { todayContent } from './today';
import { weekContent } from './week';

//todo: database (this will use localstorage in the future)
let todoDataBase = [];
//--------------------------------------------------------

const makeTodo = (contentInstance) => { 
    let todo = {
        divMade: false,
        dueDate: format(new Date(parseISO(contentInstance.inputList[2].value)), "MM/dd/yyyy"),
        title: contentInstance.inputList[0].value,
        description: contentInstance.inputList[1].value,
        projectName: contentInstance.inputList[3].value,
    };

    return todo;
};

const todoDivMaker = (contentInstance) => {
    let newTodo = makeTodo(contentInstance);
    
    todoDataBase.push(newTodo); //sends todo to the database.
    
    let todoDiv = document.createElement('li');

    let titleP = document.createElement('p');
        titleP.textContent = `${newTodo.title}`;
        todoDiv.appendChild(titleP);

    let dateP = document.createElement('p');
        dateP.textContent = `${newTodo.dueDate}`;
        todoDiv.appendChild(dateP);

return {todoDiv, newTodo};
};

const divMakerEventListener = (contentInstance) => {

    let today = format(new Date(), "MM/dd/yyyy");

    contentInstance.svgAddButton.addEventListener('click', () =>{

        homeContent.addContent(todoDivMaker(contentInstance).todoDiv);

        if (todoDivMaker(contentInstance).newTodo.dueDate === today){
            todayContent.addContent(todoDivMaker(contentInstance).todoDiv);
        };

        if (isThisWeek(new Date(todoDivMaker(contentInstance).newTodo.dueDate)) === true) {
            weekContent.addContent(todoDivMaker(contentInstance).todoDiv);
        };

        contentInstance.ghostDiv.style.display = "none";
        contentInstance.svgButtonsDiv.style.display = "none";
    });
};



export {divMakerEventListener};



//!----------will be used for onload function----------------------
            /* for (let i = 0; i < todoDataBase.length; i++) {

        if (todoDataBase[i].divMade === false) {

            todoDiv = document.createElement('li');

            let titleP = document.createElement('p');
                titleP.textContent = `${todoDataBase[i].title}`;
                todoDiv.appendChild(titleP);
        
            let dateP = document.createElement('p');
                dateP.textContent = `${todoDataBase[i].dueDate}`;
                todoDiv.appendChild(dateP);
            
            todoDataBase[i].divMade = true;

        }else{
            continue;
        };
    } */