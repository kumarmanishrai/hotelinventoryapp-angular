import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  //interpolation syntax
  hotelName = "manish hotel"
  // Property Binding
  numberOfRooms = 10

  // Event Binding
  hideRooms = false 
  toggle() {
    this.hideRooms = !this.hideRooms
  }

}
