import { Component, OnInit } from '@angular/core';
import { GetCountrydataService } from './../service/get-countrydata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  newConfirmed = "";
  totalConfirmed = "";
  newDeaths = "";
  totalDeaths = "";
  newRecovered = "";
  totalRecovered = "";

  constructor(private getCountrydataService: GetCountrydataService) { }

  ngOnInit(): void {
    this.searchData();
  }

  handleSuccessfulResponse(response){

    console.log(response);
   
    console.log(response.Global);
    console.log(response.Global.NewConfirmed);
    this.newConfirmed = response.Global.NewConfirmed;
    this.totalConfirmed = response.Global.TotalConfirmed;
    this.newDeaths = response.Global.NewDeaths;
    this.totalDeaths = response.Global.TotalDeaths;
    this.newRecovered = response.Global.NewRecovered;
    this.totalRecovered = response.Global.TotalRecovered;
  }

   searchData (){
   console.log("Inside searchData ");
   //console.log(this.getCountrydataService.getCountryData());

   this.getCountrydataService.getCountryData().subscribe(

     response => (this.handleSuccessfulResponse(response))
     //response => console.log(response)
   );

  }

  

 


}
