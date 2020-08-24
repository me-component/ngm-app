import {
  UrlSegment,
  Route,
  UrlSegmentGroup
} from '@angular/router'
import {
  mapObjIndexed as RMap,
  isEmpty as RIsEmpty
} from 'ramda'
import {pathToRegexp, match, parse, compile, MatchResult} from 'path-to-regexp'

interface PosParams {
  [key: string]: UrlSegment
}

export const AdvRouteMatcher = (router: string) => {
  return (segments: UrlSegment[], segmentGroup: UrlSegmentGroup, route: Route) => {

    let currentIndex = 0
    let params
    let consumed: UrlSegment[] = []

    console.log('route', route)

   /* let countSegmentsPattern: number = parse(router).length
    if (countSegmentsPattern < segments.length) {
      consumed = segments.slice(0, countSegmentsPattern)
    }*/


    console.log('segments', segments)
    // @ts-ignore
    segmentGroup = new  UrlSegmentGroup(segments, route.children)
    console.log('segmentGroup.hasChildren()', segmentGroup.hasChildren())


/*

    if (
      route.pathMatch === 'full' ||
      (segmentGroup.hasChildren() || currentIndex < segments.length)) {
      return null
    }
*/




    let url = '/' + segments.map(i => i.path).join('/')
    console.log('url', url)
    const _match = match(router, { decode: decodeURIComponent })
    const resultMatch: MatchResult<object> | boolean = _match(url)

    console.log('resultMatch', resultMatch)
    if (resultMatch !== false) {
      params = RMap((v, key) => {
        let urls: UrlSegment = new UrlSegment(v, {})
        return urls
      }, resultMatch.params)
    } else {

      return null
    }


    if (!RIsEmpty(params)) {
      return {
        consumed: segments,
        posParams: params,
      }
    }

  }
}



///  matcher: ComplexUrlMatcher('id', /[0-9]+/),

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
