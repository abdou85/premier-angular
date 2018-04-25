import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ApiService {
  phones = [{ n: 's8plus', p: 3000 }, { n: 'note8', p: 2100 }];
  constructor(private http: Http) { }
  GetPhones() {
    return this.phones;
    //
  }
  getWeather(city, country) {
    return   this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' +
  country + '&appid=17b1c8913b68544be214a35bf9a3b227');
  }
}
