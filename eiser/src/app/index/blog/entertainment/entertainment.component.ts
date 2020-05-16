import { Component, OnInit } from '@angular/core';
import { NewsblogingService } from '../../../newsbloging.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

fData;
fGetData;
  constructor( private ser:NewsblogingService) { }

  ngOnInit() {
    this.ser.fetchEntertainmentNews()
    .subscribe(res=>{
      console.log(res)
      this.fData=res;
      this.fGetData=this.fData.articles
    })
  }

}
