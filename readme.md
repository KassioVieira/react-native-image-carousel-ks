# React-Native Image Carousel KS

Componente React-Native para renderização de carousel de imagens de forma simples

# Install

#### step 1

```sh
  $ npm i react-native-image-carousel-ks
```

### step 2

```sh
  $ react-native link react-native-vector-icons
```

[Read the official documentation](https://github.com/oblador/react-native-vector-icons)

# Example

```js
import React, { Component } from "react";

import Slide from "react-native-image-carousel-ks";

export default class Example extends Component {
  render() {
    return (
      <View slide={{ flex: 1 }}>
        <Slide
          img={[
            "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/1487009/pexels-photo-1487009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ]}
        />
      </View>
    );
  }
}
```

### Result

![alt text](./example/image/one.png "Logo Title Text 1")

Example with arrow

```js
...
 <Slide
    arrow={true}
    img={[
      "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/1487009/pexels-photo-1487009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ]}
  />
...
```
### Result
![alt text](./example/image/two.png "Logo Title Text 1")
