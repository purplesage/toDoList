import { rootDivContent } from './index';
import { todoDataBase } from './todoMaker';

let projectLiDataBase = [];

const projectFilter = (newTodo) => {

    let liAlreadyExists = false;
                
        if (projectLiDataBase.length >= 1) {
            
            for (let i = 0; i <= projectLiDataBase.length; i++) {
                if (projectLiDataBase[i] === newTodo.projectName) {
                    liAlreadyExists = true;
                };
            } ;
        };
        
        if (liAlreadyExists === false) {

            let tabLiInstance = {
                    li: document.createElement('li'),
                    NofProjects: document.createElement('p'),
                    projectName: document.createElement('p'),
                };
        

            tabLiInstance.projectName.textContent = `${newTodo.projectName}`;

            tabLiInstance.li.appendChild(tabLiInstance.NofProjects);
            tabLiInstance.li.appendChild(tabLiInstance.projectName);

            projectLiDataBase.push(tabLiInstance.projectName.textContent);

            let projectTabs = document.getElementById('project-list');

            //todo: #of todo's display div----------------

    /* 
            const amountOfTodosDisplay = document.createElement('p');
                tabLiInstance.li.appendChild(amountOfTodosDisplay);

                const numberDisplay = (projectFilterLength) => {
                    amountOfTodosDisplay.textContent = `${projectFilterLength.length}`
                }
     */
            
            //--------------------------------------------

            projectTabs.appendChild(tabLiInstance.li);

            const todoUl = document.getElementById('todo-ul');

                //* project filter----------


                tabLiInstance.li.addEventListener('click', () => {

                todoUl.querySelectorAll('li').forEach(n => n.remove());

                rootDivContent.ulHeader.innerHTML = `<h3>${tabLiInstance.projectName.textContent}</h3><h3>Due Date</h3>`;

                let projectFilterList = todoDataBase.filter(todoObject => todoObject.projectName === tabLiInstance.projectName.textContent);

                for (let i = 0; i < projectFilterList.length; i++) {
                    rootDivContent.addContent(projectFilterList[i].div);
                }

                numberDisplay(projectFilterList);

                //todo: #of todo's display div.

                

                //--------------------------------------
            });
        };

        
}

export {projectFilter, projectLiDataBase};


   