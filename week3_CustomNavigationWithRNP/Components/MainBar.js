import { getHeaderTitle } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Appbar } from 'react-native-paper'

export default function MainBar({navigation, route, options, back}) {
    const title = getHeaderTitle(options, route.name)
    const currentNavigation = useNavigation()

   return (
    <Appbar.Header>
        {back ? (
          <Appbar.BackAction onPress={navigation.goBack}/>
          ) : null}
       
        <Appbar.Content title={title} />
        
        {!back ? (
          <Appbar.Action 
            icon="arrow-right" 
            onPress={() => currentNavigation.navigate('MD Nav Demo Second')}
          />
        ) : null}
    </Appbar.Header>
  )
}
