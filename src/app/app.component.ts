import { Component, inject, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet
} from '@angular/router';
import { DynamicScriptService } from './services/dynamic-script.service';
import { FontService } from './services/font.service';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    RouterOutlet,
    NgIf,
    NavigationMenuComponent,
    SpinnerComponent
  ]
})
export class AppComponent implements OnInit {
  loading = true;

  private dsService = inject(DynamicScriptService);
  private fontService = inject(FontService);
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.navigationInterceptor(event as RouterEvent);
    });

    this.fontService.loadFonts();
    this.loadScripts();
  }

  loadScripts = async (): Promise<void> => {
    try {
      await this.dsService.load('jquery');
      await this.dsService.load('skills');
    } catch (error) {
      console.error(error);
    }
  };

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        // here
        this.loading = false;
      }, 2000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => {
        // here
        this.loading = false;
      }, 2000);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => {
        // here
        this.loading = false;
      }, 2000);
    }
  }
}
