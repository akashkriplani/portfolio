import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Renderer2,
  ViewChild
} from '@angular/core';
import { NgFor } from '@angular/common';
import Blast from 'blast-vanilla';
import { TimelineDirective } from '../../directives/timeline.directive';
import { EXPERIENCES } from '../../constants';
import { IExperience } from '../../interfaces';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, TimelineDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChild('title') titlePieces!: ElementRef;
  experience: IExperience[] = EXPERIENCES;

  private renderer = inject(Renderer2);

  ngAfterViewInit() {
    new Blast('h1', {
      returnGenerated: true,
      delimiter: 'character',
      tag: 'span',
      search: false,
      customClass: '',
      aria: true,
      debug: false,
      name: 'blast'
    });

    let elements: HTMLCollection = this.titlePieces.nativeElement.children;
    let timer = 0;
    for (const element of Array.from(elements)) {
      setTimeout(() => {
        this.renderer.addClass(element, 'animated');
        this.renderer.addClass(element, 'bounceIn');
      }, timer);

      timer += 100;

      setTimeout(() => {
        this.renderer.removeClass(element, 'animated');
        this.renderer.removeClass(element, 'bounceIn');
        this.renderer.setStyle(element, 'opacity', 1);
        element.addEventListener('mouseenter', () => {
          this.renderer.addClass(element, 'animated');
          this.renderer.addClass(element, 'rubberBand');
        });
        element.addEventListener('mouseleave', () => {
          this.renderer.removeClass(element, 'animated');
          this.renderer.removeClass(element, 'rubberBand');
        });
      }, 1500);
    }
  }
}
