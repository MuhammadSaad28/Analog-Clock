setInterval(() => {
    date = new Date;
    actualHours = date.getHours();
    actualMinutes = date.getMinutes();
    actualSeconds = date.getSeconds();

    hours = 30*actualHours + actualMinutes/2;
    minutes = 6*actualMinutes;
    seconds = 6*actualSeconds
    hour.style.transform = `rotate(${hours}deg)`;
    minute.style.transform = `rotate(${minutes}deg)`;
    second.style.transform = `rotate(${seconds}deg)`;
   
}, 1000);