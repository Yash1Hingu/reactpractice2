# Fragements , Portals & Refs
## Fragements 
- React Fragments are like invisible containers that group multiple elements together.
- They allow us to avoid adding unnecessary wrapper elements to the DOM.
- Fragments are used when we want to return multiple elements from a component without a single parent element.
- They help improve the cleanliness and efficiency of our code.
- Fragments can be declared using <Fragment> or the shorthand syntax <>.
- By using fragments, we keep our code concise and organized.
- Fragments are the modern and recommended way to group elements in React.
- They solve the limitation of JSX requiring a single parent element.
- Fragments make our components more readable and maintainable.
- They are an essential tool for creating reusable and modular components.
- Think of fragments as magic invisible containers that keep our code clean and tidy.
- Here's an example of using a fragment in React:
```js
import React, { Fragment } from 'react';

function MyComponent() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <p>React Fragments</p>
    </Fragment>
  );
}
```
### Remember:

- Fragments group elements invisibly.
- No unnecessary DOM elements.
- Use <Fragment> or <> shorthand.
- Keep code concise and organized.
- Fragments are the modern way to group elements.

## Portals
- Portals in React allow rendering elements outside the usual DOM hierarchy.
- They are useful for displaying content in separate parts of the DOM, such as modals or overlays.
- Portals maintain clean component structure and separation of concerns.
- [ReactDOM.createPortal()](https://react.dev/reference/react-dom/createPortal#createportal) is used to create a portal by specifying the content and target DOM node.
- Example: Render a component using a portal to the DOM node with the id "portal-root":
```js
ReactDOM.createPortal(
  <div>
    <h1>This appears in a portal!</h1>
  </div>,
  document.getElementById('portal-root')
);
```
- Portals provide flexibility and control for rendering components outside their parent's DOM node.