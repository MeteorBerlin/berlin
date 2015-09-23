@Stuff = new Mongo.Collection 'stuff'

StuffSchema = new SimpleSchema
  title:
    type: String
  body:
    type: String
    optional: true
  userId:
    type: String
    regEx: SimpleSchema.RegEx.Id
    autoValue: ->
      if @isInsert
        Meteor.userId()
      else @value
  votes:
    type: [String]
    regEx: SimpleSchema.RegEx.Id
    optional: true

@Stuff.attachSchema StuffSchema

Meteor.methods
  "voteUp": (id) ->
    Stuff.update({_id: id}, $addToSet: "votes": @userId)