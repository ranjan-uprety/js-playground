const todoList = [];

renderTodoList();

function renderTodoList(){

  let todolistHTML = '';

  for (let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todolistHTML += html;

  };

  console.log(todolistHTML);

  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
  }

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';


  renderTodoList();

  
}