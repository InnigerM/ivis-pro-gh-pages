import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CsvReaderService {

  constructor(private http: HttpClient) { }

  public loadFile(file: string): Promise<string[]> {
    return new Promise(resolve => {
      this.http.get(file, { responseType: 'text' })
        .subscribe(res => {
          const regex = /"/g;
          const result = res.replace(regex, '').split('\n');
          resolve(result);
        });
    });
  }
}
