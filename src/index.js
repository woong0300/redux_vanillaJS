import { createStore } from "redux";
//Store란 state, data를 넣어놓기 위함
//state는 app에서 변화가 있는 데이터를 일컫는다.
//Redux는 데이터를 관리하는 것을 도와주기 위해 만들어졌다.

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer, modifier란 데이터를 modify하고 그것을 return하는 함수다
//그 데이터를 우리의 app의 있는 데이터이며 우리 app은 리턴데이터를 갖게됨.
//우리의 데이터를 변형시킬 수 있는 유일한 파트를 몰아놨다고 생각.
const countModifier = (count = 0, action) => {
  if (action.type === "Add") {
    console.log(count);
    return count + 1;
  } else if (action.type === "Minus") {
    console.log(count);
    return count - 1;
  } else {
    console.log(count);
    return count;
  }
};

const countStore = createStore(countModifier);
//redurcer에게 밖에서 전달하는 방법
const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "Add" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "Minus" });
};
plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// 이렇게 걍 handler없이 쓸 수 있다.
// plus.addEventListener("click", () => countStore.dispatch({ type: "Add"}));
// minus.addEventListener("click", () => countStore.dispatch({ type: "Minus"}));

console.log(countStore.getState());
