import { Component, OnInit } from '@angular/core';
import { NewsblogingService } from '../../../newsbloging.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  fData;
  fGetData
  constructor( private ser:NewsblogingService) { }

  ngOnInit(): void {

    this.ser.fetchSportNews()
    .subscribe(res=>{
      console.log(res)
      this.fData=res;
      this.fGetData=this.fData.articles

    })
}
}