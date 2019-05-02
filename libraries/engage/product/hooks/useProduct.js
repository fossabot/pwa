import { useContext } from 'react';
import {
  getProductName,
  getProductRating,
  getProductManufacturer,
  getProductAvailability,
  getRealProductAvailability,
  getProductCurrency,
  getProductUnitPrice,
  getProductShipping,
} from '@shopgate/pwa-common-commerce/product';
import { isCurrentProductOnFavoriteList } from '@shopgate/pwa-common-commerce/favorites';
import { StoreContext } from '../../core/store';
import { useCurrentProduct } from '../../core/hooks';

/**
 * Retrieves the connect product data.
 * @returns {Object}
 */
export function useProduct() {
  const product = useCurrentProduct();
  const { getState } = useContext(StoreContext);

  return {
    id: product.variantId || product.productId,
    name: getProductName(getState(), product),
    rating: getProductRating(getState(), product),
    manufacturer: getProductManufacturer(getState(), product),
    stock: getProductAvailability(getState(), product),
    availability: getRealProductAvailability(getState(), product),
    currency: getProductCurrency(getState(), product),
    unitPrice: getProductUnitPrice(getState(), product),
    shipping: getProductShipping(getState(), product),
    // flags
    isFavorited: isCurrentProductOnFavoriteList(getState(), product),
  };
}
