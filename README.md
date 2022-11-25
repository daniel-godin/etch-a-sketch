# Etch-a-Sketch Project For The Odin Project:

Creating an Etch-a-Sketch with [[HTML - HyperText Markup Language]], [[CSS - Cascading Style Sheets]], and [[JS - JavaScript]].  Mostly a project using JavaScript's DOM manipulating abilities.  [The Odin Project Etch-a-Sketch Link](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

## Table of contents
- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview:
### The challenge:
Users should be able to:
- Move mouse over a set number of divs in a grid and have those "boxes/squares" change color and stay that way.
- Choose a grid size (up to 100x100) with a button and prompt()
- Random Colors each "mouseenter" or black/white.
- Use JS to append or delete elements, as well as classes and class parameters.
- [The Odin Project Etch-a-Sketch Link](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

### Links:
- [Solution URL (GitHub)](https://github.com/daniel-godin/etch-a-sketch)
- [Live Site URL (GitHub Pages or Live Site)](https://daniel-godin.github.io/etch-a-sketch/)
- [Challenge URL](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)

## My process:
### Built with:
- HTML
- CSS
- JS
- Flexbox
- CSS Grid
- VSCode

### What I Learned:
- How useful and necessary loops are.
	- Used for loops to create the number of divs needed inside of my container.
	- For loops to access html/css classes in an "array-like" manner.  Super useful when user wants 100x100 squares (10,000 divs), which would be a huge pain otherwise.
	- White/do loop to make sure user can only select a number and one that is less than 100 squares per side.
- The whole project revolved around using for loops with: createElement, appendChild, classList.add, and .style.cssText, along with functions to remove the old grid and insert a new one with set rules.
- CSS Grid is the primary technology that made it easy to set up a visual grid of divs.  In reality all the divs were siblings inside of the gridContainer div.  At 10,000 divs this was easy with CSS Grid, css-template-rows, and css-template-columns using user selected variables.

### Continued Development:
- At some point I'd like to make the visual of the website better.
- Create buttons to select black/white boxes or color boxes, also a reset button for the current number of squares.
- A day and night mode selector.
- Use the maximal amount of space available on user screen, without forcing user to scroll to reach bottom or right of grid.
	- Currently using height: 50vw (viewport width), which on PC is quite a bit wider than the height.  This would be different on mobile and when browser is split to left/right of screen.  Also wouldn't work for ultrawides.
- Mobile version of some kind.

### Useful Resources:
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- Stack Overflow (via google search)
- Personal Notes (Taken in Obsidian MD for easy search)

## Author:
- Website - [Daniel Godin](https://danielgodin.org)