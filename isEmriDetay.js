import React from 'react';
import {
  Alert, Button,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import SelectDropdown from 'react-native-select-dropdown';
import {Col} from 'react-native-easy-grid';
import IconIo from 'react-native-vector-icons/Ionicons';
import {Table, Row} from 'react-native-table-component';

const IsEmriDetay = ({route}) => {

  const {talep, aciklama, personel}=route.params;

  const durum = ['İş Emrine Başla', 'Beklet', 'Fotoğraf Ekle', 'Bitir'];
  const tabloBaslik = ['Başlangıç', 'Bitiş', 'Geçen Süre'];
  const gorevZaman = ['04.02.2022 14.30', '11.04.2022', ' '];

  return (
    <ScrollView style={{marginTop: 60}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>
        İş Emri Detay
      </Text>

      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Col style={{paddingLeft: 20}}>
          <Text>Talep</Text>
        </Col>
        <Col style={{flexDirection: 'column', paddingLeft: 90}}>
          <TextInput
            value={talep}
            style={{
              width: 150,
            }}
          />
        </Col>
      </View>

      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Col style={{paddingLeft: 20}}>
          <Text>Yapılan İş Açıklaması</Text>
        </Col>
        <Col>
          <TextInput
            value={aciklama}
            style={{
              width: 200,
            }}
          />
        </Col>
      </View>

      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Col style={{paddingLeft: 20}}>
          <Text>Durum</Text>
        </Col>
        <Col>
          <SelectDropdown
            defaultButtonText={'Durum Seçiniz'}
            data={durum}
            onSelect={(selectedItem, index) => {
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

      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Col style={{paddingLeft: 20}}>
          <Text>Üzerine Alan Personel</Text>
        </Col>
        <Col>
          <TextInput
            title={'Oda No'}
            value={personel}
            placeholder="oda numarasi giriniz"
            style={{
              width: 150,
            }}
          />
        </Col>
      </View>

      <View style={{marginTop: 50}}>
        <Table
          style={{paddingLeft: 20}}
          borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
          <Row data={tabloBaslik} />
          <Row data={gorevZaman} />
        </Table>
      </View>
    </ScrollView>
  );
};

export default IsEmriDetay;
