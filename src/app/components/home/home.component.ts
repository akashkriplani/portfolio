import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AnimateComponent } from '../animate/animate.component';
import { DynamicScriptService } from '../../services/dynamic-script.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent
  extends AnimateComponent
  implements OnInit, OnDestroy
{
  override animationDelay: number = 3300;
  screenWidth!: number;

  private dsService = inject(DynamicScriptService);

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 768) {
      this.dsService
        .load('oscillator')
        .then(() => {
          this.oscillate(false);
        })
        .catch((error) => console.log(error));
    }
  }

  oscillate(value: boolean) {
    (window as any).initOscillator(value);
  }

  ngOnDestroy(): void {
    // Remove all the event listeners oscillating in background.
    if (typeof (window as any).initOscillator !== 'undefined') {
      this.oscillate(true);
    }
  }
}
