import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    height: 40,
    width: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  containerActive: {
    backgroundColor: colors.green_light
  },
  text: {
    color: colors.heading,
    fontSize: 16,
    fontFamily: fonts.text
  },
  textActive: {
    fontWeight: 'bold',
    fontFamily: fonts.heading,
    color: colors.green_dark
  }
});

export default styles;