import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ props.title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1beca1',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase'
  }
});

export default Header;

