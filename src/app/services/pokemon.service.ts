import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'http://localhost:8080/api/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemonById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:admin') 
    });

    return this.http.get<any>(`${this.apiUrl}${id}`, { headers });
  }
}
