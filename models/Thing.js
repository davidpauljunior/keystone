var keystone = require('keystone');

/**
 * Thing Model
 * =============
 */

var Thing = new keystone.List('Thing', {
    label: 'Thing'
});

Thing.register();