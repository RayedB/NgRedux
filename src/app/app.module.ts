import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppComponent } from './app.component';

import { rootReducer, IAppState, INITIAL_STATE } from '../store';
import { CounterActions } from './app.actions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
  ],
  providers: [
    CounterActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

    const storeEnhancers = devTools.isEnabled() ? // <- New
      [ devTools.enhancer() ] : // <- New
      [];

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancers
    );
  }
 }
