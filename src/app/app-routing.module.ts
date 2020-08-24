import { NgModule } from '@angular/core'
import {
  Routes,
  RouterModule,
} from '@angular/router'
import {IndexComponent} from '@pages/index/index.component'
import {AdvRouteMatcher} from '@core/ng-advanced-router-matcher'
import {AboutComponent} from '@pages/about/about.component'

const routes: Routes = [
  {
    // path: '',
    matcher: AdvRouteMatcher('/user/:bar/:id(\\d+)'),
    // pathMatch:'full', // prefix
    component: IndexComponent,
    children: [
        {
        path: 'mirror',
        component: AboutComponent
        }
      ],
    data: {
      title: 'Главная',
      faIconName: 'fa-edit',
      faIconColor: '#ffe764',
      placeholder: '',
      hasMain: false,
      visible: true,
      isLinkNative: false,
    }
  },
  {
    path: '**',
    redirectTo: '/',
    data: {
      title: '404',
      faIconName: '',
      faIconColor: '#fff',
      placeholder: '',
      hasMain: false,
      visible: false,
      isLinkNative: false,
      isDinamic: false,
      targetLink: '_blank',
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
