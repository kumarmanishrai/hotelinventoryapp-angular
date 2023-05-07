import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

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


  roomList : RoomList[] = [
    {
    roomNumber: 1,
    roomType: "deluxe",
    amenities: "Ac, Wifi, TV",
    price: 500,
    photos: 'https://images.unsplash.com/coder',
    checkinTime: new Date(),
    checkoutTime: new Date(),
  },
  {
    roomNumber: 2,
    roomType: "deluxe",
    amenities: "Ac, Wifi, TV",
    price: 5400,
    photos: 'https://images.unsplash.com/coder',
    checkinTime: new Date(),
    checkoutTime: new Date(),
  },
  {
    roomNumber: 3,
    roomType: "deluxe",
    amenities: "Ac, Wifi, TV",
    price: 5500,
    photos: 'https://images.unsplash.com/coder',
    checkinTime: new Date(),
    checkoutTime: new Date(),
  },
  {
    roomNumber: 4,
    roomType: "deluxe",
    amenities: "Ac, Wifi, TV",
    price: 1500,
    photos: 'https://images.unsplash.com/coder',
    checkinTime: new Date(),
    checkoutTime: new Date(),
  },
]
  
  toggle() {
    this.hideRooms = !this.hideRooms
  }

}
