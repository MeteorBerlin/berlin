Template.jobIndex.helpers({
  jobs: function () {
    return Jobs.find({}, {sort:{createdAt:-1}})
  }
});

Template.jobIndex.events({
  //add your events here
});

Template.jobIndex.onCreated(function () {
  this.subscribe('jobs')
});

Template.jobIndex.onRendered(function () {
  //add your statement here
});

Template.jobIndex.onDestroyed(function () {
  //add your statement here
});

