import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { Users } from './users';
import { RestService } from './rest.service';
import { SelectorMatcher } from '@angular/compiler';
// import {Sort} from '@angular/material/sort';
import { PicsumComponent } from './picsum/picsum.component';
import { PicsumService } from './services/picsum.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  searchField!: FormControl;
  columns: string[] | undefined;
  sortedcolumn: string | undefined;
  users: Users[] = [];
  Name: any;
  p: number = 1;
  picsum: any;
  // sortedData: any;
  pageNo: number = 1;
  enteredSearchValue: string = '';
  searchText: string = '';



  constructor(public rs: RestService) {
    this.searchField = new FormControl();
  }
  // title = 'card-layout';
  // title = 'card-layout';
  exform!: FormGroup;



  ngOnInit(): void {
    this.getUsers(1)


  }

  setPageNo($event: any) { console.log(this.pageNo) }

  goNext() {
    if (this.pageNo >= 2) {
      return
    }

    this.pageNo += 1
    this.getUsers(this.pageNo)


  }
  goPrevious() {
    if (this.pageNo <= 1) {
      return
    }


    this.pageNo -= 1
    this.getUsers(this.pageNo)
  }
  getUsers(pageno: number) {
    this.rs.getUsers(pageno).subscribe((response) => {
      this.users = response;
    });

  }
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}

