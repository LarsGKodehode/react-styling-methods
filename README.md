# Lesson 06.12.22
## Generating components from an array of data
- [React Docs](https://beta.reactjs.org/learn/rendering-lists)

Use the inbuilt array method .map() to generate a new array from an array.
- [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Some array with data
```
  const arrayOfData = [
    {data: "veni", moreData: "vidi", yetMoreData: "vici"},
    {data: "veni#2", moreData: "vidi#2", yetMoreData: "vici#2"},
  ]
```

Remember to give the created component a unique key property (only need to be unique between its siblings)
```
  arrayOfData.map((dataObject, index) => {
    return (
      <MyComponent key={index} {...dataObject}>
    )
  })
```

## Ways to style your components
Here are some methods to style your application. I recommend learning how to use the default ones and 
### Available by default
#### Global CSS classNames
Basic way to style your application. Nothing new to learn here. Mind the *className* instead of *class* property.
- [Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
#### Innline style tag
Do not use this excessively. Ok to give a single override to a specific component. Best use case I can think of would be to import a image file path in your component and use that as a background.
- [React Docs](https://reactjs.org/docs/faq-styling.html)

### When using create-react-app
#### CSS Modules (comes with create-react-app)
A way to locally scope your CSS class names. Nice for creating self-contained, reusable components.
- [Docs](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

### 3rd party packages (needs to be installed separately)
#### Styled-components
CSS in JavaScript. Use JavaScript to create complex dynamic CSS styles. Lacks Intellisens support.
- [npmjs](https://www.npmjs.com/package/styled-components)
#### Tailwind
A collection of CSS utility classes. Useful for quickly creating nice, expressive designs and not worrying about class names. Might look messy.
- [Docs](https://tailwindcss.com/)
- [Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [npmjs](https://www.npmjs.com/package/tailwind)
#### Headless UI
Unstyled functional components. Do not worry about accessebility attributes with this.
- [Homepage](https://headlessui.com/)
- [npmjs](https://www.npmjs.com/package/@headlessui/react)
#### Material UI
One of the better collections of premade components. Fast to market, but limited choice in styling.
- [Homepage](https://mui.com/)