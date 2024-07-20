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
import { TagCanvasModule, TagCanvasOptions } from 'ng-tagcanvas';
import { SocialMediaProfiles, TAGS, TAG_CANVAS_OPTIONS } from '../../constants';
import { ITag } from '../../interfaces';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, TagCanvasModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('title') titlePieces!: ElementRef;

  linkedin = SocialMediaProfiles.filter(
    (x) => x.title.toLowerCase().trim() == 'linkedin'
  )[0];

  options: TagCanvasOptions = TAG_CANVAS_OPTIONS;
  tags: ITag[] = TAGS;

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
