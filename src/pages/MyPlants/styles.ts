import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    backgroundColor: colors.background
  },
  plants: {
    flex: 1,
    width: '100%',
    marginTop: 40,
  },
  myPlantsContainer: {
    flex: 1,
  },
  myPlants:{
    flex: 1,
    marginTop: 10,
  },
  plantsTitle: {
    fontSize: 24,
    lineHeight: 32,
    color: colors.heading,
    fontFamily: fonts.heading
  }
});

export default styles;