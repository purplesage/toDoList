import './styles/index.scss';
import { homeContent } from './home';
import { todayContent } from './today';
import { weekContent } from './week';
import { projectsContent } from './projects';
import { addTaskButtonLogic }  from './todoMaker.js'

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

    const liElements = document.getElementById('todo-elements').getElementsByTagName('li');//domElements

    rootDiv.appendChild(homeContent.anchorDiv); //default content

    return {rootDiv, liElements};

})();

//*Tab changing logic:-------------------------- (now algeabrized!)


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













