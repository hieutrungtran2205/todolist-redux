import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './action';

export const reducer = (state = JSON.parse(localStorage.getItem("todoRedux")), action) => {
    if (!state) {
        localStorage.setItem("todoRedux", JSON.stringify([]));
    } else {
        let newTodoList;
        switch (action.type) {
            case ADD_TODO:
                newTodoList = [...state];
                newTodoList.push(action.payload);
                localStorage.setItem("todoRedux", JSON.stringify(newTodoList))
                return newTodoList;
            case DELETE_TODO:
                newTodoList = [...state];
                newTodoList = newTodoList.filter(todo => todo.id !== action.payload);
                localStorage.setItem("todoRedux", JSON.stringify(newTodoList))
                return newTodoList;
            case UPDATE_TODO:
                newTodoList = [...state];
                let index = -1;
                for (let i = 0; i < newTodoList.length; i++) {
                    index++;
                    if (newTodoList[i].id === action.payload.id) {
                        break;
                    }
                }
                if (index !== -1) {
                    newTodoList[index] = action.payload;
                    localStorage.setItem("todoRedux", JSON.stringify(newTodoList))
                    return newTodoList;
                }
                break
            default:
                return state;
        }
    }
}