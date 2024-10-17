import {View, Text, Button} from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const List = ({navigation}: any) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={() => navigation.navigate('details')} title="Open Details" />
            <Button onPress={() => FIREBASE_AUTH.signOut()} title="Log out" />
        </View>
    )
}

export default List