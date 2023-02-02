
function onInit() {
    // console.log('Ready')
    renderTodos()
}

function renderTodos() {
    const todos = getTodosForDisplay()
    const strHTMLs = todos.map(todo => `
         <li onclick="onToggleTodo('${todo.id}')"
            class="${todo.isDone ? 'done' : ''}">
            ${todo.txt}
            <button onclick="onRemoveTodo(event,'${todo.id}')">X</button> 
         </li> `)

    document.querySelector('.todo-list').innerHTML = strHTMLs.join('')
    document.querySelector('.total-todos-count').innerText = (getTotalTodosCount() ? getTotalTodosCount() : 'No Done Todos')
    document.querySelector('.active-todos-count').innerText = (getActiveTodosCount() ? getActiveTodosCount() : 'No Active Todos')
}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()
    var isConfitn = confirm('Are you sure to delete?')
    if(!isConfitn) return
    removeTodo(todoId)
    renderTodos()
}

function onToggleTodo(todoId) {
    toggleTodo(todoId)
    renderTodos()
}

function onAddTodo(ev) {
    ev.preventDefault()
    const elInput = document.querySelector('input[name="todo-txt"]')
    const elImportance = document.querySelector('.set-importance')
    
    if(elInput.value === ' ' || elInput.value === '') return
    addTodo(elInput.value,  +elImportance.value)
    renderTodos()
    elInput.value = ''
}


function onSetFilter(filterBy) {
    console.log('filterBy', filterBy)
    setFilter(filterBy)
    renderTodos()
}

function onSorting(sortingBy){
    setSorting(sortingBy)
    console.log('hi');
    renderTodos()
    console.log('bi');
}

