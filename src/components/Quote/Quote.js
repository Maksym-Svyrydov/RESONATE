import quote from '../../img/quote-white.svg';
import { Quote, QuoteImg } from './Quote.styletd';
const Quotes = () => {
  return (
    <Quote>
      <QuoteImg src={quote} alt="quote" />
    </Quote>
  );
};
export default Quotes;
