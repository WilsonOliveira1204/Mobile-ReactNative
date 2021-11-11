import React from 'react';
import { View, Text, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props){
    let img = 'https://www.rbsdirect.com.br/filestore/9/2/8/3/2/3_af73d422bdfe592/323829_79f0118b61b85f9.jpg?w=800&h=535&a=c%201x'
    return(
        <DrawerContentScrollView {...props}>
            <View style={{width: '100%', height: 77, alignItems: 'center', justifyContent: 'center',marginTop: 25}}>
                <Image 
                source={{uri: img}}
                style={{width: 75, height: 75, borderRadius: 100, borderWidth: 2, borderColor: "#90f"}}
                />
                <Text style={{color:'#000', fontSize: 17, marginTop: 10, marginBottom: 25}}>
                    Samuel Higor Correia da Silva
                </Text>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}