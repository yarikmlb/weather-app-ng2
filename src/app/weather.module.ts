import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './weather.component';
import { routing } from './shared/routing';
import { CurrentWeatherComponent } from './weather-app/weather-content/current-weather/current-weather.component';
import { WeatherService } from './shared/weather.service';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { SidebarComponent } from './weather-app/sidebar/sidebar.component';
import { HeaderSearchComponent } from './weather-app/header-search/header-search.component';
import { FiveDaysComponent } from './weather-app/weather-content/five-days-weather/five-days.component';
import { MapComponent } from './weather-app/weather-content/weather-map/map.component';
import { GeolocationService } from './shared/geolocation.service';
import { CurrentLocationWeatherComponent } from './weather-app/current-location-weather/current-location-weather.component';
import { PressureTransformPipe } from './shared/pressure-transform.pipe';
import { WindLinePipe } from './shared/wind-line.pipe';
import {LanguagesService} from './shared/languagesService';
import {MomentModule} from 'angular2-moment';
import { SanitizeStylePipe } from './shared/sanitize-style.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    WeatherAppComponent,
    SidebarComponent,
    HeaderSearchComponent,
    FiveDaysComponent,
    MapComponent,
    CurrentLocationWeatherComponent,
    PressureTransformPipe,
    WindLinePipe,
    SanitizeStylePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MomentModule
  ],
  providers: [
    WeatherService,
    GeolocationService,
    LanguagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
