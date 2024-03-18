import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topTextView: {
    marginTop: 60,
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'normal',
    fontSize: 40,
    color: 'black',
  },
  bottomButtonView: {
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: 'rgba(128, 128, 128, 0.6)',
    padding: 10,
    borderRadius: 20,
    width: '35%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 20,
  },
});
