import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Insuranceinfo } from './insuranceinfo';



@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
states =['Andhra Pradesh', 'Andaman and Nicobar Islands', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadar and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];

categories =['Mobile', 'Laptop'];
brands =['Apple', 'Dell', 'Lenovo', 'Samsung', 'Sony'];
lapimodel =['i-phone', 'Dell-5 generation', 'Lenovo', 'Samsung- galaxy', 'Sony vio'];
insurances = ['Gold', 'platinum', 'Silver', 'long term'];

policetyp =  ['montly', 'six-month', 'yearly'];

programtypes = ['long term', 'short term', '15 years'];


  model = new Insuranceinfo('', this.states[1], '', '', '', '', this.categories[0], '', this.brands[0], this.lapimodel[0],'', '', this.insurances[0], '', '', this.policetyp[0], this.programtypes[0], '', '', '', '', '', '', '', '', '', '', );

  addAlert(){
    alert("Sumit the Form");
  }



  constructor() { }

  ngOnInit(): void {
  }

}
