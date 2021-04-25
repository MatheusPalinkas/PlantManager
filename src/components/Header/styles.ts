import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
    paddingVertical: 32,
  },
  greeting: {
    fontSize: 32,
    lineHeight: 40,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    lineHeight: 40,
    color: colors.heading,
    fontFamily: fonts.heading
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 40
  }
});

export default styles;