import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-with-jest'


  isTrue (arg = null): boolean {

    return (arg > 2) ? true : false
  }
}
