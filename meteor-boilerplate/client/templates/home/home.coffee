Template.home.helpers
  stuffs: ->
    Stuff.find()

Template.home.events
  'click button': (event, instance) ->
    Meteor.call 'voteStuff', @_id
