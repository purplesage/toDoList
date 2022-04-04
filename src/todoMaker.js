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

        let todoDivObject = makeTodo(contentInstance);
        
        let todoDiv = document.createElement('li');
    
        let titleP = document.createElement('p');
            titleP.textContent = `${todoDivObject.title}`;
            todoDiv.appendChild(titleP);
    
        let dateP = document.createElement('p');
            dateP.textContent = `${format(todoDivObject.dueDate, "MM/dd/yyyy")}`;
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

        //* description-eddit button element---------------------------

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

        //description button event listener

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
                    descriptionElement.value = `${todoDivObject.dueDate}`
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

        //x button logic
        descriptionXbutton.addEventListener('click', () => {

            descriptionDiv.style.display = "none";
            descriptionDiv.innerHTML = "";
            
        }); 
    
        // v button logic
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

        //-----------------------------------------------

        todoDivObject.div = todoDiv; //assigns the newly made todo'div to its value origin object.

            todoDataBase.push(todoDivObject); //sends todo to the database.
          
            //*project filter------------------------

            if (todoDivObject.projectName !== "") {

                projectFilter(todoDivObject)  //check projectFilter.js for more info
                 
            };

            return todoDivObject;
        };

        const eventListener = () => {

            //? adds new todo to whatever tab it is called on. It gets filtered later via 'default filters (see index.js)' and 'project filter (see project.js)'.  

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

