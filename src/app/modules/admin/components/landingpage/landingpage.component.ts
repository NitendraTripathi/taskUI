import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  pedinginglst: any;
  donelst:any;
  id:any=localStorage.getItem('userid');
constructor(private api:ApiService){}
  ngOnInit(): void {
    debugger;
    this.api.GetTodoItelListpending(this.id).subscribe(data=>{
      this.pedinginglst=data;
      debugger;
      console.log(this.pedinginglst);
    });
    this.api.GetTodoItelListDone(this.id).subscribe(data=>{
      this.donelst=data;
      console.log(this.donelst);
    });
  }

}
