import { NgModule } from '@angular/core'
import {
  Routes,
  RouterModule,
  UrlSegment,
  Route,
  UrlSegmentGroup
} from '@angular/router'
import {IndexComponent} from '@pages/index/index.component'

export function ComplexUrlMatcher (paramName: string, regex: RegExp) {
  return (
    segments: UrlSegment[],
    segmentGroup: UrlSegmentGroup,
    route: Route) => {

    const parts = [regex]
    const posParams: { [key: string]: UrlSegment } = {}
    const consumed: UrlSegment[] = []

    let currentIndex = 0

    // tslint:disable-next-line:prefer-for-of
    for (let i:number = 0; i < parts.length; ++i) {
      if (currentIndex >= segments.length) {
        return null
      }
      const current = segments[currentIndex]

      const part = parts[i]
      if (!part.test(current.path)) {
        return null
      }

      posParams[paramName] = current
      consumed.push(current)
      currentIndex++
    }

    if (route.pathMatch === 'full' &&
      (segmentGroup.hasChildren() || currentIndex < segments.length)) {
      return null
    }

    return { consumed, posParams }
  }
}

const myMatcher =
  (segments: UrlSegment[], group: UrlSegmentGroup, route: Route) => {
    console.log('myMatcher')
    console.log('url', segments)
    console.log('group', group)
    console.log('route', route)

    return {
      consumed: segments,
      posParams: {
        id: segments[0]
      }
    }
    return null
  }

const routes: Routes = [
  {
    // path: '',
    matcher: ComplexUrlMatcher('id', /[0-9]+/),
    component: IndexComponent,
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
/*  {
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
  }*/
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
