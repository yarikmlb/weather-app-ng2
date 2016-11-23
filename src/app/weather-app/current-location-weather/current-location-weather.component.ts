import { Component } from '@angular/core';
import {GeolocationService} from '../../shared/geolocation.service';
import {WeatherService} from '../../shared/weather.service';

@Component({
  selector: 'weather-current-location',
  templateUrl: 'current-location-weather.component.html',
  styleUrls: ['current-location-weather.component.css']
})
export class CurrentLocationWeatherComponent {
  private latitude: number;
  private longitude: number;
  private weather: any = {};
  private country: string;
  private skyImage: string;
  private sunset: number;
  private sunrise: number;

  constructor( private _geoLocationService: GeolocationService, private _weatherService: WeatherService ) {
    this.setLocation();
  }

  setLocation() {
    this._geoLocationService.getLocation().subscribe((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      return this._weatherService.getWeatherByCoord(this.latitude, this.longitude).subscribe(
        (data) => { this.weather = data.json(); },
        (error) => { error.json(); },
        () => {
          console.log(this.weather);
          this.country = this.weather.sys.country;
          this.sunset = this.weather.sys.sunset;
          this.sunrise = this.weather.sys.sunrise;
          this.skyImage = 'https:/openweathermap.org/img/w/' + this.weather.weather[0].icon + '.png';
      });
    });
  }
}
