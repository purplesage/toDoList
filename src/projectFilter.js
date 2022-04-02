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

            let newNavigationTab = () => {
                return {
                    li: document.createElement('li'),
                }
            };

            let tabLiInstance = newNavigationTab();

            tabLiInstance.li.textContent = `${newTodo.projectName}`;

            projectLiDataBase.push(tabLiInstance.li.textContent);

            let projectTabs = document.getElementById('project-list');

            projectTabs.appendChild(tabLiInstance.li);

            const todoUl = document.getElementById('todo-ul');

                //* project filter----------

                tabLiInstance.li.addEventListener('click', () => {

                todoUl.querySelectorAll('li').forEach(n => n.remove());

                rootDivContent.ulHeader.innerHTML = `<h3>${tabLiInstance.li.textContent}</h3><h3>Due Date</h3>`;

                let projectFilter = todoDataBase.filter(todoObject => todoObject.projectName === tabLiInstance.li.textContent);

                for (let i = 0; i < projectFilter.length; i++) {
                    rootDivContent.addContent(projectFilter[i].div);
                }
            });
        };
}

export {projectFilter, projectLiDataBase};


   