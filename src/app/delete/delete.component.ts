import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private musicService:MusicService,private route:ActivatedRoute,private router:Router) {} 

  ngOnInit() {
    this.delete();
  }
  delete():void{
    const value = this.route.snapshot.paramMap.get('trackId');
   this.musicService.deleteTrack(value);
   this.router.navigateByUrl("favs");
  }

}
