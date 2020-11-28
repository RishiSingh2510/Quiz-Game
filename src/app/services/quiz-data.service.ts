import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  constructor(private http: HttpClient) {
  }

  getDataFromLocal(apiUrl: string): Observable<any> {
    const headers = new HttpHeaders({ 'requestType': 'local' });
    const httpOptions = { headers: headers };
    return this.http.get(apiUrl, httpOptions).pipe(map((res: any) => {
      return res;
    })
    );
  }
}
