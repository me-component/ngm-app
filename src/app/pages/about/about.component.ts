import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  constructor (private activateRoute: ActivatedRoute) {

    console.log('AboutComponent', activateRoute.snapshot.params)
  }

  ngOnInit (): void {
  }

}
