(function () {
  'use strict';

  angular
    .module('bookings')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'My Account',
      state: 'bookings',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'bookings', {
      title: 'List Bookings',
      state: 'bookings.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'bookings', {
      title: 'Create A Fresh Booking',
      state: 'bookings.create',
      roles: ['user']
    });
  }
}());
