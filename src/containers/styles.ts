import {StyleSheet} from 'react-native';
import constants from '../api/constants';
import {SCREEN_WIDTH} from '../api/WindowSize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.theme.light.background,
    height: '100%',
    paddingTop: '15%',
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: constants.theme.light.text,
    fontSize: 14,
  },
  translationQuestion: {
    color: constants.theme.light.text,
    fontWeight: '500',
    fontSize: 20,
    paddingHorizontal: 2,
  },
  optionContainerHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  optionsContainer: {
    backgroundColor: 'white',
    marginHorizontal: 40,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  answerContainer: {
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  optionsText: {
    minWidth: 40,
  },
  translationHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scenarioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 30,
  },
  scenarioTitle: {color: 'white', fontSize: 14, fontWeight: 'bold'},
  footerContainer: {
    position: 'absolute',
    bottom: 60,
    width: SCREEN_WIDTH,
  },
  correctAnswerContainer: {
    position: 'absolute',
    bottom: 30,
    width: SCREEN_WIDTH,
    height: 150,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  doubleItem: {alignSelf: 'flex-end'},
  //button card
  titleStyle: {
    color: 'white',
  },
  textAlignment: {
    justifyContent: 'center',
  },
  containerStyle: {
    height: 40,
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  underline: {
    borderBottomWidth: 1,
    width: 50,
    borderBottomColor: 'white',
    alignSelf: 'flex-end',
    marginHorizontal: 5,
  },
});
