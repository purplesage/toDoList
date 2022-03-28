import './styles/index.scss';
import { homeContent } from './home';
import { todayContent } from './today';
import { weekContent } from './week';
import { projectContent } from './projects';
import { addTaskButtonLogic }  from './todoMaker.js'

//*content capsule-----------------

const contentCapsule = () =>{
    let home = homeContent.anchorDiv;
    let today = todayContent.anchorDiv; 
    let week = weekContent.anchorDiv;
    

    return [home, today, week];
};

const basicConfigStuff = (() => { //default content and elements for the tabchanginglogic function.

    const rootDiv = document.getElementById('main-grid-id'); //target div

    const liElements = document.getElementById('todo-elements').getElementsByTagName('li');//domElements

    rootDiv.appendChild(homeContent.anchorDiv); //default content

    return {rootDiv, liElements};

})();

//*Tab changing logic:--------------------------(now algeabrized!)


const tabChangingLogic = (domListElements, contentCapsule, targetDiv, eraseElement) => {

    if (domListElements.length === contentCapsule.length) {

        for (let i = 0; i < domListElements.length; i++) {

            domListElements[i].addEventListener('click', () => {
                
                let currentContentToErase = document.getElementById(eraseElement);
                    targetDiv.removeChild(currentContentToErase);
                    targetDiv.appendChild(contentCapsule[i]);
            });
        }
    }else{
        throw new Error('domListElements and capsuleContent must have the same length!');
    }
};

tabChangingLogic(basicConfigStuff.liElements, contentCapsule(), basicConfigStuff.rootDiv, 'anchor-div-id');

addTaskButtonLogic(homeContent).divMakerEventListener();
addTaskButtonLogic(todayContent).divMakerEventListener();
addTaskButtonLogic(weekContent).divMakerEventListener();



//*Adding event listener to created projects and adding them into the root div.
const newProjectMaker = () => {
    let newProjectDefaultContent = projectContent();
    newProjectDefaultContent.defaultContent.ulHeader.innerHTML = `<h3>project name</h3><h3>Due Date</h3>`;
    basicConfigStuff.rootDiv.appendChild(newProjectDefaultContent.defaultContent.anchorDiv);
    addTaskButtonLogic(newProjectDefaultContent).divMakerEventListener(); 

    let projectTabs = document.getElementById('project-list');

    let newProjectTab = document.createElement('li');
    newProjectTab.textContent = `${addTaskButtonLogic().divMakerEventListener().newTodo.projectName}`;

    projectTabs.appendChild(newProjectTab);
}

export {newProjectMaker};













