/* import { rootDivContent } from './index';
import {format, parseISO } from 'date-fns';
import { projectFilter } from './projectFilter';
 */
//todo: database (this will use localstorage in the future)
//todo: This module works, but its very messy, need to refactor this to increase readability.
let todoDataBase = [];

export {todoDataBase};
//--------------------------------------------------------
const addTaskButtonLogic = (contentInstance) => {

    const makeTodo = () => { 
        
        let todo = {
            title: contentInstance.inputList[0].value,
            description: contentInstance.inputList[1].value,
            dueDate: new Date(parseISO(contentInstance.inputList[2].value)),
            projectName: contentInstance.inputList[3].value,
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

        //* delete button element--------------------

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

                // deletes 'todo' object from database.

                todoDataBase.splice(todoDataBase.indexOf(todoDivObject), 1);


            })

        //todo: description button element------(currently under work)----------

        let todoDescriptionSvg = document.createElement('div');
            todoDescriptionSvg.textContent = "descriptionSVG";
            todoDiv.appendChild(todoDescriptionSvg);

        let mainDiv = document.getElementById('todo-ul');

        
        let descriptionDiv = document.createElement('div');
        
        let descriptionXbutton = document.createElement('button');
        descriptionXbutton.textContent = 'X';
        

        descriptionXbutton.addEventListener('click', () => {

            descriptionDiv.style.display = "none";
            descriptionDiv.innerHTML = "";
            
        });


            todoDescriptionSvg.addEventListener('click', () => {
                
                    descriptionDiv.style.display = "flex";
                    descriptionDiv.classList = 'description-element-div';

                    for (let key in newTodo) {
                        let descriptionElement = document.createElement('input');
                        
                        if (key === 'title') {
                            descriptionElement.setAttribute('type', 'text');
                            descriptionElement.setAttribute('placeholder', `Title: ${newTodo.title}`);
                            newTodo.title = descriptionElement.value;

                        }else if (key === "description") {
                            descriptionElement.setAttribute('type', 'text');
                            descriptionElement.setAttribute('placeholder', `Description: ${newTodo.description}`);
                            newTodo.description = descriptionElement.value;

                        }else if (key === 'dueDate') {
                            descriptionElement.setAttribute('type', 'date');
                            descriptionElement.value = `${newTodo.dueDate}`
                            newTodo.dueDate = descriptionElement.value;

                        }else if (key === "projectName") {
                            descriptionElement.setAttribute('type', 'text');
                            descriptionElement.setAttribute('placeholder', `Project name: ${newTodo.projectName}`);
                            
                        }

                        descriptionDiv.appendChild(descriptionElement);

                    };

                    descriptionDiv.appendChild(descriptionXbutton);
                    mainDiv.appendChild(descriptionDiv);  
            });
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

/* export {addTaskButtonLogic}; */