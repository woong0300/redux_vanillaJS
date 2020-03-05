import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function Detail({ toDo, onDetailBtnClick }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      <Link to={"/"}>
        <button onClick={onDetailBtnClick}>Del</button>
      </Link>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return {
    onDetailBtnClick: () => dispatch(actionCreators.deleteToDo(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
