const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

let todos = [];

const TODOS_KEY = 'todos';

function saveTodos(){
    
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    //localStorage에는 array를 저장할 수 없고 오직 text만 저장할 수 있기때문에 todos를 string 형태로 변환
    //이때 JSON.stringify는 js object나 array또는 어떤 Javascript 코드건간에 그걸 string으로 만들어준다.
    //String 으로 바뀐 array 나 object는 JSON.parse()를 통해 원상태로 돌아올 수 있다.
}

function deleteTodo(event){
    const li = event.target.parentElement;
    // deleteBtn이 속한 부모인 <li>의 정보를 가져옴
    // parentElement는 클릭된 요소의 부모
    li.remove();
    // remove() 함수를 통해 요소를 삭제할 수 있다.

    todos = todos.filter((todo) => {return todo.id !== parseInt(li.id)});
    //filter 함수는 새로운 array를 반환
    // li.id => string, todo.id => number

    saveTodos();
    // localStorage에 다시 todos 배열을 저장함으로써 update
}

function paintTodo(newTodoObj){
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerText = newTodoObj.text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '⛔';
    deleteBtn.addEventListener('click', deleteTodo);
    li.appendChild(deleteBtn);
    
    todoList.appendChild(li);
}

function handleTodoSubmit(event)
{
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value='';
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    const parsedTodos = JSON.parse(savedTodos);
    if (parsedTodos.length === 5){
        alert('There is so many task. Please delete some tasks.');
    }
    else{
        todos.push(newTodoObj);
        paintTodo(newTodoObj);
        saveTodos();
    }
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null)
{
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach((todo) => paintTodo(todo));
    //parsedTodos.forEach(paintTodo); 이렇게 작성해도됨
}

