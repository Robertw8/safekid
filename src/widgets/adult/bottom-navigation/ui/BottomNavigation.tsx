import { styled } from 'nativewind';
import { Link, usePathname } from 'expo-router';

import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const NavBar = styled(View);

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();

  const isActive = (route: string) => {
    return route === pathname;
  };

  return (
    <NavBar className="bg-black w-screen flex-row justify-between items-center h-14 px-8 relative">
      <Link href="/adult/information">
        <Entypo
          name="info-with-circle"
          size={28}
          color={isActive('/adult/information') ? '#7D5DFF' : '#fff'}
        />
      </Link>

      <Link href="/adult/dashboard">
        <FontAwesome5
          name="home"
          size={28}
          color={isActive('/adult/dashboard') ? '#7D5DFF' : '#fff'}
        />
      </Link>
      <Link href="/adult/profile">
        <FontAwesome
          name="user"
          size={28}
          color={isActive('/adult/profile') ? '#7D5DFF' : '#fff'}
        />
      </Link>
    </NavBar>
  );
};

export default BottomNavigation;
