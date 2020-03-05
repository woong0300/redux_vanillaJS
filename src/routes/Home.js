import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}
//물론 store.dispatch를 직접 다룰 수도 있지만 아래를 통해 분리할 수 있다.
//이걸 통해 Home Component에서 직접 Actioncreator나 dispatch를 직접 안 다룬다.
function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default connect(null, mapDispatchToProps)(Home);
//이런 식으로 하나씩 쓸 수 있어.

//React-Redux의 핵심 Connect() - Store와 Component의 연결
//store.getState()를 하는 방법인거지
//이를 통해서 store에서 Home으로 state를 전달해줄 수 있다.
// mapStateToProps함수 store에서 온 state와 Component의 prop을 연결
//react-router에 의해서 전달됬다.
//connect함수는 react-router로부터 받은 component의 prop에 추가할 수 있게 해줘
