Meteor.publishComposite('questions', function () {
  return {
    find: function () {
      return Questions.find()
    },
    children: [
      {
        find: function (question) {
          return Meteor.users.find(question.createdBy)
        }
      }
    ]
  }
})