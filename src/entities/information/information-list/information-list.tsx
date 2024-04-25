import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export const informationListData = [
  {
    icon: <Ionicons name="book-outline" size={24} color="black" />,
    route: '/',
    title: 'Інструкція спілкування з дитиною',
  },
  {
    icon: <Ionicons name="help-circle-outline" size={24} color="black" />,
    route: '/',
    title: 'Часті запитання (FAQ)',
  },
  {
    icon: (
      <MaterialCommunityIcons name="flask-outline" size={24} color="black" />
    ),
    route: '/',
    title: 'Протестувати додаток',
  },
  {
    icon: <Ionicons name="document-text-outline" size={24} color="black" />,
    route: '/',
    title: 'Умови та політика конфіденційності',
  },
  {
    icon: <Ionicons name="chatbubble-outline" size={24} color="black" />,
    route: '/',
    title: 'Підтримка',
  },
] as const;
