import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Conditioner } from '@shopgate/pwa-core';
import Reviews from 'Components/Reviews';
import Template from 'Components/Template';
import TaxDisclaimer from '@shopgate/pwa-ui-shared/TaxDisclaimer';
import ImageSlider from '../ImageSlider';
import Header from '../Header';
import Characteristics from '../Characteristics';
import Options from '../Options';
import Description from '../Description';
import Properties from '../Properties';
import connect from './connector';
import { ProductContext } from '../../context';

/**
 * The product content component.
 */
class ProductContent extends PureComponent {
  static propTypes = {
    baseProductId: PropTypes.string,
    isVariant: PropTypes.bool,
    productId: PropTypes.string,
    variantId: PropTypes.string,
  };

  static defaultProps = {
    baseProductId: null,
    isVariant: false,
    productId: null,
    variantId: null,
  };

  /**
   * @param {Object} props The component props.
   */
  constructor(props) {
    super(props);

    this.baseContextValue = {
      conditioner: new Conditioner(),
    };

    this.state = {
      options: {},
      productId: props.variantId ? props.baseProductId : props.productId,
      variantId: props.variantId ? props.variantId : null,
    };
  }

  /**
   * Maps the single productId from the route and the different properties from the connector
   * selectors to a productId and a variantId and updates the component state with them.
   * @param {Object} nextProps The next component props.
   */
  componentWillReceiveProps(nextProps) {
    let productId = (nextProps.baseProductId ? nextProps.baseProductId : nextProps.productId);
    let { variantId } = nextProps;
    const productIdChanged = (this.props.productId !== nextProps.productId);

    if (productIdChanged && nextProps.isVariant) {
      if (this.props.baseProductId) {
        // Use the previous baseProductId as productId when the component switched to a variant.
        productId = this.props.baseProductId;
      }

      // Map the productId from the route to the variantId.
      variantId = nextProps.productId;
    }

    this.setState({
      productId,
      variantId,
    });
  }

  /**
   * Stores the selected options in local state.
   * @param {string} optionId The ID of the option.
   * @param {string} value The option value.
   */
  storeOptionSelection = (optionId, value) => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        [optionId]: value,
      },
    }));
  }

  /**
   * @return {JSX}
   */
  render() {
    const id = this.state.variantId || this.state.productId;
    const contextValue = {
      ...this.state,
      ...this.baseContextValue,
    };

    return (
      <ProductContext.Provider value={contextValue}>
        <Template
          name="ProductRoute"
          config={[
            'image',
            'header',
            'reviews',
            'characteristics',
            'description',
            'properties',
            'options',
          ]}
          slots={{
            header: <Header />,
            description: <Description productId={this.state.productId} variantId={this.state.variantId} />,
            properties: <Properties productId={this.state.productId} variantId={this.state.variantId} />,
            image: (
              <ImageSlider
                productId={this.state.productId}
                variantId={this.state.variantId}
              />
            ),
            options: (
              <Options
                productId={id}
                storeSelection={this.storeOptionSelection}
                currentOptions={this.state.options}
              />
            ),
            characteristics: (
              <Characteristics productId={this.state.productId} variantId={this.state.variantId} />
            ),
            reviews: <Reviews productId={this.state.productId} />,
          }}
        />
        <TaxDisclaimer />
      </ProductContext.Provider>
    );
  }
}

export default connect(ProductContent);
