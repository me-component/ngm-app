import { Component } from '@angular/core'
import { environment as env } from 'src/environments/environment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = env.TITLE

  version: string = env.VERSION

  isTrue (arg = null): boolean {

    return (arg > 2) ? true : false
  }
}
