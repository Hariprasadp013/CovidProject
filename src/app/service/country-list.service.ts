import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  constructor() { }

  fetchCountryList(){
  	fetch("https://covid-19-data.p.rapidapi.com/help/countries?format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "gtEygeJHGTmshk2ZAZhttVGn7Qgbp1h8HmHjsn3XIP4kj57IIV"
		}
	})
	.then(response => {
		console.log(response);
	})
	.catch(err => {
		console.log(err);
	});

  	
 }
 
}
