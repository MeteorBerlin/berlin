if Meteor.isClient
  Template.berlin.helpers
    stuff: -> Stuff.find({}, sort: votes: -1)
