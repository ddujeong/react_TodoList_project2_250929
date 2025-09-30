import "./TodoItem.css";

function TodoItem({id, content,isDone, createDate, onUpdate, onDelete}) {
    const onChangeCheckbox = () => {
        onUpdate(id);
    }
    const onClickDelete = () => {
        onDelete(id);
    };
    return(
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" checked={isDone} onChange={onChangeCheckbox}></input>
            </div>
            <div className="title_col">{isDone === false ?content : content+" 완료!"}</div>
            <div className="date_col">{new Date(createDate).toLocaleDateString().substring(0,11) }</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}
export default TodoItem;