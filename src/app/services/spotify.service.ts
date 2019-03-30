import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 
    console.log("Servicio Spotify corriendo");
  }

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    //Cabezera donde se envia el token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDQbhQ28CQ4cd-8eBBAY1dl34JVvJYZEyjU7l8oDA722531u6_ZcOtFV3np3f85Px_Rpy1KQMANc3WH1lE',
    });

    return this.http.get(url,{ headers });
  }

  getNewRelease(){
    //El operador map filtramos la informacion que nos interesa
    //Con pipe lo usamos para como mostrar la data
    return this.getQuery("browse/new-releases?limit=20")
               .pipe( map( data => {
                  console.log(data);
                  return data['albums'].items;
                }));               
  }

  getArtists(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( data => {
                 return data['artists'].items;
                }));
  }

  getDetailArtist(id:string){
    return this.getQuery(`artists/${ id }`);
               /*.pipe( map( data => {
                 return data['artists'].items;
                }));*/
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
               .pipe( map( data => {
                 return data['tracks'];
                }));
  }

}
