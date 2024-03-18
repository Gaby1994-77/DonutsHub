import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../screens/DetailsScreen/DetailsScreenStyles';

type CardProps = {
  title: string;
  description: string;
  image: any;
  price: number | string;
  incrementCartQuantity: () => void;
  decrementCartQuantity: () => void;
  inCart: boolean;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  price,
  incrementCartQuantity,
  decrementCartQuantity,
  inCart,
}) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (!inCart) {
      setQuantity(0);
    }
  }, [inCart]);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    incrementCartQuantity();
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
      decrementCartQuantity();
    }
  };

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={{...styles.textContent, minHeight: 90}}>
        <Text style={styles.title}>{title}</Text>
        <Text
          style={{...styles.description, flexShrink: 1}}
          numberOfLines={2}
          ellipsizeMode="tail">
          {description}
        </Text>
      </View>
      <View style={styles.priceBadge}>
        <Text style={styles.priceText}>$ {price}</Text>
      </View>
      <View style={styles.quantityBadge}>
        <TouchableOpacity
          onPress={decrementQuantity}
          style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}> -</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity
          onPress={incrementQuantity}
          style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
