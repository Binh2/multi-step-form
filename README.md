# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Demo](#demo)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Run my source code locally](#run-my-source-code-locally)
- [Author](#author)
- [My recent works](#my-recent-works)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Demo

#### Desktop version
https://user-images.githubusercontent.com/53990204/214286062-93a0a845-dbb2-4b7b-9cff-1bcaee4e9192.mp4

#### Mobile version
https://user-images.githubusercontent.com/53990204/214286112-36fe467f-3dd2-4abc-885f-0ab6b10c6f84.mp4

### Links

- Solution URL: [My github multi-step-form repo](https://github.com/Binh2/multi-step-form/)
- Live Site URL: [Visit my live site](https://binh2.github.io/multi-step-form/)

## My process

### Built with

- HTML form elements
- CSS custom properties
- CSS Flexbox
- CSS Grid
- Responsive web design
- Vanilla Javascript
- LESS or Leaner style sheet
- VueJS
- Vue Router

### What I learned

#### HTML

```html
<!-- Vertically align div (works on all browsers) -->
<div class="outer">
  <div class="middle">
    <div class="inner">
      <div class="inner-most" />
    </div>
  </div>
</div>

<style>
  .outer {
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .middle {
    display: table-cell;
    vertical-align: middle;
  }
  .inner {
    margin-left: auto;
    margin-right: auto;
  }
</style>
```

#### CSS

```css
/* To change checkbox color */
.input-type-checkbox {
  accent-color: red;
}
```

#### Javascript

```js
const store = {
  addMultiplayer: true,
  addLargerStorage: true,
  addCustomTheme: false,
  get chosenAddOns() {
    const array = [];
    if (this.addMultiplayer) array.push("multiplayer");
    if (this.addLargerStorage) array.push("largerStorage");
    if (this.addCustomTheme) array.push("customTheme");

    return array;
  },
}
```

#### Bash

```bash
# git push -f git@github.com:Binh2/multi-step-form.git main:gh-pages
# master instead of main branch because default name for local branch is master
git push -f git@github.com:Binh2/multi-step-form.git master:gh-pages
```

### Continued development

If I were to continue working on this project, I would try to:

- Make components and views CSS style more independent from each other.
- Make font-size dynamically change based on screen width on mobile so text doesn't wrap too much and cause container to be too big.
- Change line-height based on what font is used so text doesn't get too close to each other on Arial font and sans-serif font.
- Currently, the layout breaks on mobile landscape mode. Maybe, make components and views scale based on screen width and height.

### Useful resources

- [VueJS](https://vuejs.org/) - This helped me learn VueJS.
- [Vue Router](https://router.vuejs.org/) - This helped me learn Vue Router.
- [Vue CLI deploy to Github](https://cli.vuejs.org/guide/deployment.html#github-pages) - This article help me deploy my project to Github Pages, although, it's outdated and doesn't work. [Checkout how I fix it](#bash)

## Run my source code locally

### Clone my project to your local machine
```
git clone https://github.com/Binh2/multi-step-form.git
```

### Project setup (Download JS dependencies)
```
npm install
```

### Lints and fixes files
```
npm run lint
```

### Compiles and hot-reloads for development
```
npm run serve
```

## How to deploy to my Github Pages (btw, you can't do this without my permission unless you fork my project).

### Compiles and minifies for production (Call npm run deploy will run this command automatically so you don't need to run this command).
```
npm run build
```

### Deploy to my Github Page (If you decided to fork your own project from mine then you might have to reconfigure /deploy.sh and /vue.config.js. Check out [Vue CLI deploy to Github](https://cli.vuejs.org/guide/deployment.html#github-pages))
```
npm run deploy
```

## Need more info on customizing Vue CLI configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Author

- Frontend Mentor - [@Binh2](https://www.frontendmentor.io/profile/Binh2)
- Twitter - [@hgqbinh2002](https://twitter.com/hgqbinh2002)
- LinkedIn - [hgqbinh2002](https://www.linkedin.com/in/hgqbinh2002/)

## My recent works

### News homepage

- Solution URL: [Check out my solution](https://github.com/Binh2/news-homepage)
- Live Site URL: [My live webpage](https://binh2.github.io/news-homepage/)

### A blog template

- The source code: [Checkout my source code](https://github.com/Binh2/brother-blog)
- Live Site URL: [My live webpage](https://binh2.github.io/brother-blog/)

## Acknowledgments

- Big thanks to [Frontend Mentor](https://www.frontendmentor.io/) to give me the idea to do this project.
- Thanks to [Nikola D](https://www.frontendmentor.io/profile/Nikola1232456) for suggesting me to reset CSS on my previous solution, aka [News homepage](https://binh2.github.io/news-homepage/).
