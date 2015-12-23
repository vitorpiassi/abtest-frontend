'use strict';

var Fluxxor = require('Fluxxor'),
    EntryActions = require("actions/EntryActions"),
    EntryStore = require("stores/EntryStore");

module.exports = new Fluxxor.Flux(EntryStore, EntryActions.actions);