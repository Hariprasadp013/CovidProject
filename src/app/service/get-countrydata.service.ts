import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCountrydataService {



  constructor(private http:HttpClient) { }

  getCountryData(){
        return this.http.get('https://api.covid19api.com/summary');
 	}

 	getCountryWiseCovidData(country){
 		return this.http.get(`https://api.covid19api.com/total/country/${country}`);
 	}
}
