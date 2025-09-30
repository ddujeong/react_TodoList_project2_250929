import { useCallback, useReducer, useRef} from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
// import TestComp from './component/TestComp';
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.newItem, ...state];
    case "UPDATE":
      return state.map((it) => it.id === action.targetId ? {...it, isDone:!it.isDone}: it);
    case "DELETE":
      return state.filter((it) => it.id !== action.targetId );
    default:
      return state;
  }
}

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
const [todo, dispatch] = useReducer(reducer,mockTodo);
// const [todo, setTodo] = useState(mockTodo);

const onCreate = useCallback((content) => { // 추가 버튼이 클릭되면 실행 될 이벤트핸들러
  dispatch({
    type: "CREATE",
    newItem:{
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime()
    }
  });
  idRef.current += 1;
 
},[]);
const onUpdate = useCallback((targetId) => {
  dispatch({
    type: "UPDATE",
    targetId
  })
  
},[]);
const onDelete = useCallback((targetId) => {
  dispatch({
    type: "DELETE",
    targetId
  })
  
},[]);
  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo}  onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
