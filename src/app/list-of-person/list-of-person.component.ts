import { Component, OnInit, OnChanges } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list-of-person',
  templateUrl: './list-of-person.component.html',
  styleUrls: ['./list-of-person.component.css']
})
export class ListOfPersonComponent implements OnInit {

  itemArray: any[];
  name: string;
  lastname: string;
  age: number;
  male: boolean;
  female: boolean;

  constructor(private http: Http) { }
  ngOnInit() {
    this.http.get('https://venbest-test.herokuapp.com').subscribe(
      result => this.itemArray = result.json(),
      error => console.log(error.statusText)
  );
  }

  sort() {
    const finalList: any[] = [];
    this.itemArray.forEach(element => {
        if ((element.name.search(this.name) !== -1) && (element.lastname.search(this.lastname) !== -1) &&
        ((element.age === this.age) || (!this.age)) && ((element.sex === 'm' && this.male) ||
        (element.sex === 'f' && this.female) || (this.male === this.female))) {
          finalList.push(element);
      }
    });
    return finalList;
  }
}
