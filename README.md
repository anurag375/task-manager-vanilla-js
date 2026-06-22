# Interactive Task Manager

## Project Overview

I built this Task Manager application using HTML, CSS, and Vanilla JavaScript. The application allows users to create, update, complete, and delete tasks dynamically without refreshing the page. The project was mainly focused on understanding DOM manipulation, event handling, event propagation, and the browser rendering process.

---

# Browser Rendering Pipeline

## Parsing

Parsing is the process where the browser reads HTML and CSS code and understands their structure.

** Whenever the browser loads my HTML and CSS files, it parses them before displaying the Task Manager interface.

## Tokenization

Tokenization is the process of breaking HTML code into smaller units called tokens, such as tags, attributes, and text.

** The browser tokenizes all the HTML elements such as forms, buttons, task cards, and sections before creating the DOM Tree.

## DOM Tree

The DOM Tree is a tree-like representation of all HTML elements on a webpage. JavaScript uses it to access and modify elements dynamically.

** I used the DOM extensively to create tasks, update task details, delete tasks, toggle themes, and access form elements.

## CSSOM Tree

The CSSOM Tree contains all CSS rules and styles applied to the webpage.

** All styling such as task cards, forms, buttons, theme changes, and layout are applied through the CSSOM Tree.

## Render Tree

The Render Tree is created by combining the DOM Tree and CSSOM Tree. It contains the visible elements that are displayed on the screen.

** Whenever a task is added, updated, deleted, or when the theme changes, the browser updates the rendered view shown to the user.

---

# Event Propagation

## Event Bubbling

Event Bubbling occurs when an event starts from the target element and moves upward through its parent elements.

** I demonstrated this using the Child → Parent → Grandparent structure and observed the event flow in the console.

## Event Capturing

Event Capturing is the opposite of bubbling. The event moves from the outermost parent toward the target element.

** I demonstrated capturing by attaching event listeners with the capture option enabled on the Grandparent and Parent elements.

## Event Delegation

Event Delegation is a technique where a single event listener is attached to a parent element to handle events from its child elements.

** I attached an event listener to the task container and used it to identify which task card was clicked using `event.target`.

---

# What I Learned

Through this project, I learned how browsers render webpages, how DOM manipulation works, the difference between attributes and properties, and how event propagation techniques can be used to build efficient and interactive web applications.
