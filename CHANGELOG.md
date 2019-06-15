### Features

- v3.1.0

  - Ability to hide the toast immediately on click. `hide` function passed as a param in `onClick`.

  ```javascript
  cogoToast.success('This is a success message.', {
  	onClick: (hide) => {
  		hide();
  	},
  });
  ```

- v3.0.0

  - Major internal rewrite to remove ReactDOMServer dependency.

  - Using react hooks internally, so support for React versions before hooks is now dropped. Use `v2.0.1` if you want to use this library in versions before React@16.8 (pre-hooks)

  **Breaking:**

  - `icon` option changed to `renderIcon`, where you can pass a render function instead of a node. (Useful for Lazy Rendering)
  - Export for `create` function removed. `cogoToast()` works like create did before.

- v2.0.1

  - Fix for top level typings declaration

* v2.0.0

  - Custom styling is now supported. Just extend the css classes to specify your own styles. For all classnames, refer to [/src/styles.css](/src/styles.css)

  - Typescript typings added. Shout out to @sebastien-p

* v1.0.7 - Internal dependencies and build system upgraded. No changes to the toast.

* **cogoToast:** `cogoToast` is the root object of the containing of 5 functions, `success`, `info`, `loading`, `warn`, and `error`.
