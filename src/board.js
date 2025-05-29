export default class Board {
    constructor(container) {
      this.container = container;
      this.columns = ['Todo', 'In Progress', 'Done'];
    }
  
    init() {
      this.container.innerHTML = '<div class="board"></div>';
      const boardEl = this.container.querySelector('.board');
  
      this.columns.forEach((title) => {
        const column = document.createElement('div');
        column.className = 'column';
        column.innerHTML = `
          <div class="column-header">${title}</div>
          <div class="tasks" data-column="${title}"></div>
          <button class="add-task">+ Add card</button>
        `;
        boardEl.appendChild(column);
  
        const addButton = column.querySelector('.add-task');
        addButton.addEventListener('click', () => this.addTask(column));
      });
  
      this.enableDnD();
    }
  
    addTask(column) {
      const taskText = prompt('Enter task text');
      if (!taskText) return;
  
      const task = document.createElement('div');
      task.className = 'task';
      task.draggable = true;
      task.textContent = taskText;
  
      column.querySelector('.tasks').appendChild(task);
      this.addDnDHandlers(task);
    }
  
    enableDnD() {
      const tasksContainers = this.container.querySelectorAll('.tasks');
  
      tasksContainers.forEach((tasks) => {
        tasks.addEventListener('dragover', (e) => {
          e.preventDefault();
        });
  
        tasks.addEventListener('drop', (e) => {
          const taskId = e.dataTransfer.getData('text/plain');
          const task = document.getElementById(taskId);
          if (task) tasks.appendChild(task);
        });
      });
    }
  
    addDnDHandlers(task) {
      task.id = `task-${Math.random().toString(36).substr(2, 9)}`;
  
      task.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', task.id);
      });
    }
  }
  export function createCard(text) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = text;
    return card;
  }
  