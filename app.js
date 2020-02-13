

const eventList = $('.event');

function getEvent() { 
      axios({
        method: 'get',
        url: `https://mhw-db.com/events/1955`
      })
        .then(res => {
          const name = $(eventList[0].children[0]);
          const location = $(eventList[0].children[1]);
          const description = $(eventList[0].children[2]);
          const target = $(eventList[0].children[3]);
          const eventName = res.data.name;
          const eventDesc = res.data.description;
          const eventLocation = res.data.location.name;
          const eventSuccess = res.data.successConditions;

            $(name).text(eventName);
            $(location).text("Location : "+eventLocation); 
            $(description).text(eventDesc);
            $(target).text("Target : "+eventSuccess);

        })
        .catch(err => {
          console.log(err);
        });
    


    axios({
        method: 'get',
        url: `https://mhw-db.com/events/1955`
      })
        .then(res => {
          const name = $(eventList[1].children[0]);
          const location = $(eventList[1].children[1]);
          const description = $(eventList[1].children[2]);
          const target = $(eventList[1].children[3]);
          const eventName = res.data.name;
          const eventDesc = res.data.description;
          const eventLocation = res.data.location.name;
          const eventSuccess = res.data.successConditions;

            $(name).text(eventName);
            $(location).text("Location : "+eventLocation); 
            $(description).text(eventDesc);
            $(target).text("Target : "+eventSuccess);

        })
        .catch(err => {
          console.log(err);
        });
    


    axios({
        method: 'get',
        url: `https://mhw-db.com/events/1956`
      })
        .then(res => {
          const name = $(eventList[2].children[0]);
          const location = $(eventList[2].children[1]);
          const description = $(eventList[2].children[2]);
          const target = $(eventList[2].children[3]);
          const eventName = res.data.name;
          const eventDesc = res.data.description;
          const eventLocation = res.data.location.name;
          const eventSuccess = res.data.successConditions;

            $(name).text(eventName);
            $(location).text("Location : "+eventLocation); 
            $(description).text(eventDesc);
            $(target).text("Target : "+eventSuccess);

        })
        .catch(err => {
          console.log(err);
        });
    


    axios({
        method: 'get',
        url: `https://mhw-db.com/events/1959`
      })
        .then(res => {
          const name = $(eventList[3].children[0]);
          const location = $(eventList[3].children[1]);
          const description = $(eventList[3].children[2]);
          const target = $(eventList[3].children[3]);
          const eventName = res.data.name;
          const eventDesc = res.data.description;
          const eventLocation = res.data.location.name;
          const eventSuccess = res.data.successConditions;

            $(name).text(eventName);
            $(location).text("Location : "+eventLocation); 
            $(description).text(eventDesc);
            $(target).text("Target : "+eventSuccess);

        })
        .catch(err => {
          console.log(err);
        });
    


    axios({
        method: 'get',
        url: `https://mhw-db.com/events/1962`
      })
        .then(res => {
          const name = $(eventList[4].children[0]);
          const location = $(eventList[4].children[1]);
          const description = $(eventList[4].children[2]);
          const target = $(eventList[4].children[3]);
          const eventName = res.data.name;
          const eventDesc = res.data.description;
          const eventLocation = res.data.location.name;
          const eventSuccess = res.data.successConditions;

            $(name).text(eventName);
            $(location).text("Location : "+eventLocation); 
            $(description).text(eventDesc);
            $(target).text("Target : "+eventSuccess);

        })
        .catch(err => {
          console.log(err);
        });
    }
    
    
 

// entrtaimnet 