import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

const Card = (props: {
  containerStyle: ViewStyle;
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <View
      style={{
        ...styles.card,
        ...props.containerStyle,
      }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'grey',
    shadowOpacity: 0.3,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#F5F9FE',
  },
});

export default Card;
