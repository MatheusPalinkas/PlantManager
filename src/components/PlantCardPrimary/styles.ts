import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shape,
    maxWidth: '46%',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  photo: {
  },
  text: {
    fontSize: 13,
    lineHeight: 23,
    fontWeight: 'bold',
    marginVertical: 16,
    color: colors.green_dark,
    fontFamily: fonts.heading
  },
});

export default styles;