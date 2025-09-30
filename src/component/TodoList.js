import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useContext, useMemo, useState } from "react";
import {TodoStateContext } from "../App";

const TodoList = () => {
    const todo = useContext(TodoStateContext) || [];
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    // 검색어 필터링 함수
    const getSearchResult = () => {
        return search === "" 
        ? todo 
        : todo.filter((it) => 
            it.content.toLowerCase().replaceAll(" ","").includes(search.toLowerCase().replaceAll(" ","")));
        // 소문자로 바꾸기, 공백 제거

        // 삼항연산자를 if else로 풀었을 떄 
        // if(search === ""){
        //     return todo;
        // } else{
        //     return todo.filter((it) => it.content.toLowerCase().replaceAll(" ","").includes(search.toLowerCase().replaceAll(" ","")));
        // }
    };
    // function analyzeTodo() {
         // 페이지가 렌더링 될때마다 실행됨
         // console.log("analyzeTodo 실행");
         // const totalCount = todo.length;
         // const doneCount = todo.filter((it) => it.isDone).length;
         // const notDoneCount = totalCount - doneCount;
         // return {totalCount, doneCount, notDoneCount};
    // };
    
    const analyzeTodo = useMemo(() => {
        // todo 배열에 변화가 있을 때만 실행(새 할 일 추가, isDone 변화, 삭제)
        console.log("analyzeTodo 실행");
        const totalCount = todo.length;
        const doneCount = todo.filter((it) => it.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, notDoneCount};
    },[todo]);

    const {totalCount, doneCount, notDoneCount} = analyzeTodo;
    return(
        <div className="TodoList">
            <div>
                <div>총 갯수 : {totalCount} 개</div>
                <div>완료된 할일 : {doneCount} 개</div>
                <div>해야할 할일 : {notDoneCount} 개</div>
            </div>
            <h4>Todo List 🌱</h4>
            {todo.length > 0 ?  <><input value={search}
                onChange={onChangeSearch}
                className="searchBar"
                placeholder="검색어를 입력하세요"></input><div className="list_wrapper">
                    {/* todoItem를 반복해서 출력 */}
                    {getSearchResult().map((it) => (
                        <TodoItem key={it.id}
                            {...it} />
                        // {...it} => {id, isDone, content, createDate} 
                        // -> props로 TodoItem 컴포넌트에 전달
                    ))}
                </div></>: <h3>오늘 할일은 무엇인가요?✨</h3>}
        </div>
        
    );
}
export default TodoList;