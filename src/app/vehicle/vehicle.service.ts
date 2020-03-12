import {Injectable} from '@angular/core';

@Injectable()
export class Vehicle{
  constructor(){}
  getVehicles(){
  return [
    {id:"id1234",name:"CAR"},
    {id:"id123234",name:"Motor Cycle"},
    {id:"id123345",name:"Lorry"},
    {id:"id1232345",name:"BUS"},

  ]
  }
}


