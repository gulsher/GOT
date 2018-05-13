import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http.service';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allData: any[] = [];
   public allCharacters;
   public allBooks;
   public allHouses;
  constructor(public apiHttpService: ApiHttpService) { }

  ngOnInit() {
    this.charData();
    this.bookData();
    this.houseData();
    setTimeout(() => {
      console.log(this.allData);
    }, 10000);
  }

  public charData = () => {
    // characters
        this.apiHttpService.getAllCharacters().subscribe(
          data => {
            this.allData = this.allData.concat(data);
          }
        );
  }

  public bookData = () => {
      // books
      this.apiHttpService.getAllBooks().subscribe(
      data => {
        this.allData = this.allData.concat(data);
      });

  }

  public houseData = () => {
  // houses
    this.apiHttpService.getAllHouses().subscribe(
      data => {
          this.allData = this.allData.concat(data);
          // final composed data array having all the data in one array
        }
    );
  }
  }
