@Stuff = new Mongo.Collection 'stuff'

StuffSchema = new SimpleSchema
  title:
    type: String
  body:
    type: String
    optional: true
    autoform:
      lines: 4
  userId:
    type: String
    regEx: SimpleSchema.RegEx.Id
    autoform:
      omit: true
    autoValue: ->
      if @isInsert
        return @userId
      else if @isUpsert
        return $setOnInsert: userId: @userId
      else
        @unset()
  votes:
    type: [String]
    regEx: SimpleSchema.RegEx.Id
    optional: true
    autoform:
      omit: true
    defaultValue: []

@Stuff.attachSchema StuffSchema

@Stuff.allow
  insert: (doc) ->
    doc.userId is @userId
