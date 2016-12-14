import { Component } from '@angular/core';
import { WeatherService } from '../../../shared/weather.service';

@Component({
  selector: 'weather-current',
  templateUrl: 'current-weather.component.html',
  styleUrls: ['current-weather.component.css']
})
export class CurrentWeatherComponent {

  constructor(private _weatherService: WeatherService) {}

  getWeather() {
    return this._weatherService.currentWeather;
  }
}
