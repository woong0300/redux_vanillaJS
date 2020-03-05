import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
/*
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

//Redux를 이용한 ToDos의 관리.
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  };
};
const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};
//Mutate를 하면 안되기 떄문에 split이 아니라 filter를 쓴다.
const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = ""; //state전체를 다시 그려서 중복된다.이를 방지
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "del";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);
//state is read-only!!
// store의 state를 변형시키는 유일한 방법은 action을 사용하는 것!!
//Never Mutate State!!
//Not Mutate,(modify하는 것이 아니라) Return new object, new state
// return [...state, { text: action.text}];
// return state.push(action.text); 이런 방식은 안된다!!

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);

//Store란 state, data를 넣어놓기 위함
//state는 app에서 변화가 있는 데이터를 일컫는다.
//Redux는 데이터를 관리하는 것을 도와주기 위해 만들어졌다.

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer, modifier란 데이터를 modify하고 그것을 return하는 함수다
//reducer가 리턴하는 것은 무엇이든 간에 app의 state가 된다.
//우리의 데이터를 변형시킬 수 있는 유일한 파트를 몰아놨다고 생각.

//String을 쓸 때 오타로 인해 실수가 있을 수 있으니 const로 지정!!
//또한 String으로 쓸 경우, 오류로 뜨질 않아서 찾기가 힘들다.
const ADD = "Add";
const MINUS = "Minus";
//Reducer는 current state와 action으로 호출된다.
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
//Redux는 이 경우에 Switch구문을 많이 쓴다.
//   if (action.type === "Add") {
//     console.log(count);
//     return count + 1;
//   } else if (action.type === "Minus") {
//     console.log(count);
//     return count - 1;
//   } else {
//     console.log(count);
//     return count;
//   }

//Store에 change를 알고 싶으면 Subscribe!! 구독!!
const countStore = createStore(countModifier);
//redurcer에게 밖에서 전달하는 방법
const onChange = () => {
  number.innerText = countStore.getState();
};

//Dispatch는 리듀서를 불러서 currnet state와 사용자가 보낸 action를 더해
//action은 object여야 하며 string은 X, action은 또한 type을 가져야된다.

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};
plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// 이렇게 걍 handler없이 쓸 수 있다.
// plus.addEventListener("click", () => countStore.dispatch({ type: "Add"}));
// minus.addEventListener("click", () => countStore.dispatch({ type: "Minus"}));

console.log(countStore.getState());
*/
