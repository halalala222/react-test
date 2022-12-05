import { TextField, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { todo, todoList } from '../interfaces/todolist'
import Todolist from './todo'
import './list.css'
import { getTodolist } from '../network/apis/todolist'
const Todoinput = () => {
    const [todoListData, setTodoListData] = useState<todo[]>([])
    const [todoData, setTOdoData] = useState('')
    const fetchData = async () => {
        try {
            const todolistData = await getTodolist()
            const data = todolistData.map((value) => {
                return {
                    id: value.Id,
                    todoThing: value.Thing,
                    isChecked: true
                }
            })
            setTodoListData(data)
        }
        catch (e: any) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    const changeTodoList = (listData: todoList) => {
        // let newTodoList = [...listData]
        setTodoListData(listData)
    }

    const handleAddTodoList = () => {
        const newTodoData = {
            id: todoListData.length,
            isChecked: false,
            todoThing: todoData
        }
        console.log(newTodoData.id)
        const newTodoListData = [...todoListData, newTodoData]
        changeTodoList(newTodoListData)
    }

    return (
        <div className='list'>
            <div className='input' key={'input'}>
                <TextField id="todoInput" margin='normal' variant="standard" inputProps={{ style: { width: "500px" } }} label='todo' value={todoData} onChange={(e) => {
                    setTOdoData(e.target.value)
                }} />
                <Button id='addButton' disabled={!todoData} size='small' variant='contained' onClick={handleAddTodoList}>add</Button>
            </div>
            <div className='todoList' key={'todolist'}>
                <Todolist todoListData={todoListData} handleChangeTodo={changeTodoList} />
            </div>
        </div>
    )
}

export default Todoinput