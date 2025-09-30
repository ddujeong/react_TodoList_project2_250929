import { useContext, useRef, useState } from "react";
import "./TodoEditor.css";
import {TodoDispatchContext } from "../App";

const TodoEditor = () => {
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value); // 유저가 입력한 할일 텍스트를 content에 저장
    };
    const onSubmit = () => {
        if(!content){ // 참이면 빈칸(false)으로 들어옴
            alert("할일은 반드시 내용이 필수입니다.");
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent(""); // 할일 입력 창 초기화("")
    };
    function onKeyDown(e) {
        if(e.keyCode === 13) {
            onSubmit();
        }
    };
    return(
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✍️</h4>
            <div className="editor_wrapper">
                <input value={content} 
                    onChange={onChangeContent} 
                    placeholder="새로운 Todo..."
                    onKeyDown={onKeyDown}
                    ref={inputRef}></input>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}
export default TodoEditor;