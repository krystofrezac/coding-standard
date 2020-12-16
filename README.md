# Coding standard
## Typescript
> Script: `eslint '*/**/*.{ts,tsx,js}' --fix`
### `.eslintrc.js`
```js
module.exports = {
  extends: require.resolve('@krystofrezac/coding-standard/ts/eslint'),
};
```
> React version `@krystofrezac/coding-standard/ts/eslint/react` 
>
> If you want to use babel import resolver use `krystofrezac/coding-standard/ts/eslint/babel...`

### `prettier.config.js`
```js
module.exports = require('@krystofrezac/coding-standard/ts/prettier.js');
```