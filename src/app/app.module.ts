import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IAppState, rootReducer, DEFAULT_STATE } from "./redux/store";
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TodoOverviewComponent, TodoListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, DEFAULT_STATE);
  }
}
