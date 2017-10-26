import { connect } from 'react-redux';
import submitReview from '@shopgate/pwa-common-commerce/reviews/actions/submitReview';
import { getUserReviewForProduct } from '@shopgate/pwa-common-commerce/reviews/selectors';
import { getCurrentBaseProductId } from '@shopgate/pwa-common-commerce/product/selectors/product';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  productId: getCurrentBaseProductId(state),
  review: getUserReviewForProduct(state),
});

/**
 * Connects the dispatch function to a callable function in the props.
 * @param {Function} dispatch The redux dispatch function.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  submit: state => dispatch(submitReview(state)),
});

export default connect(mapStateToProps, mapDispatchToProps);
