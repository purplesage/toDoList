import {format, isThisWeek, addDays, parseISO } from 'date-fns';
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
        description: contentInstance.inputList[1].value,
        projectName: contentInstance.inputList[3].value,
    };

    return todo;
};

const todoDivMaker = (contentInstance) => {
    let newTodo = makeTodo(contentInstance);
    let todoDiv;
    let today = format(new Date(), "MM/dd/yyyy");
    todoDataBase.push(newTodo); //sends todo to the database.
    console.log(`this is it: ${newTodo.dueDate}`);
    for (let i = 0; i < todoDataBase.length; i++) {

        if (todoDataBase[i].divMade === false) {
            todoDiv = document.createElement('li');

            let titleP = document.createElement('p');
                titleP.textContent = `${todoDataBase[i].title}`;
                todoDiv.appendChild(titleP);
        
            let dateP = document.createElement('p');
                dateP.textContent = `${todoDataBase[i].dueDate}`;
                todoDiv.appendChild(dateP);
                
            //task div distribuitor goes here
             //all tasks go into home.
             homeContent.addContent(todoDiv);
            
            if (todoDataBase[i].dueDate === today){
                todayContent.addContent(todoDiv);
            };
            
            if (isThisWeek(todoDataBase[i].dueDate) === true) {
                weekContent.addContent(todoDiv);
                homeContent.addContent(todoDiv);
                
            };
            
            todoDataBase[i].divMade = true;

        }else{
            continue;
        };
    }
};

const divMakerEventListener = (contentInstance) => {

    contentInstance.svgAddButton.addEventListener('click', () =>{
        todoDivMaker(contentInstance);
        contentInstance.ghostDiv.style.display = "none";
        contentInstance.svgButtonsDiv.style.display = "none";
    });
};


export {divMakerEventListener, todoDataBase};
