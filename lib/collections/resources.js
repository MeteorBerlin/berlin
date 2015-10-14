Resources = new Mongo.Collection('resources')

Resources.allow({
  insert: function (userId, doc) {
    return true
  }
})

ResourcesSchema = new SimpleSchema({
  name: {
    type: String
  },
  desc: {
    type: String
  },
  url: {
    type: String,
    regEx: SimpleSchema.RegEx.Url
  },
  authorId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
    autoform: {
      omit: true
    },
    //autoValue: function () {
    //  if (this.isInsert)
    //    return Meteor.userId()
    //}
  }
})

Resources.attachSchema(ResourcesSchema)