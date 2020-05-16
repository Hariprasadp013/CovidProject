import { Component, OnInit } from '@angular/core';
import { GetCountrydataService } from './../service/get-countrydata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  

  constructor(private getCountrydataService: GetCountrydataService) { }

  ngOnInit(): void {
  }

  handleSuccessfulResponse(response){

    console.log(response);
    console.log(response.globalData);
    console.log(response.globalData.NewConfirmed);
  }

   searchData (){
   console.log("Inside searchData ");
   console.log(this.getCountrydataService.getCountryData());

   this.getCountrydataService.getCountryData().subscribe(

     response => (this.handleSuccessfulResponse(response))
     //response => console.log(response)
   );

  }

  

 


}
