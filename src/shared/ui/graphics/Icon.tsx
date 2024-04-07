import { styled } from 'nativewind';
import { SvgXml } from 'react-native-svg';

interface IconProps {
  xml: string;
  classNames?: string;
}

const StyledSvg = styled(SvgXml);

const Icon: React.FC<IconProps> = ({ xml, classNames }) => {
  return <StyledSvg xml={xml} className={`${classNames}`} />;
};

export default Icon;
