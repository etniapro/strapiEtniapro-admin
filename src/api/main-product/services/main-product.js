'use strict';

/**
 * main-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-product.main-product');
