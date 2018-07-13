import AppCommand from '../classes/AppCommand';

/**
 * Sends an setCookie command to the app.
 * @param {Object} params The command parameters
 * @param {string} params.name The name of the cookie
 * @param {string} params.value The value of the cookie
 * @param {string} params.domain The domain for the cookie
 * @param {int} params.expires The expires datetime
 * @param {string} params.path The path for the cookie
 * @param {Boolean} params.secure Set is secure
 * @param {Boolean} params.httpOnly Set is http only
 */
export default (params) => {
  const command = new AppCommand();

  command
    .setCommandName('setCookie')
    .setLibVersion('14.0')
    .dispatch(params);
};
