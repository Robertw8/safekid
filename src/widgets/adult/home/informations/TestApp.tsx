import { styled } from 'nativewind';
import { BackButton, IntroductionText, TertiaryTitle } from '@/shared/ui';
import { ScrollView, View } from 'react-native';

const WrapperText = styled(ScrollView);

const TestApp: React.FC = () => {
  return (
    <>
      <View>
        <BackButton classNames="top-1 left-0" />
        <TertiaryTitle children="Протестувати додаток" classNames="ml-10" />
      </View>
      <WrapperText className="mt-6">
        <IntroductionText>
          Як протестувати роботу додатку? Для початку, вам потрібно прив’язати
          дитину для свого акаунту. Якщо ви це вже зробили, ви повинні
          впевнитись, що налаштували додаток на пристрої дитини правильно та
          надали доступ до мікрофона обравши опцію “Коли додаток
          використовується” при запиті системи на надання доступу під час
          приєднання дитини до свого акаунту. У дитини на головному екрані
          повинен бути зображений лицар, а статус роботи “Дитина під наглядом”.
          Якщо на екрані дитини зображено людину, яка медитує, а статус роботи
          “Система не слухає”, це означає, що ви налаштували додаток правильно,
          але ви перевели систему у пасивний стан. Для того, щоб активувати
          роботу системи, ви можете зайти на головну сторінку свого додатку та
          увімкнути тумблер, зображений напроти цієї дитини. Якщо на екрані
          дитини є надпис про те, що вам потрібно налаштувати мікрофон, то для
          того, щоб протестувати роботу додатку, вам потрібно натиснути на
          кнопку “Налаштувати мікрофон” та надати доступ обравши опцію “Коли
          додаток використовується”. Якщо ви налаштували мікрофон вірно, статус
          на головний сторінці дитини зміниться на “Дитина під наглядом”. У
          додатку на своєму пристрої ви можете увімкнути або вимкнути звукове
          сповіщення для дорослого про потенційну небезпеку використавши тумблер
          (за замовчуванням ви отримуєте звукове повідомлення), якщо оберете
          пункт меню “Налаштувати сповіщення” у пункті “Інформація” на
          навігаційній панелі додатку. Тепер, переконавшись, що все налаштовано
          вірно, ви можете перейти до тестування додатку. Для того, щоб
          протестувати додаток, ви можете використати одну з тестових тригерних
          фраз: “жовто-полосата валізка”; “блакитний гвинтокрил”; “рожевий
          єдиноріг”. Ви можете тестувати додаток скільки завгодно часу. Ви та
          ваша дитина почуєте звуки, які використовує додаток для сповіщення
          дитини та дорослого, також ви можете протестувати роботу додатку, коли
          звукове сповіщення для дорослого вимкнено. Це корисно для того, щоб
          дитина розуміла, що саме означає таке сповіщення. Якщо вам потрібно ще
          раз ознайомитися з інструкцією по спілкуванню з дитиною щодо
          використання та роботи додатку, ви можете знайти її у пункті меню
          “Інструкція спілкування з дитиною” у пункті “Інформація” на
          навігаційній панелі додатку. Ми бажаємо вам та вашим дітям безпеки та
          спокою!
        </IntroductionText>
      </WrapperText>
    </>
  );
};

export default TestApp;
