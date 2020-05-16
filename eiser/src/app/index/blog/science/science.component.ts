import { Component, OnInit } from '@angular/core';
import { NewsblogingService } from '../../../newsbloging.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  fData;
  fGetData
  constructor( private ser:NewsblogingService) { }

  ngOnInit(): void {

    this.ser.fetchScienceNews()
    .subscribe(res=>{
      console.log(res)
      this.fData=res;
      this.fGetData=this.fData.articles

    })
}
}
