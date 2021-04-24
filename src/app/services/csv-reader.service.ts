import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CsvReaderService {

  constructor(private http: HttpClient) { }

  public loadFile(file: string): Observable<string[]> {
      return this.http.get(file, { responseType: 'text' })
        .pipe(
          map(res => {
          const regex = /"/g;
          const result = res.replace(regex, '').split('\n');
          return result;
        })
    );
  }
}
