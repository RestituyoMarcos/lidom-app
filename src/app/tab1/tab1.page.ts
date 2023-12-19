import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  noticias: Array<any> = [];

  constructor(
    private http: HttpClient
    ) { }

    ngOnInit(){

      this.http.get<any>("http://localhost:3030/api/noticias")
      .subscribe((res) => {
        this.noticias = res;
      });

    }

}
