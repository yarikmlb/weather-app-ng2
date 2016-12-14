import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {LanguagesService} from './languagesService';

@Injectable()
export class WeatherService {
  public currentWeather: {} = {};
  public fiveDaysWeather: {} ={};

  constructor(private _http: Http, private _languagesService: LanguagesService) {}

  getCurrentWeather(cityName: string) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?' +
      'appid=dba7f76d026ee86d564d2bc71b790d20&units=metric&q=' + cityName).subscribe((data) => {
      this.currentWeather = data.json();
    });
  }

  getFiveDaysWeather(cityName: string) {
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?' +
      'appid=dba7f76d026ee86d564d2bc71b790d20&units=metric&q=' + cityName).subscribe((data) => {
      this.fiveDaysWeather = data.json();
    });
  }

  getWeatherByCoord(lat: number, lon: number) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?' +
      'appid=dba7f76d026ee86d564d2bc71b790d20&units=metric&lat=' + lat + '&lon=' + lon + '&lang=' + this._languagesService.getLanguages());
  }
}
