import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  private citiesUrl = 'http://localhost:8080/api/cities';

  public getCities() {
    return this.http.get(this.citiesUrl);
  }

  public getCity(cityId) {
    return this.http.get(this.citiesUrl + '/' + cityId);
  }

  public addCity(city) {
    return this.http.post(this.citiesUrl, city);
  }

  public updateCity(city) {
    return this.http.put(this.citiesUrl, city);
  }

  public deleteCity(cityId) {
    return this.http.delete(this.citiesUrl + '/' + cityId);
  }
}
