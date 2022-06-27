import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    ContentComponent,
    FooterComponent,
    NavigationMenuComponent,
  ],
})
export class AppComponent {
  title = 'portfolio-angular';
}
