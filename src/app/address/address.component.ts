/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

declare let google: any;

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  @ViewChild('search') public searchElement: ElementRef;

  constructor(public mapApiLoader: MapsAPILoader) {
    this.getMapApiLoader();
  }

  getMapApiLoader() {
    this.mapApiLoader.load().then(() => {
      new google.maps.places.Autocomplete(this.searchElement.nativeElement).getPlace();
    });
  }
}
