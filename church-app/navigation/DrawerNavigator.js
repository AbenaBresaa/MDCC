import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../screens/HomeScreen';
import ModeratorScreen from '../screens/ModeratorScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          width: 280,
          backgroundColor:"#ebe6e6",
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Moderator" component={ModeratorScreen} />
    </Drawer.Navigator>
  );
}
