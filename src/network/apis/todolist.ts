import Instance from "../instance"
import { todolist } from "../interfaces/todolist"
const restfuls = {
    todolist : '/todolist'
}

export async function getTodolist() : Promise<todolist[]> { 
    const res = await Instance.get(restfuls.todolist)
    return res.data.data
}

export async function postTodolist(params:todolist) {
    const res = await Instance.post(restfuls.todolist,{thing : params.Thing})
    return res.data
}

export async function deleteTodolist(params:todolist) {
    const res = await Instance.delete(restfuls.todolist,{data:{
        id : params.Id
    }})
    return res.data
}
