let now = moment();

//Clock//
const currentTimeInterval = setInterval(function () {
    now = moment();
    $("#now").text(`${now.format('MMM DD, YYYY')} at ${now.format('HH:mm:ss')}`);
  }, 1000);

 
  

  
  







