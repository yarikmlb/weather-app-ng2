import { Component } from '@angular/core';
import { WeatherService } from '../../shared/weather.service';

@Component({
  selector: 'weather-header-search',
  templateUrl: 'header-search.component.html',
  styleUrls: ['header-search.component.css']
})
export class HeaderSearchComponent {

  constructor( private _currentWeatherService: WeatherService) {}

  setCurrentCity(cityName) {
    this._currentWeatherService.getCurrentWeather(cityName);
  }
}
