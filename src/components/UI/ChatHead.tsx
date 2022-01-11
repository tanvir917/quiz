import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChatHead = (props: {
  index: React.Key | null | undefined;
  chatdata: string | null | undefined;
}) => {
  return (
    <View style={styles.suggestionsHead} key={props.index}>
      <Text style={styles.headstyle}>{props.chatdata}</Text>

      <View style={styles.rightArrow} />

      <View style={styles.rightArrowOverlap} />
    </View>
  );
};

const styles = StyleSheet.create({
  suggestionsHead: {
    backgroundColor: 'white',
    borderRadius: 10,
    minWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    maxHeight: 40,
  },
  rightArrow: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 9,
    height: 15,
    bottom: -10,
    borderBottomLeftRadius: 100,
    right: 22,
    transform: [{skewX: '-30deg'}],
  },
  rightArrowOverlap: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 10,
    height: 15,
    bottom: -10,
    right: 26,
    borderBottomRightRadius: 100,
    transform: [{skewX: '29deg'}],
  },
  headstyle: {fontSize: 16, color: 'black'},
});

export default ChatHead;
