import React from 'react';
import { StyleSheet, View, Text, Image, Button, Switch } from 'react-native';

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <Image
        source={{ uri: 'https://scontent.fcgy3-1.fna.fbcdn.net/v/t39.30808-6/459137460_1649779655864944_8352453607389496667_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGly2EYkeMQ6mdrdqAGoGBlfIurkUtZSxh8i6uRS1lLGEaheKVw96dSEJxMb5ef2fF1Se0GPUrs4hIzztQOwy-q&_nc_ohc=d-0uXsN9n1UQ7kNvgFOAGXl&_nc_ht=scontent.fcgy3-1.fna&_nc_gid=AeSd8VEgvzB0Mmm7mQlI7Kr&oh=00_AYCmq062x4OSFZVNik6wtKAWUWOOP_W8S4YasnWR3KwZIg&oe=670B243B'}} 
        style={styles.profileImage}
      />
      <Text style={styles.name}>Mhieljun Howard P. Budiongan</Text>
      <Text style={styles.joined}>Joined 1 week ago</Text>

      <View style={styles.settingsContainer}>
        <Text style={styles.settingText}>Profile</Text>
        <Text style={styles.settingText}>Manage User</Text>
        <Text style={styles.settingText}>Notifications</Text>
        <Text style={styles.settingText}>3rd Year BSIT</Text>
        <Text style={styles.settingText}>Section 3r6</Text>


        <View style={styles.darkModeRow}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
        <Button title="Sign Out" onPress={() => alert('Signing out...')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  joined: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  settingsContainer: {
    alignItems: 'flex-start',
    width: '80%',
  },
  settingText: {
    fontSize: 18,
    marginVertical: 10,
  },
  darkModeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
