import { useReducer } from "react";
function reducer(state, action) { // 상태 변화 함수
    // (state, action) => state(현재 상태 값)
    //                    action(촉발함수 dispatch() 로 전달되는 객체{type:"...", data:...} 형식)
    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "INIT":
            return 0;
        default:
            return state;
        
    }
}
function TestComp() {
    const[count, dispatch] = useReducer(reducer,0);
    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <h5>{count}</h5>
            <button onClick={() => dispatch({type:"INCREASE", data:1})} >+</button>
            <button onClick={() => dispatch({type:"DECREASE", data:1})} >-</button>
            <button onClick={() => dispatch({type:"INIT"})} >0</button>
        </div>
    );
}
export default TestComp;