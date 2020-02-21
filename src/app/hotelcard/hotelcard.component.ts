import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-hotelcard',
  templateUrl: './hotelcard.component.html',
  styleUrls: ['./hotelcard.component.css']
})
export class HotelcardComponent implements OnInit {

  constructor(private http: HttpClient, ) { }

  formData = new FormGroup({
    keyword: new FormControl(''),
    sort: new FormControl(''),
    order: new FormControl(''),
  });

  urlParameters;
  setParams(startValue) {
    let params = new HttpParams()
      .set("sort", this.formData.value["sort"])
      .set("order", this.formData.value["order"])
      .set("q", this.formData.value["keyword"])
      .set("start", startValue)
    console.log(this.formData.value);
    console.log(params.toString());
    this.urlParameters = params.toString();

    this.getdata(this.urlParameters);
  }

  ngOnInit() {
    this.getdata(this.urlParameters);
  }
  restaurantArray;


  getdata(urlQuery) {
    this.http.get('https://developers.zomato.com/api/v2.1/search?entity_id=7&entity_type=city&count=100&' + urlQuery, {
      headers: { 'Content-Type': 'application/json', 'user-key': 'd16ed6fbf82d1df02c44cfb74b3e7130' },
    })
      .subscribe((data) => {
        this.restaurantArray = data["restaurants"]
        // console.log(this.restaurantArray);
        // console.log(this.restaurantArray[0]["restaurant"]["name"])
        window.scroll(0, 0);
      }, (err) => {
        console.log(err);
      })

  }

}