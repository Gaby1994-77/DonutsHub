import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {styles} from './HomeScreenStyles';
import Images from '../../assets/welcome/img.jpg';
import {useAppContext} from '../../context/AppContext';

type RootStackParamList = {
  Home: undefined;
  Details: {data: string};
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {dispatch} = useAppContext();

  const handleEnterShop = () => {
    dispatch({type: 'RESET_CART'});
    navigation.navigate('Details', {data: 'DonutHub'});
  };

  return (
    <ImageBackground
      source={Images}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={styles.topTextView}>
        <Text style={styles.boldText}>Welcome</Text>
        <Text style={[styles.boldText, {fontSize: 24}]}>To DonutHub</Text>
      </View>

      <View style={styles.bottomButtonView}>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleEnterShop}>
          <Text style={styles.buttonTextStyle}>Enter Shop</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
