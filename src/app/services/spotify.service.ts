import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 
    console.log("Servicio Spotify corriendo");
  }

  getNewRelease(){

    //Cabezera donde se envia el token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAHOTq5fb5smLzQlFEOu8UVwvIbr27ZsVRtHd_Tvixo29GolznvgbgecMatYGSceu6Iw-DK9Vv7zPex8_Q',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers } );
  }

}
