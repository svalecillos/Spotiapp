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
      'Authorization': 'Bearer BQAMgYeU_VuZkToQzZM7YIcOnjqoXNiD3PehuQhsdeJxuTw41LKIT1uRywjNcRULJJangXJgqY1zwpMbYqw',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers } );
  }

  getArtist(termino:string){
    //Cabezera donde se envia el token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAMgYeU_VuZkToQzZM7YIcOnjqoXNiD3PehuQhsdeJxuTw41LKIT1uRywjNcRULJJangXJgqY1zwpMbYqw',
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers } );
  }

}
