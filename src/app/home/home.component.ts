import { Component } from '@angular/core';
import path from 'path';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, Validators,FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatFormFieldModule, MatInputModule, CommonModule, RouterModule, MatDatepickerModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  userForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private router: Router) {
    this.userForm = new FormGroup({
      fname: new FormControl('', [Validators.required,Validators.minLength(20)]),
      feed: new FormControl('', Validators.required),
      chosenDate: new FormControl(null, Validators.required)
    });
  }
  ngOnInit(): void {
    // Initialize form control with the default fname value
    this.userForm.get('fname')?.setValue(this.userForm.get('fname'));
  }


  onSubmit(form:any) {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      this.router.navigate(['/bill']);
    } else {
      console.error('Form is invalid');
    }
  }
}
