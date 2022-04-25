import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { Users } from './users';
import { RestService } from './rest.service';
import { SelectorMatcher } from '@angular/compiler';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users : Users[] = [];
  Name:any;
  p: number=1;
  sortedData: any;
  constructor(public rs:RestService){}
  // title = 'card-layout';
  // title = 'card-layout';
  exform!: FormGroup;

  

  ngOnInit(): void {

    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    }); 


    sortData(sort: Sort) {
      const data = this.Name.slice();
      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }
  
      this.sortedData = data.sort((a, b) => {
        const isAsc = sort.name === 'asc';
        switch (sort.active) {
          case 'name':
            return compare(a.name, b.name, isAsc);
          
        }
      });

      function compare(a: number | string, b: number | string, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
      }



  // this.exform = new FormGroup({
  //   'profile': new FormControl(null, Validators.required)
  //   'name' : new FormControl(null, Validators.required),
  //   'email' : new FormControl(null, [Validators.required, Validators.email]),
  //   'phone' : new FormControl(
  //     null,
  //     [
  //       Validators.required,
  //       Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
  //     ]),
  //   'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
  // });
  // }


  }

  // key: string ='name';
  // reverse:boolean=false;
  // sort(key: any){
  //   this.key=key;
  //   this.reverse=!this.reverse;
  // }
}
}

function sortData(sort: any, Sort: any) {
  throw new Error('Function not implemented.');
}


function sort(sort: any, Sort: any) {
  throw new Error('Function not implemented.');
}


function compare(name: any, isAsc: boolean) {
  throw new Error('Function not implemented.');
}
