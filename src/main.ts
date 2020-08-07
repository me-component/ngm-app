import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import 'reflect-metadata'
import { AppModule } from './app/app.module'
import { environment } from '@env/environment'


if (environment.production) {
  enableProdMode()
}
environment.VERSION = `'${VERSION}'`
environment.ALIAS_NAME = `'${ALIAS_NAME}'`


console.log(
  `%c ${ALIAS_NAME} %c  v${VERSION } %c`,
  'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
  'background:#bada55 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #222;',
  'background:transparent'
)


document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err))
})

