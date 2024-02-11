module.exports = {getDate, getDay};

function getDate(){
  var options= {
    weekday : 'long',
    month : 'long',
    day : 'numeric'
  };
  
  var today = new Date();
  
  var kindOfDay = today.toLocaleDateString("en-US", options);

  return kindOfDay;
}
function getDay(){
  var options= {
    weekday : 'long'
  };
  
  var today = new Date();

  var kindOfDay = today.toLocaleDateString("en-US", options);

  return kindOfDay;
}