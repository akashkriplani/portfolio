import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';
import { CustomTitleStrategy, routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes), BrowserAnimationsModule),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ],
}).catch((err) => console.error(err));
