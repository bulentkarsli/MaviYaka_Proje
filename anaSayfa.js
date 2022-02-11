import React from 'react';
import { Alert, Button, ScrollView, View } from "react-native";
import { Col } from "react-native-easy-grid";

const AnaSayfa = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <Col>
          <Button title="Oluştur" onPress={() => {navigation.navigate('Olustur');}} />
        </Col>
      </View>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <Col>
          <Button title="Listele" onPress={() => {navigation.navigate('Liste');}} />
        </Col>
      </View>
    </ScrollView>

  );
};

export default AnaSayfa;
