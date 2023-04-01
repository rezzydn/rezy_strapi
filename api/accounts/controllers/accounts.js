'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const data = await strapi.query('accounts').find(ctx.query);

    // Remove the key from the data object
    const results = data.map(({ key, ...rest }) => rest);

    return results;
  },
};
  
