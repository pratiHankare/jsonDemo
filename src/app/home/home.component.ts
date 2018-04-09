import { Component, OnInit } from '@angular/core';
import { Http , Response, Headers } from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products = [];

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    // fetching data from api
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res: Response) => {
        this.products = res.json();
      }
    );
  }

}
