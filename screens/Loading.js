import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'

export default class Loading extends React.Component {
  checkIfLogedIn = () => {
    try {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.props.navigation.navigate('DashboardScreen')
        } else {
          this.props.navigation.navigate('LoginScreen')
        }
      })
    } catch (e) {
      alert(e.message)
    }
  }

  componentDidMount() {
    this.checkIfLogedIn()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading.......</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
})
