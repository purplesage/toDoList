import './styles/index.scss';
import { homeContent } from './home';
import { todayContent } from './today';
import { weekContent } from './week';
import { projectsContent } from './projects';


//*content capsule-----------------

const contentCapsule = () =>{
    let home = homeContent.anchorDiv;
    let today = todayContent.anchorDiv; 
    let week = weekContent.anchorDiv;
    let projects = projectsContent.anchorDiv;

    return [home, today, week, projects];
};

const basicConfigStuff = (() => { //default content and elements for the tabchanginglogic function.

    const rootDiv = document.getElementById('main-grid-id'); //target div

    const tasks = document.getElementById('todo-elements').getElementsByTagName('li');//domElements

    rootDiv.appendChild(homeContent.anchorDiv); //default content

    return {rootDiv, tasks};

})();



//*Tab changing logic:-------------------------- (now algeabrized!)


const tabChangingLogic = (domListElements, contentCapsule, targetDiv, eraseElement) => {

    if (domListElements.length === contentCapsule.length) {

        for (let i = 0; i < domListElements.length; i++) {

            domListElements[i].addEventListener('click', () => {
                
                let currentContent = document.getElementById(eraseElement);
                    targetDiv.removeChild(currentContent);
                    targetDiv.appendChild(contentCapsule[i]);
            });
        }
    }else{
        throw new Error('domListElements and capsuleContent must have the same length!');
    }
};

tabChangingLogic(basicConfigStuff.tasks, contentCapsule(), basicConfigStuff.rootDiv, 'anchor-div-id');

//*---------todo object maker-------------------------------------

const makeTodo = () => {   //todo pending: need to algeabrize this.
    let todo = {
        title: homeContent.inputList[0],
        description: homeContent.inputList[1],
        dueDate: homeContent.input[2],
        project: homeContent.input[3],
    }

    return todo;
}


const todoDivMaker = () => {
    let newTodo = makeTodo();

    let todoDiv = document.createElement('li');
    todoDiv.innerHTML = `<div><input type="checkbox"><p>${newTodo.title}</p></div><div><p>${newTodo.dueDate}`;

    homeContent.todoUl.appendChild(todoDiv);
}


