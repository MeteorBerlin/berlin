Meteor.publish('jobs', () => {
  return Jobs.find({}, {sort:{createdAt:-1}});
});

Meteor.publish('job', (id) => {
  return Jobs.find(id)
})