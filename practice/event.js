class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
    addAvailableTickets(ticketType, price) {
        this.availableTickets.push({type: ticketType, price:price});
      }

      allTickets(){
        for(let i = 0; i < this.availableTickets.length; i ++){
          return `All tickets: ${i+1}. ${this.availableTickets[i].type} 
          ($${this.availableTickets[i].price})`
        }
      }
  }




  // The below statement creates an object.
const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
  );
  const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');
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
    constructor(name, price){
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

document.addEventListener('DOMContentLoaded', () => {
  // Handler when the DOM is fully loaded
  let html = '';
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description} - ${item.allTickets()}`;
  });
  document.querySelector('#event').innerHTML = html;
});

eventArray.forEach((item) => {
  console.log(`${item.name} - ${item.description} - ${item.allTickets()}`)
})
