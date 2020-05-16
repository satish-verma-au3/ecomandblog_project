import { Component, OnInit } from '@angular/core';
import { NewsblogingService } from '../../../newsbloging.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  fData;
  fGetData
  constructor( private ser:NewsblogingService) { }

  ngOnInit(): void {

    this.ser.fetchTechNews()
    .subscribe(res=>{
      console.log(res)
      this.fData=res;
      this.fGetData=this.fData.articles

    })
  }
}
