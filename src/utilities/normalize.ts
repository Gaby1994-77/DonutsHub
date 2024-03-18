import {Dimensions, PixelRatio} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 320;

export const normalize = (size: number): number => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
