import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactiveform';
  foods: status[] = [
    {value: 'open', viewValue: 'Open'},
    {value: 'close', viewValue: 'Close'},
    {value: 'follow', viewValue: 'FOllow'}
  ];
  

  constructor(private fb :FormBuilder){}
 
  productForm = this.fb.group({
      name: [''],
      code: [''],
      weight:[''],
      dangerouse:[''],
      status:['']
    });
  
  onSubmit(){
    console.log(this.productForm.value);
  }
}

