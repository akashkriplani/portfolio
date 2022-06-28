import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CommonModule } from '@angular/common';

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
    SpinnerComponent,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'portfolio-angular';
  loading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
