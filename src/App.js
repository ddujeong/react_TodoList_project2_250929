import { useRef, useState } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

function App() {
  const idRef = useRef(3);
  // 초기값이 3인 Ref 객체 생성하여 변수 idRef 에 저장
  const mockTodo = [{
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime() 
  },{
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createDate: new Date().getTime() 
  },{
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createDate: new Date().getTime() 
  }];
const [todo, setTodo] = useState(mockTodo);

const onCreate = (content) => { // 추가 버튼이 클릭되면 실행 될 이벤트핸들러
  const newItem = {
    id:idRef.current,
    content,
    isDone: false,
    createDate: new Date().getTime()
  };

  // newItem => 할일 객체를 생성 후 idRef 값을 1증가
  setTodo([newItem, ...todo]); // [...todo]-> [{id:0},{id:1},{id:2}]
  idRef.current += 1;
};
const onUpdate = (targetId) => {
  setTodo(todo.map((it) => {
    if(it.id === targetId) {
      return {
        ...it,
        isDone: !it.isDone,
      };
    } else{
      return it;
    }
  }));
};
const onDelete =(targetId) => {
  setTodo(todo.filter((it) => it.id !== targetId));
  // 삭제를 클릭한 id 를 제외하고 필터링 하여 todo에 저장
};
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo}  onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
