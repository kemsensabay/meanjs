'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Booking Schema
 */
var BookingSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Booking name',
    trim: true
  },
  bookingdate: {
    type: Date,
    default: '',
  /*  required: 'Please fill Booking date', */
    trim: true
  },
  bookingservice: {
    type: String,
    enum: ['Arrival', 'Departure', 'Connection', 'Other'],
    default: 'Arrival'
    /* required: 'Please select Service Type' */
  },
  arrFlight: {
    type: String,
    default: '',
    /* required: 'Please fill Flight number', */
    trim: true
  },
  depFlight: {
    type: String,
    default: '',
    /* required: 'Please fill Flight number',  */
    trim: true
  },
  connCity: {
    type: String,
    default: '',
    /* required: 'Please fill Airport location of service', */
    trim: true
  },
  arrCity: {
    type: String,
    default: '',
    /* required: 'Please fill Airport location of service', */
    trim: true
  },
  depCity: {
    type: String,
    default: '',
    /* required: 'Please fill Airport location of service',  */
    trim: true
  },
  arrTime: {
    type: String,
    default: '',
    /* required: 'Please fill Arrival Time for flight', */
    trim: true
  },
  depTime: {
    type: String,
    default: '',
    /* required: 'Please fill Departure time for flight', */
    trim: true
  },
  nofAdults: {
    type: Number,
    default: '0',
    trim: true
  },
  nofChildren: {
    type: Number,
    default: '0',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Booking', BookingSchema);
