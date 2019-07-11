import { Component, OnInit } from "@angular/core";
import { select, NgRedux } from "@angular-redux/store";
import { IAppState } from "../redux/store";
import { REMOVE_ALL_TODOS } from "../redux/actions/actions";

@Component({
  selector: "app-todo-overview",
  templateUrl: "./todo-overview.component.html",
  styleUrls: ["./todo-overview.component.scss"]
})
export class TodoOverviewComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {}

  clearTodos() {
    this.ngRedux.dispatch({ type: REMOVE_ALL_TODOS });
  }
}
