# Lesson 06.12.22
## Generating components from an array of data
Remember to give the created component a unique key property

arrayOfData.map((dataObject, index) => {
  return (
    <MyComponent key={index} {...dataObject}>
  )
})

## Ways to style your components
- Global CSS classNames
- Innline style tag
  https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
- Styled-components
  https://www.npmjs.com/package/styled-components