import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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

  proximo = () => {
    const { current } = this.state;
    const { img } = this.props;
    const amount = img.length;

    if (current === amount - 1) {
      this.next(0);
    } else {
      this.next(current + 1);
    }
  };

  anterior = () => {
    const { current } = this.state;
    const { img } = this.props;
    const amount = img.length;

    if (current === 0) {
      this.next(amount - 1);
    } else {
      this.next(current - 1);
    }
  };

  selecteStyleIndicator = circle => {
    if (circle) {
      return styles.circleIndicator;
    }

    if (!circle) {
      return styles.indicator;
    }
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      img,
      arrow,
      showIndicator,
      circleIndicator,
      indicatorColor,
      indicatorSelectedColor
    } = this.props;
    console.log(img);

    return (
      <View style={styles.container}>
        <ScrollView
          ref="_scrollView"
          horizontal
          showsHorizontalScrollIndicator={false}
          onScrollEndDrag={event => {
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
        {arrow && (
          <View style={styles.directions}>
            <TouchableOpacity onPress={() => this.anterior()}>
              <Icon name="chevron-left" color="white" size={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.proximo()}>
              <Icon name="chevron-right" color="white" size={50} />
            </TouchableOpacity>
          </View>
        )}

        {showIndicator && (
          <View style={styles.row}>
            {img.map((image, index) => {
              return (
                <TouchableOpacity
                  key={`indicator${index}`}
                  style={[
                    [
                      index === this.state.current
                        ? this.selecteStyleIndicator(circleIndicator)
                        : this.selecteStyleIndicator(circleIndicator)
                    ],
                    [
                      index === this.state.current
                        ? setIndicatorColor(indicatorSelectedColor)
                        : setIndicatorColor(indicatorColor)
                    ]
                  ]}
                  onPress={() => this.next(index)}
                />
              );
            })}
          </View>
        )}
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

  directions: {
    position: "absolute",
    zIndex: 10,
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
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
    borderRadius: 3.17
  },

  circleIndicator: {
    margin: 3,
    width: 12,
    height: 12,
    borderRadius: 6
  }
});

Slide.defaultProps = {
  indicatorColor: "#FFFFFF",
  indicatorSelectedColor: "#5C6270",
  showIndicator: true,
  circleIndicator: true,
  arrow: true
};

const setIndicatorColor = color => {
  return {
    backgroundColor: color
  };
};

export default Slide;
