import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 36
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image:{
    width: 292,
    height: 284
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
  btnText: {
    fontSize: 24,
    color: colors.white
  }
});

export default styles;