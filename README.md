# rollDice

Make a new React project with create-react-app.
Roll Dice

Let’s build an app that lets us roll a pair of dice. Here’s a gif of the final product
_images/roll_dice.gif
Step 1: Component Structure

Make two components:

    RollDice - a parent component (rendered by App) that renders the dice and a button to roll.
    Die - an individual die that takes props and displays the correct face of the die based on props.

Step 2: Making Dice


The solution displays an animation every time the dice are rolled.

A new piece of state is necessary to say whether the dice are currently rolling or not.

This is done by appending a class containing a CSS animation, and then removing it after one second (hint: setTimeout with setState, but be careful what this references!).
Changing Button Text

The button can also dynamically change its text and become disabled (un-clickable) until the animation has completed.

It relies on the additional piece of state that says whether the dice are currently rolling or not.
