Write a functional component to render a button and a list of activities. The list of activities should start out with one activity. When the user clicks the button, an additional activity should be fetched and appended to the list. To generate a random activity, issue a get request to “https://www.boredapi.com/api/activity” — an API for development that does not require authentication. Each request will return a new, random object containing the following fields: activity, type, participants, price, link, key, and accessibility. The values associated with these fields are either strings or numbers. 
src:https://medium.com/@justin.sherman/react-coding-interview-challenge-3-94bc3386ba1c