import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import constants from '../api/constants';

const HeadingQuestion = (props: {
  before_blank: string;
  correctAnswer: string;
  after_blank: string;
}) => {
  return (
    <View style={styles.headingHeader}>
      <Text style={styles.headingQuestion}>{props.before_blank}</Text>
      <Text style={styles.headingAnswer}>{props.correctAnswer}</Text>
      <Text style={styles.headingQuestion}>{props.after_blank}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingQuestion: {
    color: constants.theme.light.text,
    fontWeight: '400',
    fontSize: 20,
    paddingVertical: 20,
    paddingHorizontal: 2,
  },
  headingAnswer: {
    color: constants.theme.light.text,
    fontWeight: '700',
    fontSize: 20,
    paddingVertical: 20,
    paddingHorizontal: 2,
    textDecorationLine: 'underline',
  },
  headingHeader: {
    flexDirection: 'row',
  },
});

export default HeadingQuestion;
