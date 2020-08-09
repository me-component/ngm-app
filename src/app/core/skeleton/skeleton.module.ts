import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SkeletonComponent } from './skeleton/skeleton.component'
import { SkeletonHeaderComponent } from './skeleton-header/skeleton-header.component'
import {RouterModule} from '@angular/router'
import {DynamicPortalModule} from '@gewd/ng-utils/dynamic-portal'



@NgModule({
  declarations: [
    SkeletonComponent,
    SkeletonHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DynamicPortalModule
  ],
  exports: [
    SkeletonComponent,
    SkeletonHeaderComponent,
    DynamicPortalModule
  ]
})
export class SkeletonModule { }
