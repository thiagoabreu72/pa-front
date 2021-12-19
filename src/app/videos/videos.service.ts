import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { Videos } from '../models/videos.models';
import { map, catchError } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:4200',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  'X-Frame-Options': 'sameorigin'
});

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  baseUrl = 'https://cia-musica.herokuapp.com/videos';
  //baseUrl = 'http://localhost:4200'

  constructor( private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    /*this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-erro'] : ['msg-success'],
    });*/
  }

  read(agrupador: string): Observable<Videos[]> {
    const url = `${this.baseUrl}/${agrupador}`;

    return this.http.get<Videos[]>(url, { headers: headers }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}