import './styles/index.scss';
import { defaultContent } from './defaultContent';
import { addTaskButtonLogic }  from './todoMaker.js'


//*content capsule-----------------
const addedProjectsDataBase = [];
const contentCapsule = []; //for tab changing logic function. //also need to export this for the todo maker functions.

export {home, today, week};

const home = defaultContent();
contentCapsule.push(home)

const today = defaultContent()
today.ulHeader.innerHTML = "<h3>Today</h3><h3>Due Date</h3>";
contentCapsule.push(today)

const week = defaultContent()
week.ulHeader.innerHTML = "<h3>Week</h3><h3>Due Date</h3>";
contentCapsule.push(week)

const basicConfigStuff = (() => { //default content and elements for the tabchanginglogic function.

    const rootDiv = document.getElementById('main-grid-id'); //target div

    const liElements = [...document.getElementById('todo-elements').getElementsByTagName('li')];//domElements

    rootDiv.appendChild(home.anchorDiv); //default content

    return {rootDiv, liElements};

})();

//*Tab changing logic:--------------------------(now algeabrized!)


const tabChangingLogic = (domListElements, contentCapsule, targetDiv, eraseElement) => {

    if (domListElements.length === contentCapsule.length) {

        for (let i = 0; i < domListElements.length; i++) {

            domListElements[i].addEventListener('click', () => {
                
                let currentContentToErase = document.getElementById(eraseElement);
                    targetDiv.removeChild(currentContentToErase);
                    targetDiv.appendChild(contentCapsule[i].anchorDiv);
            });
        }
    }else{
        throw new Error('domListElements and capsuleContent must have the same length!');
    }
};


tabChangingLogic(basicConfigStuff.liElements, contentCapsule, basicConfigStuff.rootDiv, 'anchor-div-id');

for (let i = 0; i < contentCapsule.length; i++) {
    addTaskButtonLogic(contentCapsule[i]).divMakerEventListener();
};


























