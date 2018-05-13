import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {
  public id;
 public house;

  constructor(public _route: ActivatedRoute, public router: Router, public gotHttpService: ApiHttpService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getHouseDetails(this.id);
  }

  getHouseDetails(id) {
    this.gotHttpService.getSingleHouse(id).subscribe(
      data => {
        this.house = data;
        console.log(data);
      },

      error => {
        console.log('error');
      }
    );
  }

}
