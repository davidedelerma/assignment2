var Airport = function(airLat,airLng) {

  this.airports = "";
  this.airLat = airLat;
  this.airLng = airLng;
  this.onUpdate = null;
};

Airport.prototype = {

  getAirports: function() {
    // //console.log(this.airLat,this.airLng)
    var url = "http://localhost:3000/airports/"+this.airLat+"/"+this.airLng+"";
    // // var url = "https://airport.api.aero/airport/nearest/55.9486/-3.1999?maxAirports=10&user_key=3035d833bb6e531654a3cce03e6b1fde";
    // var url = "https://airport.api.aero/airport?user_key=3035d833bb6e531654a3cce03e6b1fde";
    // // var url = "https://iatacodes.org/api/v6/nearby?api_key=0150cf1d-e183-4384-ad90-d4685a0c3454&lat="+this.airLat+"&lng="+this.airLng+" &distance=100&type=airport";
    // // var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.airLat+","+this.airLng+"&radius=50000&type=airport&name=airport&key=AIzaSyB13OL9FrPlWcd8p3rZ_ASQy0nNK77R-ow"
    var request = new XMLHttpRequest();
    request.open("GET",url);
    request.setRequestHeader("Content-Type", "application/json")
    request.onload = function(){
       if (request.status === 200){
         var jsonString = request.responseText;
         this.airports = JSON.parse(jsonString);
         this.onUpdate(this.airports)
       }
     }.bind(this)
     request.send(null)
  }
};

module.exports = Airport;