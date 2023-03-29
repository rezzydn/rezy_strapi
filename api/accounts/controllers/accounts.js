'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
      const { page = 1, pageSize = 10 } = ctx.query;
      const accounts = await strapi.services.accounts.find({
        _start: (page - 1) * pageSize,
        _limit: pageSize,
      });
      const count = await strapi.services.accounts.count();
      return {
        data: accounts,
        pagination: {
          page,
          pageSize,
          total: count,
        },
      };
    },
  };
  
