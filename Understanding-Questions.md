# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.

The click handler dispatches the action creator. The action creator returns the action type. The reducer updates the state property total. It takes the current state total and adds one and returns that value.

- TotalDisplay shows the total plus 1.
