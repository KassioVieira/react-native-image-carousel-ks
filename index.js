import React, { Component } from "react";

import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";

class Slide extends Component {
  state = {
    current: 0,
    width: Dimensions.get("window").width
  };

  componentDidMount() {
    this.loop();
  }

  loop = () => {
    this.interval = setInterval(() => {
      let imageIndex = this.state.current + 1;
      if (imageIndex >= this.props.img.length) {
        imageIndex = 0;
      }
      this.next(imageIndex);
    }, 5000);
  };

  next = index => {
    const x = this.state.width * index;
    this.refs._scrollView.scrollTo({ x, y: 0, animated: true });
    this.setState({ current: index });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { img } = this.props;
    console.log(img);

    return (
      <View style={styles.container}>
        <ScrollView
          ref="_scrollView"
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={event => {
            this.setState({
              current: Math.floor(
                event.nativeEvent.contentOffset.x / this.state.width
              )
            });
          }}
        >
          {img.map((image, i) => {
            return (
              <Image
                key={`image${i}`}
                source={{ uri: image }}
                style={{ width: this.state.width }}
              />
            );
          })}
        </ScrollView>
        <View style={styles.row}>
          {img.map((image, index) => {
            return (
              <TouchableOpacity
                key={`indicator${index}`}
                style={
                  index === this.state.current
                    ? styles.indicatorSelected
                    : styles.indicator
                }
                onPress={() => this.next(index)}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  row: {
    flexDirection: "row",
    height: 15,
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: 10
  },

  indicator: {
    margin: 3,
    width: 24.75,
    height: 10.15,
    borderRadius: 3.17,
    backgroundColor: "#CCCCCC"
  },

  indicatorSelected: {
    width: 24.75,
    height: 10.15,
    borderRadius: 3.17,
    backgroundColor: "white"
  }
});

export default Slide;
