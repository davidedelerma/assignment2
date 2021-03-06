var Festival = function(minDate,maxDate){
  this.festivals = '';
  this.minDate = minDate;
  this.maxDate = maxDate;
  this.onUpdate = null;
}

Festival.prototype = {

  getFestivals: function(){
    var url = "http://www.skiddle.com/api/v1/events?api_key=b44ecae0f03d13e3fcf192e4235aef2b&eventcode=FEST&minDate="+this.minDate+"&maxDate="+this.maxDate+"&limit=100";
    var request = new XMLHttpRequest();
    request.open("GET",url);
    request.setRequestHeader("Content-Type", "application/json")
    request.onload = function(){
      if (request.status === 200){
        var jsonString = request.responseText;
        this.festivals = JSON.parse(jsonString)
        this.onUpdate(this.festivals);
      }
    }.bind(this);
    request.send(null)
  }
}

module.exports = Festival;