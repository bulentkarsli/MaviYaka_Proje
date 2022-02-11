import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  Image
} from "react-native";

import SelectDropdown from 'react-native-select-dropdown';
import {Col} from 'react-native-easy-grid';
import IconIo from 'react-native-vector-icons/Ionicons';

const YeniIsEmri = ({navigation}) => {

  const [odaNo, setOdaNo] = React.useState('');
  const [aciklama, setAciklama] = React.useState('');
  let hizmet = "";
  let is = "";
  const hizmetler = [
    'Temizlik',
    'Tasima',
    'Bina Arazi'
  ];
  const isler = [
    'Lamba Kirik',
    'Alan Temizligi',
    'Hasta Tasima',
    'Genel Kontrol'
  ];

  return (
    <ScrollView style={{marginTop: 60, flexDirection: 'row'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>
        Yeni İş Emri
      </Text>

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <Col style={{paddingLeft: 20}}>
          <Text>Oda No</Text>
        </Col>
        <Col style={{flexDirection: 'column', paddingLeft: 100}}>
          <TextInput
            title={'Oda No'}
            onChangeText={value => setOdaNo(value)}
            value={odaNo}
            placeholder="oda numarasi giriniz"
            style={{
              borderWidth: 1,
              width: 200,
            }}
          />
        </Col>
      </View>

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <Col style={{paddingLeft: 20}}>
          <Text>Hizmet</Text>
        </Col>
        <Col style={{flexDirection: 'column', paddingLeft: 100}}>
          <SelectDropdown
            defaultButtonText={'Hizmet Seçiniz'}
            data={hizmetler}
            onSelect={(selectedItem) => {
              hizmet=selectedItem;
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
          />
        </Col>
      </View>

      <View style={{flexDirection: 'row', marginTop: 100}}>
        <Col style={{paddingLeft: 20}}>
          <Text>Yapılacak İş</Text>
        </Col>
        <Col style={{flexDirection: 'column', paddingLeft: 70}}>
          <SelectDropdown
            defaultButtonText={'Yapılacak İşi Seçiniz'}
            data={isler}
            onSelect={(selectedItem) => {
              is=selectedItem;
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
          />
        </Col>
      </View>

      <View style={{flexDirection: 'row', marginTop: 100}}>
        <Col style={{paddingLeft: 20}}>
          <Text>Açıklama</Text>
        </Col>
        <Col style={{flexDirection: 'column', paddingLeft: 80}}>
          <TextInput
            onChangeText={value => setAciklama(value)}
            value={aciklama}
            placeholder="Lutfen is aciklamasi giriniz"
            style={{
              borderWidth: 1,
              width: 200,
              height: 100,
            }}
          />
        </Col>
      </View>

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <Col style={{paddingLeft: 20}}>
          <IconIo name={"add-circle-outline"} size={50} />
        </Col>
      </View>

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <Col>
          <Button title="Oluştur" onPress={() => {navigation.navigate('Liste', {
            odaNo: odaNo,
            hizmet: hizmet,
            is: is,
            aciklama: aciklama
          });}} />
        </Col>
      </View>
    </ScrollView>
  );
};

export default YeniIsEmri;
