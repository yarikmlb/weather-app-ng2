import { Component } from '@angular/core';
import { WeatherService } from '../../../shared/weather.service';

@Component({
  selector: 'weather-five-days',
  templateUrl: 'five-days.component.html',
  styleUrls: ['five-days.component.css']
})
export class FiveDaysComponent {
  private _fiveDaysWeather: {} = {};
  private _lists = [];

  constructor( private _weatherService: WeatherService) {
    this.getWeather();
  }

  getWeather() {
    this._fiveDaysWeather = this._weatherService.fiveDaysWeather;
    this.getList(this._fiveDaysWeather);
    return this._fiveDaysWeather;
  }

  getList(lists) {
    this._lists = lists.list;
    console.log(this._lists);
  }
}
