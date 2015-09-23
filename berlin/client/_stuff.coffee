Template._stuff.events
  "click .vote-up": (e, t) ->
    Meteor.call "voteUp", @_id, (err, res) ->
      if err
        console.error err
