window.addEventListener("load", ()=> {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;

           const proxy = "https://cors-anywhere.herokuapp.com/";
           const api = `${proxy}https://api.darksky.net/forecast/336ff83450ab445a6ba71a9c4798c14f/${lat},${long}`;

           fetch(api)
           .then(response => {
               return response.json();
           })
           .then(data => {
               console.log(data);
               const {temperature} = data.currently;
           });
         });
     }
});