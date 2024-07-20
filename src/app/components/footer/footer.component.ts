import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { SocialMediaProfiles } from '../../constants';
import { ISocialMediaLinks } from '../../interfaces';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentYear!: number;
  public links!: ISocialMediaLinks[];

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.links = SocialMediaProfiles;
  }
}
