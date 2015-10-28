
Template.jobEdit.helpers({
  job: function () {
    return Jobs.findOne(FlowRouter.getParam('_id'))
  }
});

Template.jobEdit.events({
  //add your events here
});

Template.jobEdit.onCreated(function () {
  this.subscribe('job', FlowRouter.getParam('_id'))
});

Template.jobEdit.onRendered(function () {
  //add your statement here
});

Template.jobEdit.onDestroyed(function () {
  //add your statement here
});

