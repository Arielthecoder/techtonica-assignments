class Event {
  constructor(name, description, date) {
    this.name = name;
    this.description = description;
    this.availableTickets = []
    this.date = date;
  }
  addAvailableTickets(ticketType, price) {
    this.availableTickets.push({ type: ticketType, price: price });
  }

  allTickets() {
    let str = 'All tickets: '
    for (let i = 0; i < this.availableTickets.length; i++) {
      str += ` ${i + 1}. ${this.availableTickets[i].type} 
          ($${this.availableTickets[i].price})`
    }
    return str
  }
  searchTickets(lowerBound, upperBound){
    //searching through tickets to see if they are within bounds, if they are display them, if not display "No tickets available"
    let str = "No tickets available"
    let matchingTickets = [];
    for(let i = 0; i < this.availableTickets.length; i++){
        if(this.availableTickets[i].price >= lowerBound && this.availableTickets[i].price <= upperBound){
          matchingTickets.push(this.availableTickets[i])
        }
      
    }
    if(matchingTickets.length > 0){
      str = "Eligible tickets: "
      for(let i = 0; i < matchingTickets.length; i++){
        str += ` ${i + 1}. ${matchingTickets[i].type} 
        ($${matchingTickets[i].price})`
      }
    }
    return str
  }
}




// The below statement creates an object.
const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires', "January 8th, 2024"
);
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour', "September 16th, 2024");
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019', "November 2nd, 2024");
const eventArray = new Array();
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
// in order to check whether the elements are pushed, use console.log
console.log(eventArray);

document.addEventListener('DOMContentLoaded', () => {
  // Handler when the DOM is fully loaded
  let html = '';
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description}`;
  });
  document.querySelector('#event').innerHTML = html;
});
class TicketType {
  constructor(name, price) {
    this.name = name;
    this.price = price
  }

}



eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

console.log(eventObj3.searchTickets(0, 250))

document.addEventListener('DOMContentLoaded', () => {
  // Handler when the DOM is fully loaded
  let html = '';
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description} - ${item.date} - ${item.searchTickets(0,100)}`;
  });
  document.querySelector('#event').innerHTML = html;
});

eventArray.forEach((item) => {
  console.log(`${item.name} - ${item.description} - ${item.date} - ${item.searchTickets(0,100)}`)
})
