import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuItems } from '../../constants';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  navMenuItems: string[] = NavMenuItems;
  currentIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
