import React from 'react';
import ReactDOM from 'react-dom';
import rootComponent from './App.js';
// Note that SingleSpaContext is a react@16.3 (if available) context that provides the singleSpa props
import singleSpaReact, {SingleSpaContext} from 'single-spa-react';

function domElementGetter() {
  let el = document.getElementById("trivia");
  if (!el) {
    el = document.createElement("div");
    el.id = "trivia";
    document.body.appendChild(el);
  }
  return el;
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: rootComponent,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return (
      <div>This renders when a catastrophic error occurs</div>
    );
  },
  domElementGetter
});
export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;