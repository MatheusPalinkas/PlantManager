import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
  },
  plantName: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 30,
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    marginVertical: 20,
  },
  controller: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() + 10 || 20,

  },
  cardTip: {
    position: 'relative',
    bottom: 70,
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    fontSize: 14,
    color: colors.heading,
    marginBottom: 5,
  },
  dataTimePickerButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 40,
  },
  dataTimePickerText: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 24
  }
});

export default styles;