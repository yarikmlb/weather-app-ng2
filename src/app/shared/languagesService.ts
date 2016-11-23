import { Injectable } from '@angular/core';

@Injectable()
export class LanguagesService {

  getLanguages() {
    let browserLang = window.navigator.language;
    let lang = '';
    if ( browserLang === 'en' || browserLang === 'en-US' ) {
      lang = 'en';
    }else if ( browserLang === 'uk' || browserLang === 'ua' ) {
      lang = 'ua'
    }
    return lang;
  }
}
