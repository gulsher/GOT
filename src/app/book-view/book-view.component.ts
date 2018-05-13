import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']

})
export class BookViewComponent implements OnInit {
  private id;
  public book;

  constructor(public _route: ActivatedRoute, public router: Router, public gotHttpService: ApiHttpService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getBookDetails(this.id);
  }

  getBookDetails(id) {
    this.gotHttpService.getSingleBook(id).subscribe(
      data => {
        this.book = data;
        console.log(data);
      },

      error => {
        console.log('error');
      }
    );
  }
}
