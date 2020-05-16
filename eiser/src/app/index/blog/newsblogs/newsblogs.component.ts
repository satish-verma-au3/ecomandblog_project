import { Component, OnInit } from '@angular/core';
import { NewsblogingService} from '../../../newsbloging.service';


@Component({
  selector: 'app-newsblogs',
  templateUrl: './newsblogs.component.html',
  styleUrls: ['./newsblogs.component.css']
})
export class NewsblogsComponent implements OnInit {

  fData;
  fGetData
  constructor( private ser:NewsblogingService) { }

  ngOnInit(): void {

    this.ser.fetchLatestNews()
    .subscribe(res=>{
      console.log(res)
      this.fData=res;
      this.fGetData=this.fData.articles

    })
  }


}
