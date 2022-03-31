import './styles/index.scss';
import { defaultContent } from './defaultContent';
import { addTaskButtonLogic } from "./todoMaker";
import { todoDataBase } from './todoMaker';
import { format, isThisWeek } from 'date-fns';



//*content capsule-----------------
const addedProjectsDataBase = [];
const contentCapsule = []; //for tab changing logic function. //also need to export this for the todo maker functions.


const rootDivContent = defaultContent();

const basicConfigStuff = (() => { //default content and elements for the tabchanginglogic function.

    const rootDiv = document.getElementById('main-grid-id'); //target div

    const liElements = [...document.getElementById('todo-elements').getElementsByTagName('li')];//domElements

    rootDiv.appendChild(rootDivContent.anchorDiv); //default content

    return {rootDiv, liElements};

})();

const basicFilters = (() => {

    let today = format(new Date(), "MM/dd/yyyy");
    const todoUl = document.getElementById('todo-ul');

    for (let i = 0; i < basicConfigStuff.liElements.length; i++) {

        basicConfigStuff.liElements[i].addEventListener('click', () =>{

            todoUl.querySelectorAll('li').forEach(n => n.remove());
            
            rootDivContent.ulHeader.innerHTML = `<h3>${basicConfigStuff.liElements[i].textContent}</h3><h3>Due Date</h3>`;
            //*------Homefilter------------------------------------------

            if (basicConfigStuff.liElements[i].textContent === 'Home') {

                for (let h = 0; h < todoDataBase.length; h++) {
                    
                    if (todoDataBase[h].isAppended === false){
                        rootDivContent.addContent(todoDataBase[h].div);
                    } 
                }
            };

            //*------todayFilter-----------------------------------------

            if (basicConfigStuff.liElements[i].textContent === 'Today') {
                let todayFilter = todoDataBase.filter(todoObject => format(todoObject.dueDate, "MM/dd/yyyy") === today);

                for (let t = 0; t < todayFilter.length; t++) {
                    
                    if (todayFilter[t].isAppended === false){
                        rootDivContent.addContent(todayFilter[t].div);
                    }    
                }
            }

            //*-----weekFilter-------------------------

            if (basicConfigStuff.liElements[i].textContent === 'Week') {
                let weekFilter = todoDataBase.filter(todoObject => isThisWeek(new Date(todoObject.dueDate)) === true);

                for (let w = 0; w < weekFilter.length; w++) {
                    
                    if (weekFilter[w].isAppended === false){
                        rootDivContent.addContent(weekFilter[w].div);
                    }  
                }
            }
        });
    }
})();

addTaskButtonLogic(rootDivContent).eventListener();
































//*Tab changing logic:--------------------------(now algeabrized!)


/* const tabChangingLogic = (domListElements, contentCapsule, targetDiv, eraseElement) => {

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
}; */


























