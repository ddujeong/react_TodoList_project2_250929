import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

function TodoList({todo, onUpdate, onDelete}) {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    // 검색어 필터링 함수
    const getSearchResult = () => {
        return search === "" 
        ? todo 
        : todo.filter((it) => it.content.toLowerCase().replaceAll(" ","").includes(search.toLowerCase().replaceAll(" ","")));
        // 소문자로 바꾸기, 공백 제거

        // 삼항연산자를 if else로 풀었을 떄 
        // if(search === ""){
        //     return todo;
        // } else{
        //     return todo.filter((it) => it.content.toLowerCase().replaceAll(" ","").includes(search.toLowerCase().replaceAll(" ","")));
        // }
    };
    return(
        <div className="TodoList">
            <h4>Todo List 🌱</h4>
            <input value={search}
                onChange={onChangeSearch} 
                className="searchBar" 
                placeholder="검색어를 입력하세요"></input>
            <div className="list_wrapper">
                {/* todoItem를 반복해서 출력 */}
                {getSearchResult().map((it) => (
                    <TodoItem key={it.id} 
                    {...it} 
                    onUpdate={onUpdate} 
                    onDelete={onDelete}/>
                    // {...it} => {id, isDone, content, createDate} 
                    // -> props로 TodoItem 컴포넌트에 전달
                ))}
            </div>
        </div>
        
    );
}
export default TodoList;