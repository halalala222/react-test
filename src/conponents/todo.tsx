import { ListItem, List, ListItemButton, ListItemIcon, Checkbox, ListItemText, Button } from '@mui/material'
import { todo, todoList } from '../interfaces/todolist'
import { handleUpdateTodoList } from '../interfaces/todolist'
import { FC } from 'react'

interface IProps {
    todoListData: todoList,
    handleChangeTodo: handleUpdateTodoList
}
const Todolist: FC<IProps> = (IProps) => {
    const todoListData = IProps.todoListData
    const handleChangeTodo = IProps.handleChangeTodo
    const handleCheckTodo = (id: number) => {
        const newTodoList = [...todoListData]
        newTodoList[id].isChecked = !newTodoList[id].isChecked
        handleChangeTodo(newTodoList)
    }

    const handleChange = (id: number, todoThing: string) => {
        const newTodoList = [...todoListData]
        newTodoList[id].todoThing = todoThing
        handleChangeTodo(newTodoList)
    }

    const handleDelete = (id: number) => {
        console.log(id)
        const newTodoList = todoListData.filter(value => value.id !== id)
        console.log(todoListData)
        console.log(newTodoList)
        handleChangeTodo(newTodoList)
    }
    return (
        <List>
            {
                todoListData.map((value) => {
                    return (
                        <>
                            <ListItem key={value.id} disablePadding>
                                <ListItemButton role={undefined} onClick={() => { handleCheckTodo(value.id) }} dense >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={value.isChecked}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': `todo ${value.id}` }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={`todo ${value.id}`} primary={value.todoThing} />
                                </ListItemButton>
                                <Button onClick={() => { handleDelete(value.id) }}>delete</Button>
                            </ListItem>
                        </>

                    )
                })
            }
        </List>
    )
}

export default Todolist