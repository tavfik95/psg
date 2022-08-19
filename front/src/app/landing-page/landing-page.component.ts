import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LandingPageService } from '../service/landing-page/landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  submit : boolean = false
  formGroup!: FormGroup;
  controlAddress = new FormControl('');
  controlFirstName = new FormControl('');
  controlLastName = new FormControl('');

  constructor( private LandingPageService:LandingPageService,
              formBuilder: FormBuilder,) {
                this.formGroup = formBuilder.group({
                  address: this.controlAddress.value,
                  firstName : this.controlFirstName.value,
                  lastName : this.controlLastName.value,
                    
                  
                });    
               }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submit = true
    this.LandingPageService.addAddress({
      address: this.controlAddress.value,
      firstName : this.controlFirstName.value,
      lastName : this.controlLastName.value,
    }).subscribe({
      next:(values)=>console.log(values)
    })
  }

}
