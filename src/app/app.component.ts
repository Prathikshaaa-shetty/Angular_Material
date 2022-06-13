import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title = 'Mat';
  notifications=2;
  showSpinner = false;
  opened= false;
  selectedValue!:string;
  auto = false;

  mycontrol= new FormControl();

  filteredOptions!:Observable<string[]>

  ngOnInit(){

    this.filteredOptions = this.mycontrol.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value:string):string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => 
      option.toLowerCase().includes(filterValue));
  }

  options:string[]= ['Angular', 'React', 'Vue'];
  objectOptions = [
    {name:'Angular'},
    {name:'Angular Material'},
    {name:'React'},
    {name:'Vue'},

  ]

  displayFn(subject:any){
    return subject ? subject.name : undefined;

  }

  loadData() {
    this.showSpinner = true;
    setTimeout(()=> {
      this.showSpinner = false;
    }, 5000);
  }

  log(state:string) {
    console.log(state);
  }

  logChange(index:number) {
    console.log(index)
  }
}
