var keystone = require('keystone');

/**
 * Thing Model
 * =============
 */

var Thing = new keystone.List('Thing', {
    label: 'hello'
});

Thing.register();