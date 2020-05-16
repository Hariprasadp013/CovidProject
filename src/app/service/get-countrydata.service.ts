import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class CovidDataBean{
	constructor(private globalData: Global, private countries: Countries[], private date : Date){

	}
}
export class Global{
	constructor(private NewConfirmed: number,
				private TotalConfirmed: number,
				private NewDeaths: number,
				private TotalDeaths: number,
				private NewRecoverd: number,
				private TotalRecovered: number){

	}
}
export class Countries{
	constructor(private Country: string,
				private CountryCode: string,
				private Slug: string,
				private NewConfirmed: string,
				private TotalConfirmed: string,
				private NewDeaths: string,
				private TotalDeaths: string,
				private NewRecovered: string,
				private TotalRecovered: string,
				private Date:Date
				){

				 }
}

@Injectable({
  providedIn: 'root'
})
export class GetCountrydataService {



  constructor(private http:HttpClient) { }

  getCountryData(){

        return this.http.get<CovidDataBean>('https://api.covid19api.com/summary');

 	}
}
