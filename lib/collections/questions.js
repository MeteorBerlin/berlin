Questions = new Mongo.Collection('questions')

Questions.helpers({
  creator: function () {
    return Meteor.users.findOne(this.createdBy)
  }
})

Questions.allow({
  insert: function (userId, doc) {
    return !!userId
  }
})

QuestionSchema = new SimpleSchema({
  title: {
    type: String
  },
  desc: {
    type: String,
    autoform: {
      type: 'textarea'
    }
  }
})

Questions.attachSchema(new SimpleSchema(
  [
    QuestionSchema,
    MetaSchema
  ]
))