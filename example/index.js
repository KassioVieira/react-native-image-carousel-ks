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
