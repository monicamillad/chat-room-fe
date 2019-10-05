import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  form = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    console.log('4200 :: ', this.form.controls.name.value);
    this.http.get('/api/login');
  }

  register() {
    console.log(this.form.controls.name.value);
    console.log('here');
  }
}
