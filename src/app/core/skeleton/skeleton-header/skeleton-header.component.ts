import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'skeleton-header',
  templateUrl: './skeleton-header.component.html',
  styleUrls: ['./skeleton-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonHeaderComponent implements OnInit {

  constructor () { }

  ngOnInit (): void {
  }

}
