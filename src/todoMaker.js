import {format, isThisWeek, parseISO } from 'date-fns';
import { homeContent } from './home';
import { todayContent } from './today';
import { weekContent } from './week';
import {projectContent} from './projects';
import {projectTabChangingLogic} from './index';


//todo: database (this will use localstorage in the future)
//todo: This module works, but its very messy, need to refactor this to increase readability.
let todoDataBase = [];
//--------------------------------------------------------
const addTaskButtonLogic = (contentInstance) => {

    const makeTodo = () => { 
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

    const todoDivMaker = () => {
        let newTodo = makeTodo(contentInstance);
        
        todoDataBase.push(newTodo); //sends todo to the database.
        
        let todoDiv = document.createElement('li');
    
        let titleP = document.createElement('p');
            titleP.textContent = `${newTodo.title}`;
            todoDiv.appendChild(titleP);
    
        let dateP = document.createElement('p');
            dateP.textContent = `${format(newTodo.dueDate, "MM/dd/yyyy")}`;
            todoDiv.appendChild(dateP);

        if (newTodo.projectName !== "") {

            const newProject = () => {
                let newProjectContentDisplay = projectContent();
                newProjectContentDisplay.defaultContent.ulHeader.innerHTML = `<h3>${newTodo.projectName}</h3><h3>Due Date</h3>`;
    
                const rootDiv = document.getElementById('main-grid-id');
                
                let projectTabs = document.getElementById('project-list');
                
                let newTab = document.createElement('li');
                newTab.textContent = `${newTodo.projectName}`;
                projectTabs.appendChild(newTab);
    
                projectTabChangingLogic(newTab, newProjectContentDisplay.defaultContent.anchorDiv, rootDiv, 'anchor-div-id');

                return {newProjectContentDisplay};
            }

            return {todoDiv, newTodo, newProject};
        
        }else{return {todoDiv, newTodo}};    
    };

    const divMakerEventListener = () => {

        let today = format(new Date(), "MM/dd/yyyy");
    
        contentInstance.svgAddButton.addEventListener('click', () =>{
    
    
            //* content distribution-----------------------------
            homeContent.addContent(todoDivMaker(contentInstance).todoDiv);
    
            /* this line is a little confusing, so ill explain it:
                it is the formating of the date input taken by the date input in the 'addButton' ghost div. The reason that the function todoDivMaker is called here is because it returns the newTodo due date. It is used to check if the date of the input is equal to today's date. In that case, the new todo div will be appended to the 'today' content tab. 
            
            */
            if (format(todoDivMaker(contentInstance).newTodo.dueDate, "MM/dd/yyyy") === today){
                todayContent.addContent(todoDivMaker(contentInstance).todoDiv);
            };
    
            //? note : isThisWeek() bugs out if given a formated new Date() object, so i needed to convert back the formated date into a new Date and it worked for some reason. I have no idea why. But it works.

        
            //note: sundays are the first day of the week!
    
            if (isThisWeek(new Date(todoDivMaker(contentInstance).newTodo.dueDate)) === true) {
                weekContent.addContent(todoDivMaker(contentInstance).todoDiv);
            };

            //todo: project todo appending (under construction!)
            if (todoDivMaker(contentInstance).newTodo.projectName !== "") {
                todoDivMaker().newProject().newProjectContentDisplay.defaultContent.addContent(todoDivMaker(contentInstance).todoDiv);

            }

            //*-----------------------------------------------------
    
            contentInstance.ghostDiv.style.display = "none";
            contentInstance.svgButtonsDiv.style.display = "none";
        });
    };



return {divMakerEventListener};

};


export {addTaskButtonLogic};




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