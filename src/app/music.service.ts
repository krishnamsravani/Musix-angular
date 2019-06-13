import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class MusicService {
 
  

   
 

  constructor(private http:HttpClient) { }


  addToWishList(value) : any {
   this.http.post("http://localhost:8087/api/v1/track",value).subscribe();
   console.log(value);
  }


  getTrendMusic():any {
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=96e57f35a56ebc8ff8c03398d2fa94b2&format=json");
  }

  getMusic(value):any {
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=96e57f35a56ebc8ff8c03398d2fa94b2&track=${value}&format=json`;
    return this.http.get(url);
  }
  getWishList():any{
    return this.http.get("http://localhost:8087/api/v1/track");
  }
  deleteTrack(value) : any {
    this.http.delete(`http://localhost:8087/api/v1/track/${value}`).subscribe();
    console.log(value);
   }
 
 wholeDetails(name,comment): any {
  console.log("in service", name, comment)
  return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=96e57f35a56ebc8ff8c03398d2fa94b2&artist=${name}&album=${comment}&format=json`);
}

}
