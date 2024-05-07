import { styled } from 'nativewind';
import { BackButton, IntroductionText, TertiaryTitle } from '@/shared/ui';
import { ScrollView, View } from 'react-native';

const WrapperText = styled(ScrollView);

const CommunicationChild: React.FC = () => {
  return (
    <>
      <View>
        <BackButton classNames="top-4 left-0" />
        <TertiaryTitle
          children="Інструкція спілкування з дитиною"
          classNames="ml-10"
        />
      </View>
      <WrapperText className="mt-6">
        <IntroductionText>
          Як пояснити дитині навіщо цей додаток та що він робить? Наш додаток
          було створено з єдиною метою - підвищити ступінь безпеки та спокою
          дитини та її батьків. Тому ми вважаємо, що вони є пріорітетними для
          нас, а це можливо, коли кожен з вас буде розуміти, що саме буде
          відбуватися з дитячим пристроем при роботі нашого додатку. Тому при
          використанні додатку важливо попередити вашу дитину про наступні
          моменти: Додаток не стежить за дитиною, не зберігає та не записує
          ніякі розмови, які відбуваються в оточенні дитини. Він реагує тільки у
          тому разі, якщо в оточенні дитини та при розмові з нею було
          використано одну з тригерних фраз, список яких ретельно складено за
          участю психологів. При розпізнанні однієї з тригерних фраз додаток
          звуковим сигналом на пристрої дитини буде сповіщати її про потенційну
          небезпеку. Дитині потрібно пояснити, що це не завжди може бути
          небезпечна для неї ситуація, а звуковий сигнал націлений більше на
          привернення уваги дитини, тобто, щоб вона звернула увагу на те, з ким
          спілкується та, по суті, задала собі запитання “Чи знайома вона з
          людиною, з якою спілкується, досить добре, чи це хтось зовсім
          сторонній?”. І, якщо вона не впевнена у людині, яка з нею розмовляє,
          то вона може, наприклад: Ввічливо сказати, що їй потрібно кудись йти,
          бо на неї чекають (мама/тато/бабуся/друзі). Якщо вона хвилюється, вона
          може звернутися до когось зі знайомих дорослих (наприклад, до вчителя,
          або подзвонити до вас). Не потрібно лякатися, потрібно зберігати
          спокій. Якщо вона розуміє, що їй загрожує небезпека, можна звенутися
          до будь-якого дорослого поруч або подзвонити вам. Пояснити, як на ваш
          погляд ліпше себе поводити у таких ситуаціях. Ви можете сказати
          дитині, що ви теж будете отримувати звуковий сигнал (ви можете його
          відключити у пункті меню “Налаштувати сповіщення” у своєму додатку) та
          повідомлення про те, що тригерну фразу розпізнано. Ви можете
          домовитись про те, що ви можете дзвонити їй у таких ситуаціях завжди
          або коли будете вільні, або що вона завжди може вам зателефонувати, -
          це надає впевненості дитині. Також ми рекомендуємо вам протестувати
          роботу додатку, бо на наш погляд важливо почути звуки, які будуть
          сповіщати про потенційну небезпеку, щоб не налякати дитину у
          майбутньому, а також пояснити навіщо це все взагалі потрібно. З тим,
          як ви можете протестувати роботу додатку, ви можете ознайомитись у
          пункті меню “Протестувати додаток”. Ми бажаємо вам та вашим дітям
          безпеки та спокою!
        </IntroductionText>
      </WrapperText>
    </>
  );
};

export default CommunicationChild;