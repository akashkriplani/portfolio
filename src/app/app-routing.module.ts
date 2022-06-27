import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Portfolio - ${title}`);
    } else {
      this.title.setTitle(`Portfolio - Home`);
    }
  }
}

export const routes: Routes = [];
