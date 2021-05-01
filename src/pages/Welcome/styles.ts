import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 36,
    lineHeight: 38
  },
  subTitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingHorizontal: 44,
    lineHeight: 25,
    color: colors.heading,
  },
  image:{
    height: Dimensions.get('window').width * 0.6
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    width: 56,
    height: 56,
    marginBottom: 16
  },
  btnIcon: {
    fontSize: 32,
    color: colors.white
  }
});

export default styles;