import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList() {
    return(
        <div className="TodoList">
            <h4>Todo List 🌱</h4>
            <input className="searchBar" placeholder="검색어를 입력하세요"></input>
            <div className="list_wrapper">
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
        
    );
}
export default TodoList;