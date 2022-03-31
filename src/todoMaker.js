
import {format, parseISO } from 'date-fns';

//todo: database (this will use localstorage in the future)
//todo: This module works, but its very messy, need to refactor this to increase readability.
let todoDataBase = [];
let addedProjectsDataBase = [];

export {todoDataBase};
//--------------------------------------------------------
const addTaskButtonLogic = (contentInstance) => {

    const makeTodo = () => { 
        let todo = {
            divMade: false,
            dueDate: new Date(parseISO(contentInstance.inputList[2].value)),
            title: contentInstance.inputList[0].value,
            description: contentInstance.inputList[1].value,
            projectName: contentInstance.inputList[3].value,
            hasProject: false,
        };
    
        return todo;
    };

    const todoDivMaker = () => {
        let newTodo = makeTodo(contentInstance);
        
        
        let todoDiv = document.createElement('li');
    
        let titleP = document.createElement('p');
            titleP.textContent = `${newTodo.title}`;
            todoDiv.appendChild(titleP);
    
        let dateP = document.createElement('p');
            dateP.textContent = `${format(newTodo.dueDate, "MM/dd/yyyy")}`;
            todoDiv.appendChild(dateP);

        /* if (newTodo.projectName !== "") {
                let projectTabs = document.getElementById('project-list');
                
                let newNavigationTab = document.createElement('li');
                newNavigationTab.textContent = `${newTodo.projectName}`;
                projectTabs.appendChild(newNavigationTab);
                 
            } */

            let todoDivObject = {
                dueDate: newTodo.dueDate,
                div: todoDiv,
                projectName: newTodo.projectName,
            };

            todoDataBase.push(todoDivObject); //sends todo to the database.

            return todoDivObject;
        };

        const eventListener = () => {

            contentInstance.svgAddButton.addEventListener('click', () => {

                contentInstance.addContent(todoDivMaker().div);

                for (let i = 0; i < contentInstance.inputList.length; i++) {
                    contentInstance.inputList[i].value = "";
                }

                contentInstance.ghostDiv.style.display = "none";
                contentInstance.svgButtonsDiv.style.display = "none";
    
            });

        } 

        return {todoDivMaker, eventListener}

};

export {addTaskButtonLogic};

