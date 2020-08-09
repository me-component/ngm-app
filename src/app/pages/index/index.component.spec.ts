import { Spectator, createComponentFactory } from '@ngneat/spectator/jest'

import { IndexComponent } from './index.component'

describe('IndexComponent', () => {
  let spectator: Spectator<IndexComponent>
  const createComponent = createComponentFactory(IndexComponent)

  it('should create', () => {
    spectator = createComponent()

    expect(spectator.component).toBeTruthy()
  })
})
