const todoList = JSON.parse(localStorage.getItem('todoList'));
console.log(todoList);
console.log(typeof todoList);

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, i) => {
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, i) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(i, 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        renderTodoList();
      })
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  })
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({name, dueDate});
  localStorage.setItem('todoList', JSON.stringify(todoList));
  inputElement.value = '';

  renderTodoList();
}