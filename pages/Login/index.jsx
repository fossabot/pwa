import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import Link from '@shopgate/pwa-common/components/Link';
import RippleButton from '@shopgate/pwa-ui-shared/RippleButton';
import TextField from '@shopgate/pwa-ui-shared/TextField';
import View from 'Components/View';
import { RouteContext } from '@virtuous/react-conductor/Router';
import connect from './connector';
import ForgotPassword from './components/ForgotPassword';
import styles from './style';

/**
 * The login view component.
 */
class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    redirect: PropTypes.shape(),
  };

  static defaultProps = {
    isLoading: false,
    redirect: {},
  };
  /**
   * Constructor.
   * @param {Object} props The component props.
   */
  constructor(props) {
    super(props);

    this.userField = null;
    this.passwordField = null;

    this.state = {
      login: '',
      password: '',
    };
  }

  /**
   * Stores the reference to the username input field.
   * @param {Object} input The input field reference.
   */
  setUserFieldRef = (input) => {
    this.userField = input;
  };

  /**
   * Stores the reference to the password input field.
   * @param {Object} input The input field reference.
   */
  setPasswordFieldRef = (input) => {
    this.passwordField = input;
  };

  /**
   * Handles change of the email input field.
   * @param {string} login The login username.
   */
  handleEmailChange = (login) => {
    this.setState({ login });
  };

  /**
   * Handles change of the password input field.
   * @param {string} password The login password.
   */
  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  /**
   * Handles submitting the login form.
   * @param {Object} event The event object.
   */
  handleSubmitForm = (event) => {
    event.preventDefault();

    // Blur all the fields.
    this.userField.blur();
    this.passwordField.blur();

    const { redirect = {} } = this.props;
    this.props.login(this.state, redirect);
  };

  /**
   * Renders the component.
   * @return {JSX}
   */
  render() {
    return (
      <View>
        <section className={styles.container} data-test-id="LoginPage">
          <div className={styles.headline}>
            <I18n.Text string="login.headline" />
          </div>
          <div className={styles.subline}>
            <I18n.Text string="login.subline" />
          </div>
          { /* No validate, browsers reject IDN emails! */ }
          <form onSubmit={this.handleSubmitForm} noValidate>
            <TextField
              type="email"
              name="email"
              className={styles.input}
              label="login.email"
              onChange={this.handleEmailChange}
              value={this.state.login}
              setRef={this.setUserFieldRef}
            />
            <TextField
              password
              name="password"
              className={styles.input}
              label="login.password"
              onChange={this.handlePasswordChange}
              value={this.state.password}
              setRef={this.setPasswordFieldRef}
            />
            <div className={styles.forgotWrapper}>
              <ForgotPassword />
            </div>
            <div className={styles.buttonWrapper} data-test-id="LoginButton">
              <RippleButton className={styles.button} type="secondary" disabled={this.props.isLoading}>
                <I18n.Text string="login.button" />
              </RippleButton>
            </div>
          </form>
          <div>
            <I18n.Text string="login.no_account" className={styles.noAccount} />
            <Link href="/register" className={styles.signup}>
              <I18n.Text string="login.register" />
            </Link>
          </div>
        </section>
      </View>
    );
  }
}

export default connect(props => (
  <RouteContext.Consumer>
    {({ state }) => (
      <Login {...props} redirect={state.redirect} />
    )}
  </RouteContext.Consumer>
));
