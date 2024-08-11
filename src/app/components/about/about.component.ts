import { Component } from '@angular/core';
import { TagCanvasModule, TagCanvasOptions } from 'ng-tagcanvas';
import { AnimateComponent } from '../animate/animate.component';
import { ITag } from '../../interfaces';
import { SocialMediaProfiles, TAGS, TAG_CANVAS_OPTIONS } from '../../constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TagCanvasModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends AnimateComponent {
  linkedin = SocialMediaProfiles.filter(
    (x) => x.title.toLowerCase().trim() == 'linkedin'
  )[0];

  options: TagCanvasOptions = TAG_CANVAS_OPTIONS;
  tags: ITag[] = TAGS;
}
