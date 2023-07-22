import { BtnWrapper, Link, Arrow } from './ButtonMore.styled';
import arrow from '../../img/Arrow_link_right.svg';
const ButtonMore = () => {
  return (
    <BtnWrapper>
      <Link href="">
        Discover more <Arrow src={arrow} alt="arrow" />
      </Link>
    </BtnWrapper>
  );
};
export default ButtonMore;
