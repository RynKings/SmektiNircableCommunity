import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.berita_apiurl;
const API_KEY = environment.berita_apikey;

@Injectable({
  providedIn: 'root'
})
export class BeritaService {

  constructor( private http: HttpClient) { }

  getData() {
    return this.http.get( `${API_URL}/anggota?api-key=${API_KEY}`);
  }
}
