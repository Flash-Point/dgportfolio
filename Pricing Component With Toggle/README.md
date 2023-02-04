# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard

### Screenshot
Desktop Screenshot
![](./AA-Screenshots/desktop.JPG)

Mobile Screenshot
![](./AA-Screenshots/mobile.JPG)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I learnt how to create a toggle button using CSS.

HTML
```html
<!--Toggler-->
        <label class="toggler">
          <input id="toggle" title="switch" type="checkbox">
          <span class="toggler-round"></span>
        </label>
        <!--Toggler End-->
```

CSS for toggle button
```css
/* The switch - the box around the slider */
.toggler {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  /* Hide default HTML checkbox */
  .toggler input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .toggler-round {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: var(--linear-gradient);
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .toggler-round:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .toggler-round {
    background-color: hsl(237, 63%, 64%);
  }
  
  input:hover + .toggler-round {
    box-shadow: 0 0 5px hsl(237, 63%, 64%);
  }
  
  input:checked + .toggler-round:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .toggler-round {
    border-radius: 34px;
  }
  
  .toggler-round:before {
    border-radius: 50%;
  }
```

### Continued development

 - CSS Psuedo elements: *after* & *before*

### Useful resources

- [CSS - Before / After](https://www.youtube.com/watch?v=OtBpgtqrjyo) - This helped me learn how one can use these psuedo elements to manipulate html elements without the use of JavaScript.

