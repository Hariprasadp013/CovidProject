import { Component, OnInit } from '@angular/core';
import { GetCountrydataService } from './../service/get-countrydata.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
	
  country: string="";

  confirmed: number = 0;
  active : number = 0;
  deaths : number = 0;
  recovered : number = 0;


  constructor(private getCountrydataService: GetCountrydataService) { }

  ngOnInit(): void {
  }

  searchCountry(){
  	console.log("inside js:",this.country);
  	this.getCountrydataService.getCountryWiseCovidData(this.country).subscribe(
  	response => this.extractCountryData(response));
  }

  extractCountryData(response){

  	console.log(response);
  	console.log(response[response.length-1]);
  	//console.log(response[response.length-1]["Country"]);
  	console.log(response[response.length-1]["Confirmed"]);

  	this.confirmed = response[response.length-1]["Confirmed"];
  	this.active = response[response.length-1]["Active"];
  	this.deaths = response[response.length-1]["Deaths"];
  	this.recovered = response[response.length-1]["Recovered"];
  	

  }

}
