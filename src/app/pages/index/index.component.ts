import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {

  constructor () {

  }


  title: string = 'ПРивет'
  ngOnInit (): void {
  }

}
