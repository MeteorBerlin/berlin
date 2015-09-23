Meteor.methods
  voteStuff: (stuffId) ->
    throw Meteor.Error 'fuck you' unless @userId
   