function Scooter(year, color, model){
  
  this.year = year;
  this.color = color;
  this.model = model;
   
  
  return year , color , model;
}


function Driver(name, age, experience){
  this.name = name;
  this.age = age;
  this.experience = experience;
  return name , age , experience;
}

function PickupLocation(address ,city){
  
  this.address =address;
  this.city = city;
  return address, city;
  
}