import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import YeniIsEmri from './yeniIsEmri';
import IsEmriListele from './isEmriListele';
import IsEmriDetay from './isEmriDetay';
import AnaSayfa from "./anaSayfa";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Olustur">
        <Stack.Screen
          name="Olustur"
          component={YeniIsEmri}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Liste"
          component={IsEmriListele}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detay"
          component={IsEmriDetay}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
