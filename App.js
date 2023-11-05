import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import SettingsIcon from '@mui/icons-material/Settings';


const App = () => {
  const handleBackButton = () => {
    // Handle your back button click action here
    console.log('Back button clicked');
    // You can navigate back to the previous screen or perform any other action
  };

  const handleBoxClick = (boxNumber) => {
    console.log(`Box ${boxNumber} clicked`);
    // Handle the box click action here
  };

  // Define handleIconClick function or remove related code
  const handleIconClick = (iconName) => {
    console.log(`Icon ${iconName} clicked`);
    // Handle the icon click action here
  };

  return (
    <ImageBackground
      source={require('./assets/Background.png')}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
          <Icon name="chevron-left" size={20} color="white" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>OTHERS</Text>
      </View>

      <ScrollView style={styles.middleContainer}>
        <View style={styles.boxesContainer}>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => handleBoxClick(1)} style={styles.boxContent}>
              <Icon name="user" size={30} color="red" style={styles.profileIcon} />
              <Text style={styles.boxText}>50 mins ago</Text>
              <Text style={styles.boxText}>2nd St.</Text>
              <Image source={require('./assets/2ndStreet.jpg')} style={styles.boxImage} />
              <View style={styles.boxeTextContainer}>
                <Text style={styles.boxesText}>"IMPROPER GARBAGE DISPOSAL"</Text>
                <Text style={styles.boxeText}>Completed</Text>
              </View>
              <CheckOutlinedIcon name="completed" size={10} color="green" style={styles.profilesIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => handleBoxClick(2)} style={styles.boxContent}>
              <Icon name="user" size={30} color="red" style={styles.profileIcon} />
              <Text style={styles.boxText}>6 hours ago</Text>
              <Text style={styles.boxText}>3rd St.</Text>
              <Image source={require('./assets/3rdStreet.jpg')} style={styles.boxImage} />
              <View style={styles.boxeTextContainer}>
                <Text style={styles.boxesTexts}>"FIGHTING PEOPLE"</Text>
                <Text style={styles.boxeTextss}>Completed</Text>
                <CheckOutlinedIcon name="completed" size={10} color="green" style={styles.profileIcons} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Add the icon section at the bottom */}
      <View style={styles.iconSection}>
        <TouchableOpacity onPress={() => handleIconClick('exclamation-triangle')} style={styles.iconContainer}>
          <Icon name="exclamation-triangle" size={40} color="lightgreen" />
          <Text style={styles.iconText}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconClick('cog')} style={styles.iconContainer}>
          <Icon name="cog" size={30} color="orange" />
          <Text style={styles.iconText}>InProgress</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconClick('star')} style={styles.iconContainer}>
          <Icon name="star" size={40} color="gold" />
          <Text style={styles.iconText}>Completed</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'black',
    padding: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backButton: {
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: 40,
  },
  boxesTexts: {
    marginLeft: 110,
    color: 'red',
    fontWeight: '500',
    fontSize: '20',
  },
  boxeTextss: {
    marginTop: 44,
    marginLeft: -110,

  },
  headerText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 1,
    marginLeft: 15,
  },
  profilesIcon: {
    color: 'green',
    marginLeft: 200,
    marginTop: -19,
    height: 20,
  },
  profileIcons: {
    color: 'green',
    marginLeft: 1,
    marginTop: 45,
    height: 20,

  },
  middleContainer: {
    flex: 1,
  },
  boxesContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  box: {
    backgroundColor: 'white',
    width: 350,
    height: 350,
    alignItems: 'flex-start',
    justifyContent: 'left',
    marginBottom: 20,
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  boxContent: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  boxText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 70,
    marginTop: -45,
    marginBottom: 40,
  },
  boxeTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  boxesText: {
    fontSize: 15,
    marginLeft: 57,
    marginTop: -10,
    color: 'red',
    fontWeight: '600',
  },
  profileIcon: {
    marginBottom: 10,
    marginLeft: 30,
    marginTop: 17,
  },
  boxImage: {
    width: 290,
    height: 200,
    marginLeft: 30,
    marginTop: -30,
    borderRadius: 5,
  },
  boxeText: {
    marginTop: 45,
    marginLeft: -160,
    fontStyle: 'italic',
    fontSize: 15,
    textAlign:'center,'
  },
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginLeft: 15,
  },
  icon: {
    marginTop: 10,
    marginLeft: 15,
  },
  iconText: {
    marginTop: 10,
    color: 'orange',
    fontSize: 15,
  },
});

export default App;
