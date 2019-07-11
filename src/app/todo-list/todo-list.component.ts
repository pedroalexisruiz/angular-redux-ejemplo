import { Component, OnInit } from "@angular/core";
import { select, NgRedux } from "@angular-redux/store";
import { ITodo } from "../redux/domain/model/todo";
import { IAppState } from "../redux/store";
import { addTodo, toggleTodo, removeTodo } from "../redux/actions/actions";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  @select() todos;
  todo: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  };

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {}

  onSubmit() {
    this.ngRedux.dispatch(addTodo(this.todo));
  }

  toggleTodo() {
    this.ngRedux.dispatch(toggleTodo(this.todo.id));
  }

  removeTodo() {
    this.ngRedux.dispatch(removeTodo(this.todo.id));
  }
}
