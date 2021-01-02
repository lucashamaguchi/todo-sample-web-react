import { connect, DispatchProp } from "react-redux";
import { Component } from "react"
import * as types from "../store/types";
import actions from "../store/actions";

interface Todo {
  _id: string;
  task: string;
}

interface TodosProps {
  todos: Todo[],
  
}

export class TodoComponent extends Component<DispatchProp & TodosProps> {
  constructor(props: any, todos: Todo[]) {
    super(props);
  }

  refreshTodos() {
    this.props.dispatch(actions[types.TODO_LIST]());
  }

  componentDidMount() {
    this.refreshTodos();
  }

  render() {
    return (
      <div>
        <button onClick={this.refreshTodos.bind(this)}>
          Refresh Todos
        </button>
        {this.props.todos.map(
          todo => (
            <div key={todo._id}>
              { todo.task }
            </div>
          )
        )}
      </div>
    )  
  }
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.getters[types.TODO_LIST]
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch: (action: any) => dispatch(action),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoComponent);
