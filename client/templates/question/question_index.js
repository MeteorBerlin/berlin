Template.questionIndex.helpers({
  questions: function () {
    return Questions.find()
  }
});

Template.questionIndex.events({
  //add your events here
});

Template.questionIndex.onCreated(function () {
  this.subscribe('questions')
});

Template.questionIndex.onRendered(function () {
  //add your statement here
});

Template.questionIndex.onDestroyed(function () {
  //add your statement here
});

