import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  city;
  country;
  data;
  name: string;
  price: number;
  b = true;
  myPhone = ' s8plus ';
  phones;
  // = [ {n: 's8plus' , p: 3000}, {n: 'note8' , p : 2100} ];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.phones = this.apiService.GetPhones();
  }
  addBtn() {
    this.phones.push({ n: this.name, p: this.price });
  }
  SwitchBtn() {
    this.b = !this.b;
  }
  getWeatherBtn() {
    this.apiService.getWeather(this.city, this.country).subscribe(res => {
      console.log(res.status);
      console.log(res.json().weather[0].description);
      this.data = res.json().weather[0].description;
    });

    console.log('weather btn presed');


  }
}
