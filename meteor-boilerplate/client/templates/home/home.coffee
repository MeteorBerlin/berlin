Template.home.helpers
  stuffs: ->
    # This sort does not work :-(
    Stuff.find {}, sort: 'votes.length': -1

Template.home.events
  'click button': (event, instance) ->
    Meteor.call 'voteStuff', @_id
