import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

let component
let componentDOM

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
  })

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    componentDOM = fixture.nativeElement
  })


  it('should create the app', () => {
    /*const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance*/
    expect(component).toBeTruthy()
  })

  it('shold return true method isTrue', () => {
    expect(component.isTrue(4)).toBe(true)
  })

  it(`should have as title 'app-with-jest'`, () => {
    expect(component.title).toEqual('app-with-jest')
  })

  it('should render title', () => {

    expect(componentDOM.querySelector('.title span').textContent)
      .toContain('app-with-jest app is running!')
  })

  it('jest matcher one of', () => {
    expect(1).toBeOneOf([1, 2])
    expect([]).toEqual(expect.toBeArray())
  })
})
