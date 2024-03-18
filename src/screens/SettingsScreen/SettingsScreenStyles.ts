import {StyleSheet, Dimensions} from 'react-native';

Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 75,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 8,
  },
  textContent: {
    marginTop: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  priceBadge: {
    position: 'absolute',
    top: -15,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5,
    width: 60,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    color: 'white',
    fontWeight: 'bold',
  },
  quantityBadge: {
    position: 'absolute',
    bottom: 30,
    right: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },

  quantityText: {
    marginHorizontal: 10,
    fontSize: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 11,
    alignItems: 'center',
    width: 80,
    height: 40,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
