import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import constants from '../api/constants';
import HeadingQuestion from '../components/HeadingQuestion';
import ButtonCom from '../components/ButtonCom';
import Icon from 'react-native-vector-icons/FontAwesome';
import TranslationQuestion from '../components/TranslationQuestion';
import {styles} from './styles';

const Home = () => {
  const [data, setData] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [selectedId, setSelectedId] = useState(false);
  const [showSuggestionTitle, setShowSuggestionTitle] = useState();
  const [suggestionsData, setSuggestionsData] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const checkAnswer = () => {
    if (data[questionIndex]?.translation?.answer === selectedId) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  };

  const nextQuestion = () => {
    if (data?.length - 1 === questionIndex) {
      setQuestionIndex(0);
      setIsCorrectAnswer(null);
      setShowSuggestionTitle(null);
      setSelectedId(false);
    } else {
      setQuestionIndex(questionIndex + 1);
      setIsCorrectAnswer(null);
      setShowSuggestionTitle(null);
      setSelectedId(false);
    }
  };

  useEffect(() => {}, [questionIndex]);

  useEffect(() => {
    const array:
      | React.SetStateAction<undefined>
      | FirebaseFirestoreTypes.DocumentData[] = [];
    const subscriber = firestore()
      .collection('questions')
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          array.push(documentSnapshot.data());
          setCorrectAnswer(documentSnapshot.data()?.heading?.in_blank);
        });
        setData(array);
      });
    return () => subscriber();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.scrollContainer}>
          <Text style={styles.headerText}>Fill in the missing word</Text>
          {/* heading */}
          {data && (
            <HeadingQuestion
              before_blank={data[
                questionIndex
              ]?.heading?.question.before_blank.word.join(' ')}
              after_blank={data[
                questionIndex
              ]?.heading?.question.after_blank.word.join(' ')}
              correctAnswer={data[questionIndex].heading.in_blank}
            />
          )}
          {data && (
            <View style={styles.translationHeader}>
              {/* left translation */}
              <TranslationQuestion
                data={data[questionIndex]?.translation?.question.before_blank}
                showSuggestionTitle={showSuggestionTitle}
                suggestionsData={suggestionsData}
                setShowSuggestionTitle={setShowSuggestionTitle}
                setSuggestionsData={setSuggestionsData}
                translationdata={
                  data[questionIndex]?.translation?.question.before_blank
                }
              />
              <View style={styles.doubleItem}>
                {selectedId ? (
                  <View
                    style={[
                      styles.answerContainer,
                      {
                        backgroundColor:
                          isCorrectAnswer !== null
                            ? isCorrectAnswer === true
                              ? constants.theme.light.success
                              : constants.theme.light.alert
                            : constants.theme.light.text,
                      },
                    ]}>
                    <Text
                      style={{
                        color:
                          isCorrectAnswer !== null
                            ? constants.theme.light.text
                            : constants.primary,
                      }}>
                      {selectedId}
                    </Text>
                  </View>
                ) : (
                  <View style={styles.underline} />
                )}
              </View>
              {/* right translation */}
              <TranslationQuestion
                data={data[questionIndex]?.translation?.question.after_blank}
                showSuggestionTitle={showSuggestionTitle}
                suggestionsData={suggestionsData}
                setShowSuggestionTitle={setShowSuggestionTitle}
                setSuggestionsData={setSuggestionsData}
                translationdata={
                  data[questionIndex]?.translation?.question.after_blank
                }
              />
            </View>
          )}
          {/* options */}
          <View
            style={{
              ...styles.optionContainerHeader,
              opacity: isCorrectAnswer !== null ? 0.3 : 1,
            }}>
            {data &&
              data[questionIndex]?.translation?.options?.map(
                (
                  option: {} | null | undefined,
                  index: React.Key | null | undefined,
                ) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSelectedId(option);
                    }}
                    style={[
                      styles.optionsContainer,
                      selectedId === option
                        ? {backgroundColor: constants.theme.light.failed}
                        : {backgroundColor: constants.theme.light.text},
                    ]}>
                    <Text style={styles.optionsText}>
                      {selectedId !== option ? option : null}
                    </Text>
                  </TouchableOpacity>
                ),
              )}
          </View>
        </View>
      </ScrollView>
      {/* footer */}
      <View style={styles.footerContainer}>
        <ButtonCom
          title={selectedId ? 'CHECK ANSWER' : 'CONTINUE'}
          textAlignment={styles.textAlignment}
          containerStyle={{
            ...styles.containerStyle,
            backgroundColor: selectedId
              ? constants.theme.light.success
              : constants.theme.light.failed,
          }}
          titleStyle={styles.titleStyle}
          onSelect={checkAnswer}
        />
      </View>
      {isCorrectAnswer !== null && (
        <View
          style={{
            ...styles.correctAnswerContainer,
            backgroundColor: isCorrectAnswer
              ? constants.theme.light.success
              : constants.theme.light.alert,
          }}>
          <View style={styles.scenarioContainer}>
            <Text style={styles.scenarioTitle}>
              {isCorrectAnswer ? 'Great Job!' : `Answer: ${correctAnswer}`}
            </Text>
            <Icon name="flag" size={20} color="white" />
          </View>
          <ButtonCom
            title={'CONTINUE'}
            textAlignment={styles.textAlignment}
            containerStyle={{
              ...styles.containerStyle,
            }}
            titleStyle={{
              color: isCorrectAnswer
                ? constants.theme.light.success
                : constants.theme.light.alert,
            }}
            onSelect={nextQuestion}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
