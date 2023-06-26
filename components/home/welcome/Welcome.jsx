import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import styles from './welcome.style'
import {icons,SIZES} from '../../../constants';
import {useRouter} from "expo-router";

const jobTypes = ["Plein temps","Mi-temps", "Entrepreuneur"]

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName}>Hello Justin</Text>
          <Text style={styles.welcomeMessage}>Trouver l'emploi parfait</Text>
      </View>
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                    placeholder="Quel Job cherchez-vous ?"
                />
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
                <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={styles.searchBtnImage}
                />
            </TouchableOpacity>
        </View>
        <View style ={styles.tabsContainer}>
            <FlatList
                data={jobTypes}
                renderItem={({item})=>(
                    <TouchableOpacity
                        styles={styles.tab(activeJobType,item)}
                        onPress={()=>{
                            setActiveJobType(item);
                            router.push(`/search/${item}`)
                        }}
                    >
                        <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item=>item}
                contentContainerStyle={{columnGap:SIZES.small}}
                horizontal
            />
        </View>
    </View>
  )
}

export default Welcome
