import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './CardStyle';

const Card = props => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Beğendiniz');
          }}
          style={styles.button_touch}>
          <Text style={styles.button_title}>Beğen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
