import { Component, OnInit } from '@angular/core';
import { NgFor, UpperCasePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-dropdown',
  standalone: true,
  imports: [NgFor, UpperCasePipe],
  templateUrl: './lang-dropdown.component.html',
  styleUrls: ['./lang-dropdown.component.scss']
})
export class LangDropdownComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'hi', 'es']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}
