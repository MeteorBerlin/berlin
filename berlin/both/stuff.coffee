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
  votes:
    type: [String]
    regEx: SimpleSchema.RegEx.Id
    optional: true

@Stuff.attachSchema StuffSchema
