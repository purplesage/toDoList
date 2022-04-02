/* import { rootDivContent } from './index';
import {format, parseISO } from 'date-fns'; */

//todo: database (this will use localstorage in the future)
//todo: This module works, but its very messy, need to refactor this to increase readability.
let todoDataBase = [];
let projectLiDataBase = [];

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

        let todoDivObject = {
            dueDate: newTodo.dueDate,
            div: todoDiv,
            projectName: newTodo.projectName,
        };

            todoDataBase.push(todoDivObject); //sends todo to the database.
          
            if (todoDivObject.projectName !== "") {


                let liAlreadyExists = false;
                /* let newNavigationTab; */

                if (projectLiDataBase.length >= 1) {
                    
                    for (let i = 0; i <= projectLiDataBase.length; i++) {
                        if (projectLiDataBase[i] === newTodo.projectName) {
                            liAlreadyExists = true;
                        };
                    } ;
                };
                
                if (liAlreadyExists === false) {

                    let newNavigationTab = () => {
                        return {
                            li: document.createElement('li'),
                        }
                    };

                    let tabLiInstance = newNavigationTab();
    
                    tabLiInstance.li.textContent = `${newTodo.projectName}`;
    
                    projectLiDataBase.push(tabLiInstance.li.textContent);

                    let projectTabs = document.getElementById('project-list');

                    projectTabs.appendChild(tabLiInstance.li);

                    const todoUl = document.getElementById('todo-ul');

                     //* project filter----------

                     tabLiInstance.li.addEventListener('click', () => {

                        todoUl.querySelectorAll('li').forEach(n => n.remove());

                        rootDivContent.ulHeader.innerHTML = `<h3>${tabLiInstance.li.textContent}</h3><h3>Due Date</h3>`;

                        let projectFilter = todoDataBase.filter(todoObject => todoObject.projectName === tabLiInstance.li.textContent);

                        for (let i = 0; i < projectFilter.length; i++) {
                            rootDivContent.addContent(projectFilter[i].div);
                        }
                    });
                };    
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

/* export {addTaskButtonLogic};
 */
