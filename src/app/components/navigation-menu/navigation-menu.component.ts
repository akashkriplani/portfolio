import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavMenuItems } from '../../constants';
import { INavMenuItems } from '../../interfaces';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  navMenuItems: INavMenuItems[] = NavMenuItems;
  constructor() {}

  ngOnInit(): void {}
}
