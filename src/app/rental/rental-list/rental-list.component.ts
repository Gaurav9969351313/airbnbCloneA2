import { Component, OnInit } from '@angular/core';
import { RentalService } from "../shared/rental.service";

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  constructor(private rentalService: RentalService) { }

  arrRentals:any = [];

  ngOnInit() {
      // this.arrRentals = this.rentalService.getRentals();        
      this.rentalService.getRentals().subscribe((data)=>{
          this.arrRentals = data;
      },
      (err)=>{

      },
      ()=>{

      });
  }

}
