# react-label-editable

React Component to create one label if is editable.

## Install

```bash
npm i react-label-editable
```

[react-label-editable package](https://www.npmjs.com/package/react-label-editable)


## Usage

```js | pure 
import LabelEditable from 'react-label-editable';
import { useState } from 'react-label-editable';

export default function(){
  const [ value, changeValue ] = useState("");

  return (
    <LabelEditable 
      value={value} 
      onChange={changeValue} 
      startWithInput={false} 
    />
  );
}
```

## CSS EDIT

```css | pure
  .LabelEditable { }   /* Container in the component */

  .LabelEditable .label-editable { } /* Only Label Element */

  .LabelEditable .input-editable { } /* Only Input Element */
```