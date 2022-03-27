import {format, isThisWeek, parseISO } from 'date-fns';
import { homeContent } from './home';
import { todayContent } from './today';
import { weekContent } from './week';

//todo: database (this will use localstorage in the future)
//todo: This module works, but its very messy, need to refactor this to increase readability.
let todoDataBase = [];
//--------------------------------------------------------
const addTaskButtonLogic = (contentInstance) => {return null};
const makeTodo = (contentInstance) => { 
    let todo = {
        divMade: false,
        dueDate: new Date(parseISO(contentInstance.inputList[2].value)),
        title: contentInstance.inputList[0].value,
        description: contentInstance.inputList[1].value,
        projectName: contentInstance.inputList[3].value,
    };

    /* console.log(isThisWeek(format(todo.dueDate, "MM/dd/yyyy"))); */

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
        dateP.textContent = `${format(newTodo.dueDate, "MM/dd/yyyy")}`;
        todoDiv.appendChild(dateP);

return {todoDiv, newTodo};

};

const divMakerEventListener = (contentInstance) => {

    let today = format(new Date(), "MM/dd/yyyy");

    contentInstance.svgAddButton.addEventListener('click', () =>{


        //* content distribution-----------------------------
        homeContent.addContent(todoDivMaker(contentInstance).todoDiv);

        //this line is confusing, need to change it, make it more readable.

        if (format(todoDivMaker(contentInstance).newTodo.dueDate, "MM/dd/yyyy") === today){
            todayContent.addContent(todoDivMaker(contentInstance).todoDiv);
        };

        //? note : isThisWeek() bugs out if given a formated new Date() object, so i needed to convert back the formated date into a new Date and it worked for some reason. I have no idea why. But it works.

        //todo: sundays dont seem to count as 'this week', need to fix that.

        if (isThisWeek(new Date(todoDivMaker(contentInstance).newTodo.dueDate)) === true) {
            weekContent.addContent(todoDivMaker(contentInstance).todoDiv);
        };
        //*-----------------------------------------------------

        contentInstance.ghostDiv.style.display = "none";
        contentInstance.svgButtonsDiv.style.display = "none";
    });
};

export {divMakerEventListener};



//!-dont delete this, im refactoring it!-----------------

/* const addTaskButtonLogic = (contentInstance) => {return null};
const makeTodo = (contentInstance) => { 
    let todo = {
        divMade: false,
        dueDate: new Date(parseISO(contentInstance.inputList[2].value)),
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
        dateP.textContent = `${format(newTodo.dueDate, "MM/dd/yyyy")}`;
        todoDiv.appendChild(dateP);

return {todoDiv, newTodo};

};

const divMakerEventListener = (contentInstance) => {

    let today = format(new Date(), "MM/dd/yyyy");

    contentInstance.svgAddButton.addEventListener('click', () =>{


        //* content distribution-----------------------------
        homeContent.addContent(todoDivMaker(contentInstance).todoDiv);

        //this line is confusing, need to change it, make it more readable.

        if (format(todoDivMaker(contentInstance).newTodo.dueDate, "MM/dd/yyyy") === today){
            todayContent.addContent(todoDivMaker(contentInstance).todoDiv);
        };

        //? note : isThisWeek() bugs out if given a formated new Date() object, so i needed to convert back the formated date into a new Date and it worked for some reason. I have no idea why. But it works.

        //todo: sundays dont seem to count as 'this week', need to fix that.

        if (isThisWeek(new Date(todoDivMaker(contentInstance).newTodo.dueDate)) === true) {
            weekContent.addContent(todoDivMaker(contentInstance).todoDiv);
        };
        //*-----------------------------------------------------

        contentInstance.ghostDiv.style.display = "none";
        contentInstance.svgButtonsDiv.style.display = "none";
    });
};

export {divMakerEventListener};
 */




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