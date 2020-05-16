import { Component, OnInit } from '@angular/core';
import { NewsblogingService } from '../../../newsbloging.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  fDate;
  fGetData;
  constructor( private ser:NewsblogingService) { }

  ngOnInit() {
             
    this.ser.fetchHealthNews()
    .subscribe(res=>{
      console.log(res)
      this.fDate=res;
      this.fGetData=this.fDate.articles;

    })
  }

}
