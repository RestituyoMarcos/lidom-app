import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  equipos = []

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(){

    this.http.get<any>("http://localhost:3030/api/equipos")
    .subscribe((res) => {
      this.equipos = res;
      console.log(this.equipos);
      
    });

  }

}
