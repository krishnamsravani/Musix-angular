import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 // arrayOfMusic: any;

  constructor(private musicService:MusicService, private route: ActivatedRoute,
    private router:Router) { }
    value:any=[];

  ngOnInit() {
    this.details();
    
  }
details():any{
  const name = this.route.snapshot.paramMap.get('name');
 const comment = this.route.snapshot.paramMap.get('comment');
 console.log("name    "+name);
 console.log("comment  "+comment);
 this.musicService.wholeDetails(name,comment).subscribe(data => {
   console.log("This too works.."+data);
   this.value=data;
   console.log(data);
})
 
}
}
