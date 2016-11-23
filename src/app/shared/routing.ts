import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {WeatherAppComponent} from '../weather-app/weather-app.component';
import {CurrentWeatherComponent} from '../weather-app/weather-content/current-weather/current-weather.component';
import {FiveDaysComponent} from '../weather-app/weather-content/five-days-weather/five-days.component';
import {MapComponent} from '../weather-app/weather-content/weather-map/map.component';

const appRoutes: Routes = [
  {path: '', component: WeatherAppComponent, children: [
    {path: '', redirectTo: 'currentWeather', pathMatch: 'full'},
    {path: 'currentWeather', component: CurrentWeatherComponent},
    {path: '5DaysWeather', component: FiveDaysComponent},
    {path: 'mapWeather', component: MapComponent}
  ]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
