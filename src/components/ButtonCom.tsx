import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Card from './UI/Card';

const ButtonCom = (props: {
  containerStyle: ViewStyle;
  onSelect: ((event: GestureResponderEvent) => void) | undefined;
  textAlignment: ViewStyle;
  titleStyle: TextStyle;
  title: string;
}) => {
  return (
    <Card containerStyle={{...styles.cardlist, ...props.containerStyle}}>
      <View style={{...styles.progressContainer}} />
      <View style={{...styles.touchable}}>
        <TouchableOpacity onPress={props.onSelect}>
          <View style={{...styles.card, ...props.textAlignment}}>
            <Text style={{...styles.title, ...props.titleStyle}}>
              {props.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardlist: {
    marginBottom: 15,
    borderRadius: 7,
    marginLeft: '5%',
  },
  touchable: {
    borderRadius: 4,
    overflow: 'hidden',
    height: '100%',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  progressContainer: {
    height: '100%',
    position: 'absolute',
  },
});
export default ButtonCom;
