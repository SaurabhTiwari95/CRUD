import { Component, OnInit } from "@angular/core";
import { FormControl,FormGroup } from "@angular/forms";

@Component({
  selector: "app-reactive-details",
  templateUrl: "./reactive-details.component.html",
  styleUrls: ["./reactive-details.component.css"]
})
export class ReactiveDetailsComponent implements OnInit {
  name = new FormControl(" ");
   profileForm = new FormGroup({
     firstName : new FormControl(''),
     lastName : new FormControl('')
   })
  constructor() {

  }

  updateName(){
    this.name.setValue('NewTestValue');
  }
  onSubmit(){
    console.warn(this.profileForm.value)
  }
  ngOnInit() {}
}
