import './styles/index.scss';
import { defaultContent } from './defaultContent';
import { addTaskButtonLogic } from "./todoMaker";
import { todoDataBase } from './todoMaker';
import { format, isThisWeek } from 'date-fns';


const rootDivContent = defaultContent();

export {rootDivContent};

//* IIFE containing essential basic elements for dom manipulation-----------------

const basicConfigStuff = (() => { //default content and elements for the tabchanginglogic function.

    const rootDiv = document.getElementById('main-grid-id'); //target div

    const liElements = [...document.getElementById('todo-elements').getElementsByTagName('li')];//domElements

    rootDiv.appendChild(rootDivContent.anchorDiv); //default content


    return {rootDiv, liElements};

})();

//* todo content filters added to default 'home, today and week' li elements in the left navbar.
const basicFilters = (() => {

    let today = format(new Date(), "MM/dd/yyyy");
    const todoUl = document.getElementById('todo-ul');

    for (let i = 0; i < basicConfigStuff.liElements.length; i++) {

        basicConfigStuff.liElements[i].addEventListener('click', () =>{

            //removes all child elements within a div.
            todoUl.querySelectorAll('li').forEach(n => n.remove()); 
            
            
            rootDivContent.ulHeader.innerHTML = `<h3>${basicConfigStuff.liElements[i].textContent}</h3><h3>Due Date</h3>`;

            //*------Homefilter-----------(makes 'home' li show all todo's)----------------------

            if (basicConfigStuff.liElements[i].textContent === 'Home') {

                for (let h = 0; h < todoDataBase.length; h++) {
                    
                    rootDivContent.addContent(todoDataBase[h].div);
                }
            };

            //*------todayFilter----(makes 'today' li show all todo's that are due for the present day)

            if (basicConfigStuff.liElements[i].textContent === 'Today') {
                let todayFilter = todoDataBase.filter(todoObject => format(todoObject.dueDate, "MM/dd/yyyy") === today);

                for (let t = 0; t < todayFilter.length; t++) {
                    
                    rootDivContent.addContent(todayFilter[t].div);
                }
            };

            //*-----weekFilter---(makes'week' li show all todo's that are due this week)-------

            if (basicConfigStuff.liElements[i].textContent === 'Week') {
                let weekFilter = todoDataBase.filter(todoObject => isThisWeek(new Date(todoObject.dueDate)) === true);

                for (let w = 0; w < weekFilter.length; w++) {
                    
                    rootDivContent.addContent(weekFilter[w].div);
                }
            }
        });
    }
})();

//*this function all adds the logic of the addTask button to it. (see todomaker.js)

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


























