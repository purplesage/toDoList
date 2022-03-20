import './styles/index.scss';
import { homeContent } from './home';
import { todayContent } from './today';
import { weekContent } from './week';
import { projectsContent } from './projects';


//*content capsule-----------------

const contentCapsule = () =>{
    let home = homeContent();
    let today = todayContent(); 
    let week = weekContent();
    let projects = projectsContent();

    return [home, today, week, projects];
};


const basicConfigStuff = (() => {

    const rootDiv = document.getElementById('root'); //target div

    const tasks = document.getElementById('todo-elements').getElementsByTagName('li');//domElements

    rootDiv.appendChild(homeContent()); //default content

    return {rootDiv, tasks};

})();



//*Tab changing logic:-------------------------- (now algeabrized!)


const tabChangingLogic = (domElements, capsule, targetDiv) => {

    if (domElements.length === capsule.length) {

        for (let i = 0; i < domElements.length; i++) {

            domElements[i].addEventListener('click', () => {
                
                let currentContent = document.getElementById('content');
                    targetDiv.removeChild(currentContent);
                    targetDiv.appendChild(capsule[i]);
            });
        }
    }else{
        throw new Error('domElements and capsule content must have the same length');
    }
};

tabChangingLogic(basicConfigStuff.tasks, contentCapsule(), basicConfigStuff.rootDiv);
