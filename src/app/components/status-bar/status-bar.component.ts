import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  isLinear = false;
  emptyFormGroup: FormGroup;
  leagueSelectionForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.emptyFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.leagueSelectionForm = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
