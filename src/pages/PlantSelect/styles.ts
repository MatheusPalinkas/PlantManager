import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    marginHorizontal: 32,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 23,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 23,
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    margin: 32,
    paddingRight: 50
  },
  plants: {
    flex: 1,
    marginHorizontal: 32,
    marginBottom: 40,
    justifyContent: 'center'
  },
  plantsList: {
    justifyContent: 'space-between'
  }
});

export default styles;