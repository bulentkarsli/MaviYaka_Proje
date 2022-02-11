import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Col} from 'react-native-easy-grid';
import IconIo from 'react-native-vector-icons/Ionicons';
import {Table, Row} from 'react-native-table-component';
import Veri from "./model";

const IsEmriListeleme = ({route,navigation}) => {

  const {odaNo, hizmet, is, aciklama} = route.params;
  const tabloBaslik = ['Oda No', 'Hizmet', 'Talep', 'Açıklama', 'Durum', 'Atanan Personel'];

  const gorev = [odaNo, hizmet, is, aciklama, '', ''];
  const gorev2 = ['5006', 'Taşıma', 'Hasta Taşıma', 'Normal Odaya Taşınacak', 'Beklet', 'Ali Veli'];

  return (
    <ScrollView style={{marginTop: 60}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>
        İş Emri Listeleme
      </Text>

      <View style={{marginTop: 10}}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
          <Row data={tabloBaslik} />
          <Row data={gorev} />
          <Row data={gorev2} />
        </Table>
      </View>

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <Col style={{paddingLeft: 20}}>
          <IconIo name={'add-circle-outline'} size={50} onPress={() => {navigation.navigate('Detay', {
            talep: hizmet,
            aciklama: aciklama,
            personel:"Bulent Karsli"

          });}}/>
        </Col>
      </View>
    </ScrollView>
  );
};

export default IsEmriListeleme;
