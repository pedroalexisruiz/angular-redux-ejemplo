import { ITodo } from "../domain/model/todo";

export interface IAction {
  type: string;
  payload: any;
}

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const REMOVE_ALL_TODOS = "REMOVE_ALL_TODOS";

export const addTodo = (todo: ITodo): IAction => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleTodo = (todoId: number): IAction => {
  return {
    type: TOGGLE_TODO,
    payload: todoId
  };
};

export const removeTodo = (todoId: number): IAction => {
  return {
    type: REMOVE_TODO,
    payload: todoId
  };
};

export const removeAllTodos = (): IAction => {
  return {
    type: REMOVE_ALL_TODOS,
    payload: null
  };
};
