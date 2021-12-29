import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class PostCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.cardContainer}>
            <Image
              source={require('../assets/profile_img.png')}
              style={styles.profileImage}
            />
            <Text style={styles.authorName}>{this.props.post.author}</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('PostScreen', {
                  xyz: this.props.post,
                })
              }}
            >
              <Image
                source={require('../assets/post.jpeg')}
                style={styles.image}
              />
              <Text style={styles.caption}>{this.props.post.caption}</Text>
            </TouchableOpacity>
            <View style={styles.likeButtonContainer}>
              <Ionicons
                name={'heart'}
                size={RFValue(20)}
                color={'#fff'}
                style={styles.icon}
              />
              <Text style={styles.likeText}>{this.props.post.likes}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  cardContainer: {
    marginLeft: RFValue(13),
    marginRight: RFValue(13),
    backgroundColor: '#1c1c1c',
    borderRadius: RFValue(20),
  },
  profileImage: {
    resizeMode: 'contain',
    height: RFValue(20),
    width: '100%',
    borderRadius: 1000,
    margin: RFValue(15),
    marginBottom: RFValue(-40),
    marginRight: '90%',
    alignSelf: 'center',
  },
  authorName: {
    color: '#fff',
    padding: RFValue(20),
    textAlign: 'left',
    marginLeft: '8%',
    fontSize: RFValue(15),
  },
  image: {
    resizeMode: 'contain',
    height: RFValue(250),
    width: '100%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  caption: {
    color: '#fff',
    padding: RFValue(20),
    textAlign: 'left',
    fontSize: RFValue(15),
  },
  likeButtonContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    marginBottom: RFValue(20),
    width: RFValue(100),
    alignSelf: 'center',
    borderRadius: RFValue(50),
  },
  icon: {
    marginTop: '5%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: '13%',
  },
  likeText: {
    padding: RFValue(10),
    color: '#fff',
    textAlign: 'center',
    fontSize: RFValue(16),
  },
})
