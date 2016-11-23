import { Component } from '@angular/core';
import { WeatherService } from '../../../shared/weather.service';

@Component({
  selector: 'weather-current',
  templateUrl: 'current-weather.component.html',
  styleUrls: ['current-weather.component.css']
})
export class CurrentWeatherComponent {
  private currentWeather: {} = {};

  constructor(private _weatherService: WeatherService) {}

  getWeather() {
    this.currentWeather = this._weatherService.currentWeather;
    return this.currentWeather;
  }
}
