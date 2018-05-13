import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
  private id: any;
  public character: any;

  constructor(public _route: ActivatedRoute, public router: Router, public gotHttpService: ApiHttpService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getCharDetails(this.id);
  }

  getCharDetails(id) {
    this.gotHttpService.getSingleCharacter(id).subscribe(
      data => {
        this.character = data;
        console.log(data);
      },

      error => {
        console.log('error');
      }
    );
  }
}
