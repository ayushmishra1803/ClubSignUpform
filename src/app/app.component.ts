import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  signUpForm: FormGroup;
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      club_name: new FormControl('', [Validators.required]),
      club_logo: new FormControl('', [Validators.required]),
      club_loaction: new FormGroup({
        address: new FormControl('', [Validators.required]),
        lat: new FormControl('', [Validators.required]),
        log: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
      }),
      menu: new FormArray([]),
      table_number: new FormControl('', [Validators.required]),
      table_map_image: new FormControl('', [Validators.required]),
      payment_method: new FormGroup({
        card_number: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ]),
        card_holder_name: new FormControl('', [Validators.required]),
        bank_name: new FormControl('', [Validators.required]),
        bank_location: new FormControl('', [Validators.required]),
      }),
      club_images: new FormArray([]),
    });
  }
  title = 'ClubSignUp';
  addMenuCategory() {}
}
