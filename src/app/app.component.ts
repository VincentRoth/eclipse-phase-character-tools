import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  version = environment.version;

  languages: string[] = ['en', 'fr'];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang('en');
    const browserLanguage = this.translate.getBrowserLang();
    if (this.languages.indexOf(browserLanguage) !== -1) {
      this.translate.use(browserLanguage);
    }
  }

  changeLanguage(language: string) {
    if (this.languages.indexOf(language) !== -1) {
      this.translate.use(language);
    }
  }

}
