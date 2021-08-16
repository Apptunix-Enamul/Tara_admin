import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cheflist',
  templateUrl: './cheflist.component.html',
  styleUrls: ['./cheflist.component.scss']
  
})
export class CheflistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  driver = [
    {    
      name: 'John',    
      contact: "+91-9765432210",    
      id: "#454545",    
      location:"Berlin",
      dob:"12-06-1990"  ,
      email:"john@gmail.com",                        
      vehicle:"Bike" ,
      message:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"          
    },
    {    
      name: 'Andy',    
      contact: "+91-7855432210",    
      id: "#454545",   
      location:"Madrid", 
      dob:"12-06-1990"  ,
      email:"john@gmail.com",
      vehicle:"Scooter",
      message:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"           
    },
    {    
      name: 'Sam',    
      contact: "+91-97654478210",    
      id: "#454545",    
      email:"john@gmail.com",
      dob:"12-06-1990"  ,    
      location:"Rome", 
      vehicle:"E-bike" ,
      message:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"          
    },
   
  ]
  franchises  = [
    {    
      name: 'John',    
      contact: "+91-9765432210",    
      id: "#454545",    
      location:"Berlin",
      email:"john@gmail.com",
      dob:"12-06-1990"  ,                      
      business:"Leuven" ,
      message:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"     
    },
    {    
      name: 'John',    
      contact: "+91-9765432210",    
      id: "#454545",    
      location:"Berlin",
      email:"john@gmail.com",
      dob:"12-06-1990"  ,                      
      business:"KFC" ,
      message:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"     
    },
    {    
      name: 'John',    
      contact: "+91-9765432210",    
      id: "#454545",    
      location:"Berlin",
      email:"john@gmail.com",
      dob:"12-06-1990"  ,                      
      business:"Macdonald" ,
      message:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"     
    },
  ]
  restaurant = [
    {    
      name: 'The Cafe',    
      contact: "+91-9765432210",    
      id: "#454545",    
      location:"1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
      email:"john@gmail.com",
      dob:"12-06-1990",                      
      delivery:"Yes",                      
      message:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"     
    },
    {    
      name: 'Safforn',    
      contact: "+91-9765432210",    
      id: "#454545",    
      location:"1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
      email:"john@gmail.com",
      dob:"12-06-1990"  ,                      
      delivery:"Yes"  ,   
      message:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"     
    },
    {    
      name: 'John',    
      contact: "+91-9765432210",    
      id: "#454545",    
      location:"1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
      email:"john@gmail.com",
      dob:"12-06-1990"  ,                      
      delivery:"Yes"  ,   
      message:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"     
    },
  ]
  table = [
    {    
      hotelName: 'Partner 1',    
      id: "#454545",    
      // productName:"Soya Chap",
      totalOrder:"15",
      holdOrder:"10",
      cancelOrder:"5",
      lowStock:"50",    
      outStock:"20", 
      status:"View"      
    },
    {    
      hotelName: 'Partner 2',    
      id: "#454435",    
      // productName:"Burger",
      totalOrder:"15",
      holdOrder:"10",
      cancelOrder:"5",
      lowStock:"50",    
      outStock:"20", 
      status:"View"      
    },
    {    
      hotelName: 'Partner 3',    
      id: "#54435",    
      // productName:"Soya Chap",
      totalOrder:"15",
      holdOrder:"10",
      cancelOrder:"5",
      lowStock:"50",    
      outStock:"20",   
      status:"View"   
    },
   
  ]
}
