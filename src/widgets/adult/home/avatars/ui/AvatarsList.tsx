import { styled } from 'nativewind';
import { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { TertiaryTitle } from '@/shared/ui';

import { avatars } from '@/entities/avatar';

const Wrapper = styled(View);
const List = styled(TouchableOpacity);
const Avatar = styled(Image);

const AvatarsList: React.FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  console.log(selectedAvatar);

  const handleSelectAvatar = avatar => {
    setSelectedAvatar(avatar);
  };

  return (
    <>
      <TertiaryTitle classNames="mb-4 ml-4">
        Обрати аватар для дитини
      </TertiaryTitle>
      <Wrapper className="flex-row flex-wrap gap-4 justify-center">
        {avatars.map((avatar, index) => (
          <List key={index} onPress={() => handleSelectAvatar(avatar)}>
            <Avatar source={avatar} className="w-[90] h-[90] rounded-full" />
          </List>
        ))}
      </Wrapper>
    </>
  );
};

export default AvatarsList;
