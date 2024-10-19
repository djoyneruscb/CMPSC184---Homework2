import {View, Text, Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_APP, FIREBASE_AUTH } from '../../FirebaseConfig';

import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const List = ({navigation}: any) => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() =>{
      onAuthStateChanged(FIREBASE_AUTH,(user)=>{
        console.log('user',user);
        setUser(user);
      })
    }, [])

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={() => navigation.navigate('details')} title="Open Details" />
            <Button onPress={() => FIREBASE_AUTH.signOut()} title="Log out" />
            <Text> {user?.email} </Text>
        </View>
    )
}

export default List