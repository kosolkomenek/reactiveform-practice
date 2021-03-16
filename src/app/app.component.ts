import { Component, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
      status:[''],
      hobby: this.fb.array([this.fb.control(''),this.fb.control('')])
    });
  
  get hobbyArray(){
    return this.productForm.get('hobby') as FormArray;
  }

  addHobbyForm(){
    console.log(this.productForm)
    this.hobbyArray.push(this.fb.control(''));
  }
  deleteHobbyForm(id:number){
    this.hobbyArray.removeAt(id);
  }
  onSubmit(){
    console.log(this.productForm.value);
  }
}

