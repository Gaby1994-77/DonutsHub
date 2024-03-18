import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import styles from '../screens/SettingsScreen/SettingsScreenStyles';

interface CardProps {
  title: string;
  description: string;
  image: ImageSourcePropType;
  price: number | string;
  quantity: number;
  removeFromCart: () => void;
}

const OrderCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  price,
  quantity,
  removeFromCart,
}) => {
  const handleRemoveFromCart = () => {
    removeFromCart();
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image style={styles.image} source={image} />
        <View style={styles.textContent}>
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
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleRemoveFromCart}
        style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderCard;
