🚩 STATE
- Data within your application
- can be anything (string, obj, array..)

🚩 STORE
- Responsible for maintaining the state of your application
- Regular JS object w/ useful methods:
  1. getState - if you invoke it, you will get the state
  2. dispatch - tells state to update
  3. subscribe - register functions to be invoked when state updates

🚩 ACTION - Objects / (Redux Thunk - functions)
- represents an intention to change the state
- only way to get data into the store
- argument to our dispatch function
- plain object w/ a type key (and maybe data)

🚩 REDUCER
- function that takes current state + action as arguments and returns a new state
- defines how each action alters the state
- should not mutate state

Thunk: used to make asynchronous calls in the "Redux way".


📍 What will our application need?
- Actions are objects that describe changes to the Redux state
  - Think about ways a user can interact with it




🏳️ MAYBE INSTALL:
- npm install whatwg-fetch --save




