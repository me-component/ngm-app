import { BrowserModule, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { VueEventModifiersPlugin } from '@core/vue-event-modifiers/vue-event-modifiers.plugin'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common'

// PAGE
import {NotFoundComponent} from '@pages/not-found.component'
import {IndexComponent} from '@pages/index/index.component'
import {SkeletonModule} from '@core/skeleton/skeleton.module'
// END PAGE

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production}),
    CommonModule,
    SkeletonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: EVENT_MANAGER_PLUGINS,
      useClass: VueEventModifiersPlugin,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
