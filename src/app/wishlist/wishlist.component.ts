import { Component, OnInit} from '@angular/core';
import {MusicService} from '../music.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private musicService:MusicService, private route: ActivatedRoute,
    private router:Router) { }
  arrayOfMusic:any=[];

  ngOnInit() {
    this.getWishList();
    
  }

  addToWishList(music): void{
    this.musicService.addToWishList(music);
    
 }
 getWishList():void{
  this.musicService.getWishList().subscribe(data =>{
    console.log(data);
    this.arrayOfMusic = data;
  })
    
  }
deleteTrack(music):void{
  var trackId=music.id;
  this.router.navigateByUrl("/delete/"+trackId);
}

details(music):void{
  //this.musicService.details(music);
  this.router.navigateByUrl("/det/"+music.name+"/"+music.comment);
  }
 
}