import { connect, useDispatch } from "react-redux";
import { useEffect } from "react"
import * as types from "../store/types";
import actions from "../store/actions";

interface Todo {
  _id: string;
  task: string;
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.getters[types.TODO_LIST]
  }
}

const _Todos = ({ todos }: { todos: Todo[] }) => {
  const dispatch = useDispatch();

  const refreshTodos = () => {
    dispatch(actions[types.TODO_LIST]());
  };

  useEffect(refreshTodos, [dispatch]);

  return (
    <div>
      <button onClick={refreshTodos}>
        Refresh Todos
      </button>
      {todos.map(todo => (
        <div key={todo._id}>
          { todo.task }
        </div>
      )
    )}
    </div>
  )
}

export default connect(
  mapStateToProps,
  {},
)(_Todos);
