import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private musicService:MusicService ,private route :Router) { }
  arrayOfMusic:any=[];
  ngOnInit() {
      this.musicService.getTrendMusic().subscribe(data=>
        {
            console.log(data.tracks.track);
            this.arrayOfMusic=data.tracks.track;
        });
  }
  click(value){
   
    this.route.navigateByUrl("/result/"+value);
    console.log("This Works");  
  }

  addToWishList(value) {
    // this.route.navigateByUrl("/addFav/"+value);
    console.log("Fav Works");
    
    let myMusic = {
      id:value.listeners,
      name: value.artist.name,
      comment:value.name
    }
    this.musicService.addToWishList(myMusic);
  }

}
