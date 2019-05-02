import { useContext } from 'react';
import { ProductContext } from '../../product';

/**
 * Provides the current product context props.
 * @returns {Object}
 */
export function useCurrentProduct() {
  const productProps = useContext(ProductContext);
  return productProps;
}
