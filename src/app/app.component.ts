import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { Users } from './users';
import { RestService } from './rest.service';
import { SelectorMatcher } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users : Users[] = [];
  Name:any;
  constructor(public rs:RestService){}
  // title = 'card-layout';
  // title = 'card-layout';
  exform!: FormGroup;

  ngOnInit(): void {

    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    }); 



  this.exform = new FormGroup({
    'name' : new FormControl(null, Validators.required),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'phone' : new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]),
    'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
  });
  }


  Search(){
    if(this.Name==""){
      this.ngOnInit();
    }else{
      this.users=this.users.filter(res=>{
        return res.name?.toLocaleLowerCase().match(this.Name.toLocaleLowerCase())
      })
    }
  }

  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get message() {
    return this.exform.get('message');
  }

}


function Search() {
  throw new Error('Function not implemented.');
}

