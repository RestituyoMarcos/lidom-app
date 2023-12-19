import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  posiciones: Array<any> = [];

  constructor(
    private http: HttpClient
    ) { }

    ngOnInit(){

      this.http.get<any>("http://localhost:3030/api/posiciones")
      .subscribe((res) => {
        this.posiciones = res;
      });

    }

}
