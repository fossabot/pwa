import { connect } from 'react-redux';
import { getCurrentProductStock } from '@shopgate/pwa-common-commerce/product/selectors/product';
import { AVAILABILITY_STATE_OK } from '@shopgate/pwa-common-commerce/product/constants';

/**
 * @param {Object} state The current application state.
 * @param {Object} props The component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => {
  const stock = getCurrentProductStock(state, props);
  console.warn(stock);
  if (!stock) {
    return {
      availability: null,
    };
  }
  return {
    /* Show stock info always as availability on PDP */
    availability: {
      text: stock.info,
      state: AVAILABILITY_STATE_OK,
    },
  };
};

export default connect(mapStateToProps);
