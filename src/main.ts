import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';
import { CustomTitleStrategy, APP_ROUTES } from './app/app-routing';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { TagCanvasModule } from 'ng-tagcanvas';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(APP_ROUTES, { useHash: true }),
      TagCanvasModule.forRoot(),
      BrowserAnimationsModule,
      HttpClientModule
    ),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy
    }
  ]
}).catch((err) => console.error(err));
