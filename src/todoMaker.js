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
            title: contentInstance.inputList[0].value,
            description: contentInstance.inputList[1].value,
            dueDate: new Date(parseISO(contentInstance.inputList[2].value)),
            projectName: contentInstance.inputList[3].value,
            div: null,
        };
    
        return todo;
    };

    const todoDivMaker = () => {

        //*creates the todo's div and its inner elements.

        let todoDivObject = makeTodo(contentInstance);
        
        let todoDiv = document.createElement('li');
        
        let titleP = document.createElement('p');
            titleP.textContent = `${todoDivObject.title}`;
            todoDiv.appendChild(titleP);
    
        let dateP = document.createElement('p');
            dateP.textContent = `${format(todoDivObject.dueDate, "MM/dd/yyyy")}`;
            todoDiv.appendChild(dateP);
    
        todoDivObject.div = todoDiv; //assigns the newly made todo'div to its value origin object.
    
        todoDataBase.push(todoDivObject); //sends todo to the database.

        //* 'delete todo' button element---------------------------

        let deleteTodoSvg = document.createElement('div');
            deleteTodoSvg.textContent = "deleteSVG";
            deleteTodoSvg.classList = "delete-button";
            todoDiv.appendChild(deleteTodoSvg);
            
            deleteTodoSvg.addEventListener('click', () => {

                // deletes todo div from display.

                rootDivContent.todoUl.removeChild(todoDiv);

                // deletes 'todo' object from database.

                todoDataBase.splice(todoDataBase.indexOf(todoDivObject), 1);

            });

        //* description-edit button element-(property)-------------------------------

        //todo: change variable names so that they make more sense.

        let todoDescriptionSvg = document.createElement('div');
            todoDescriptionSvg.textContent = "descriptionSVG";
            todoDiv.appendChild(todoDescriptionSvg);

        let mainDiv = document.getElementById('todo-ul');

        
        let descriptionDiv = document.createElement('div');
        descriptionDiv.setAttribute('id', 'description-element-div');

        let descriptionXbutton = document.createElement('button');
        descriptionXbutton.textContent = 'X';

        let descriptionVbutton = document.createElement('button');
        descriptionVbutton.textContent = 'V';
        descriptionVbutton.classList = 'v-button';

        //description button event listener that adds inputs for editing todo's.

        todoDescriptionSvg.addEventListener('click', () => {
            
            descriptionDiv.style.display = "flex";
            descriptionDiv.classList = 'description-element-div';

            for (let key in todoDivObject) {
                let descriptionElement = document.createElement('input');
                
                if (key === 'title') {
                    descriptionElement.setAttribute('type', 'text');
                    descriptionElement.setAttribute('placeholder', `Title: ${todoDivObject.title}`);
                    todoDivObject.title = descriptionElement.value;

                }else if (key === "description") {
                    descriptionElement.setAttribute('type', 'text');
                    descriptionElement.setAttribute('placeholder', `Description: ${todoDivObject.description}`);
                    todoDivObject.description = descriptionElement.value;

                }else if (key === 'dueDate') {
                    descriptionElement.setAttribute('type', 'date');
                    descriptionElement.value = `${todoDivObject.dueDate}`;
                    todoDivObject.dueDate = descriptionElement.value;

                }else if (key === "projectName") {
                    descriptionElement.setAttribute('type', 'text');
                    descriptionElement.setAttribute('placeholder', `Project name: ${todoDivObject.projectName}`);
                    
                }else{
                    break;
                }

                descriptionDiv.appendChild(descriptionElement);

            };

            descriptionDiv.appendChild(descriptionXbutton);
            descriptionDiv.appendChild(descriptionVbutton);
            mainDiv.appendChild(descriptionDiv);  
    });    

        //*  x button logic, simply exits the edit div without doing anything else.
        descriptionXbutton.addEventListener('click', () => {

            descriptionDiv.style.display = "none";
            descriptionDiv.innerHTML = "";
            
        }); 
    
        //* v button logic, adds new input fields in order to edit the todo object.
        descriptionVbutton.addEventListener('click', () => {

            let descriptionInputs = document.getElementById('description-element-div').getElementsByTagName('input');

            todoDivObject.title = descriptionInputs[0].value;
            todoDivObject.description = descriptionInputs[1].value;
            todoDivObject.dueDate = new Date(parseISO(descriptionInputs[2].value));
            todoDivObject.projectName = descriptionInputs[3].value;

            todoDivObject.div.innerHTML = `<p>${todoDivObject.title}</p><p>${format(todoDivObject.dueDate, "MM/dd/yyyy")}</p>`;

            todoDivObject.div.appendChild(deleteTodoSvg);
            todoDivObject.div.appendChild(todoDescriptionSvg);

            descriptionDiv.style.display = "none";
            descriptionDiv.innerHTML = "";

            projectFilter(todoDivObject);
        });

        //* condition for calling on project filter function------------------------
    
        if (todoDivObject.projectName !== "") {
    
            projectFilter(todoDivObject, descriptionVbutton, deleteTodoSvg);  //check projectFilter.js for more info

        };

            return todoDivObject;
        };

        const eventListener = () => {

            //? adds new todo to whatever tab it is called on. It gets filtered later via 'default filters (see index.js)' and 'project filter (see project.js)'.  

            contentInstance.svgAddButton.addEventListener('click', () => {

                contentInstance.addContent(todoDivMaker().div);

                //blanks the inputs and hides the ghost div(that is: the expanded addtask button).

                for (let i = 0; i < contentInstance.inputList.length; i++) {
                    contentInstance.inputList[i].value = "";
                };

                contentInstance.ghostDiv.style.display = "none";
                contentInstance.svgButtonsDiv.style.display = "none";

                //todo: project number goes here

            });

        }; 

        return {todoDivMaker, eventListener};

};

export {addTaskButtonLogic};

