export interface todo{ 
    id : number,
    isChecked : boolean,
    todoThing : string
}

export type todoList = todo[]

export type handleUpdateTodoList = (todoList : todoList) => void

export interface todolistProps {
    data : todo[],
    setTodoList : handleUpdateTodoList
}