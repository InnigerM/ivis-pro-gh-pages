import { Component, OnInit } from '@angular/core';
import { CsvReaderService } from './services/csv-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ivisPro';

  constructor(private csv: CsvReaderService) {
  }

  ngOnInit(): void {
  }

  loadFile(file: string): void {
    this.csv.loadFile(file).then(res => {
      console.log(res);
      console.log(res[1]);
    }).catch(err => {
      console.log(err);
    });
  }
}
