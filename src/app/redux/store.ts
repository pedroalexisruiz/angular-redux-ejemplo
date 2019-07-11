import { ITodo } from "./domain/model/todo";
import * as Actions from "./actions/actions";

export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
}

export const DEFAULT_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};

export const rootReducer = (state: IAppState, action: Actions.IAction) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return addTodo(state, action.payload);
    case Actions.TOGGLE_TODO:
      return toggleTodo(state, action.payload);
    case Actions.REMOVE_TODO:
      return removeTodo(state, action.payload);
    case Actions.REMOVE_ALL_TODOS:
      return removeAllTodos(state);
  }
  return state;
};

const addTodo = (state: IAppState, todo: ITodo) => {
  todo.id = state.todos.length + 1;

  return Object.assign({}, state, {
    todos: state.todos.concat(Object.assign({}, todo)),
    lastUpdate: new Date()
  });
};

const toggleTodo = (state: IAppState, todoId: number) => {
  const todo = state.todos.find(todo => todo.id === todoId);
  const index = state.todos.indexOf(todo);

  return Object.assign({}, state, {
    todos: [
      ...state.todos.slice(0, index),
      Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
      ...state.todos.slice(index + 1)
    ],
    lastUpdate: new Date()
  });
};

const removeTodo = (state: IAppState, todoId: number) => {
  return Object.assign({}, state, {
    todos: state.todos.filter(todo => todo.id !== todoId),
    lastUpdate: new Date()
  });
};

const removeAllTodos = (state: IAppState) => {
  return Object.assign({}, state, {
    todos: [],
    lastUpdate: new Date()
  });
};
