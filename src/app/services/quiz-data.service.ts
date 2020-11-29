import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  playerScoreList: any = []
  constructor(private http: HttpClient) {
    let strScoreData: string = localStorage.getItem("PlayersScoresList") == null ? ""
      : localStorage.getItem("PlayersScoresList")
    if (strScoreData != null && strScoreData != "")
      this.playerScoreList = JSON.parse(strScoreData)
  }

  getDataFromLocal(apiUrl: string): Observable<any> {
    const headers = new HttpHeaders({ 'requestType': 'local' });
    const httpOptions = { headers: headers };
    return this.http.get(apiUrl, httpOptions).pipe(map((res: any) => {
      return res;
    })
    );
  }

  saveScores(_scoredValue: number) {
    this.playerScoreList.push({ UserName: localStorage.getItem("Username"), scoredValue: _scoredValue })
    localStorage.setItem("PlayersScoresList", JSON.stringify(this.playerScoreList))
    let strScoreData: string = localStorage.getItem("PlayersScoresList") == null ? ""
      : localStorage.getItem("PlayersScoresList")
    if (strScoreData != null && strScoreData != "")
      this.playerScoreList = JSON.parse(strScoreData)
  }
}
