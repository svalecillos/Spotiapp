import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  //paises: any[] = [];
  newRelease:any[] = [];

  constructor( /*private http: HttpClient*/ private spotify:SpotifyService) { 
    /*this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (respuesta : any) => {
      this.paises = respuesta;
      console.log(respuesta);
    });*/
    this.spotify.getNewRelease()
        .subscribe( (data:any) => {
          console.log(data);
          this.newRelease = data.albums.items;
        });
  }

  ngOnInit() {
  }

}
