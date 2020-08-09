import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonComponent implements OnInit {

   isvisible: boolean = true
  body
  constructor () { }

  ngOnInit (): void {
  }

}
