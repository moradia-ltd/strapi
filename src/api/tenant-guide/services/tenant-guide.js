'use strict';

/**
 * tenant-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tenant-guide.tenant-guide');
