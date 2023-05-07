import { Component } from '@angular/core';
import { Room } from './rooms';

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

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  
  toggle() {
    this.hideRooms = !this.hideRooms
  }

}
