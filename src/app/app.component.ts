import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormArrayName,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
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
        card_number: new FormControl('', [Validators.required]),
        card_holder_name: new FormControl('', [Validators.required]),
        bank_name: new FormControl('', [Validators.required]),
        bank_location: new FormControl('', [Validators.required]),
      }),
      club_images: new FormArray([]),
      table_price: new FormControl(''),
      workingDays: new FormArray([]),
    });
  }

  addMenuCategory() {
    (this.signUpForm.get('menu') as FormArray).push(
      new FormGroup({
        category_name: new FormControl('', [Validators.required]),
        sub_category: new FormArray([]),
      })
    );
  }
  onSubmit() {
    console.log(this.signUpForm.value);
  }
  getCategory() {
    return (this.signUpForm.get('menu') as FormArray).controls;
  }
  addSubCategory(categoryIndex) {
    (<FormArray>(
      (<FormArray>this.signUpForm.get('menu')).controls[categoryIndex].get(
        'sub_category'
      )
    )).push(
      new FormGroup({
        sub_category_name: new FormControl('', [Validators.required]),
        items: new FormArray([]),
      })
    );
  }
  getSubcategories(index) {
    return (<FormArray>(
      (<FormArray>this.signUpForm.get('menu')).controls[index].get(
        'sub_category'
      )
    )).controls;
  }
  addItemArray(menuIndex, subIndex) {
    return (<FormArray>(
      (<FormArray>(
        (<FormArray>this.signUpForm.get('menu')).controls[menuIndex].get(
          'sub_category'
        )
      )).controls[subIndex].get('items')
    )).push(
      new FormGroup({
        item_name: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
      })
    );
  }
  getItem(menuIndex, subIndex) {
    return (<FormArray>(
      (<FormArray>(
        (<FormArray>this.signUpForm.get('menu')).controls[menuIndex].get(
          'sub_category'
        )
      )).controls[subIndex].get('items')
    )).controls;
  }

  addWorkingDay() {
    (this.signUpForm.get('workingDays') as FormArray).push(
      new FormGroup({
        day: new FormControl('', [Validators.required]),
        opening_time: new FormControl('', [Validators.required]),
        closing_time: new FormControl('', [Validators.required]),
      })
    );
  }
  getWorkingdays() {
    return (this.signUpForm.get('workingDays') as FormArray).controls;
  }
}
