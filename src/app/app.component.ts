import { Component, OnInit } from '@angular/core';
import { Club } from './models/club-data';
import { CsvReaderService } from './services/csv-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ivisPro';

  constructor() {
  }

  ngOnInit(): void {
  }
}
