import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: '100%',
    height: 100,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  remove:{
    width: 80,
  },
  buttonRemove: {
    width: 120,
    marginTop: 10,
    height: 100,
    right: 40,
    backgroundColor: colors.red,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingLeft: 30,
  },
  title: {
    flex: 1,
    fontSize: 17,
    lineHeight: 25,
    fontWeight: 'bold',
    marginLeft: 16,
    color: colors.heading,
    fontFamily: fonts.heading
  },
  details: {
    alignItems: 'flex-end',
  },
  timeLabel: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark
  }
});

export default styles;