import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import constants from '../api/constants';
import ChatHead from './UI/ChatHead';

const TranslationQuestion = (props: {
  data?: any;
  translationdata?: any;
  showSuggestionTitle?: any;
  suggestionsData?: string | undefined;
  setShowSuggestionTitle?: any;
  setSuggestionsData?: any;
}) => {
  const {
    translationdata,
    showSuggestionTitle,
    suggestionsData,
    setShowSuggestionTitle,
    setSuggestionsData,
  } = props;

  const getSuggestions = (item: any, sugdata: any) => {
    console.log(translationdata);
    setShowSuggestionTitle(item);
    setSuggestionsData(sugdata);
  };
  return (
    <View style={styles.container}>
      {props.data.word.map(
        (item: string | undefined, index: React.Key | null | undefined) => (
          <View key={index}>
            <View style={styles.defaultStyle}>
              {showSuggestionTitle === item ? (
                <ChatHead chatdata={suggestionsData} index={index} />
              ) : null}
            </View>
            <TouchableOpacity
              key={index}
              onPress={() =>
                getSuggestions(item, translationdata.translation[index])
              }>
              <Text style={styles.translationQuestion}>{item?.toString()}</Text>
            </TouchableOpacity>
          </View>
        ),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  defaultStyle: {
    height: 60,
  },
  translationQuestion: {
    color: constants.theme.light.text,
    fontWeight: '500',
    fontSize: 20,
    paddingHorizontal: 2,
  },
});

export default TranslationQuestion;
