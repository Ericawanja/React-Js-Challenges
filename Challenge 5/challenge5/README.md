# Instructions

Create a functional component that renders an object of users extracted from context using React’s useContext() hook. The object’s keys are the users' names and the associated values are booleans that indicate whether the users are online or offline. The object should be defined in the parent component’s state and the object, as well as its associated setState() function, should be provided to the aforementioned functional component via context. 

Again, userState and setUserState() should be passed to the child of their enclosing component via context. The child should extract userState and setUserState() using the useContext() hook. It should display each user’s name alongside an icon indicating if the user is online (🟢) or offline (🔴). Every two seconds, the component should change the status of a random user to the opposite of their current status. The GIF below is the final product:

Src: https://medium.com/@justin.sherman/react-coding-interview-challenge-5-57c30b25fbb3