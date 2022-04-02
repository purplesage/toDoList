import { rootDivContent } from './index';
import {format, parseISO } from 'date-fns';
import { projectFilter } from './projectFilter';

//todo: database (this will use localstorage in the future)
//todo: This module works, but its very messy, need to refactor this to increase readability.
let todoDataBase = [];

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

        //todo: delete button element--------------------

        let deleteTodoSvg = document.createElement('div');
            deleteTodoSvg.textContent = "deleteSVG";
            todoDiv.appendChild(deleteTodoSvg);
        
            
            
            deleteTodoSvg.addEventListener('click', () => {
                
                let todoUlLiElements = document.getElementById('todo-ul').getElementsByTagName('li');

                for (let i = 0; i < todoUlLiElements.length; i++) {
                    todoUlLiElements[i].removeAttribute('id');
                    todoUlLiElements[i].setAttribute('id', `${i}`);
                }

                rootDivContent.todoUl.removeChild(todoUlLiElements[todoDiv.getAttribute('id')]);

            })

        //todo: description button element----------------


        let todoDescriptionSvg = document.createElement('div');
            todoDescriptionSvg.textContent = "descriptionSVG";
            todoDiv.appendChild(todoDescriptionSvg);

            todoDescriptionSvg.addEventListener('click', () => {

            })
        //-----------------------------------------------

        let todoDivObject = {
            dueDate: newTodo.dueDate,
            div: todoDiv,
            projectName: newTodo.projectName,
        };

            todoDataBase.push(todoDivObject); //sends todo to the database.
          
            if (todoDivObject.projectName !== "") {

                projectFilter(newTodo)  //check projectFilter.js for more info
                 
            };

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

        }; 

        return {todoDivMaker, eventListener}

};

export {addTaskButtonLogic};

