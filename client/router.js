var appRoutes = FlowRouter.group()

appRoutes.route('/', {
  name: 'index',
  action: function () {
    BlazeLayout.render('layout', {content: 'index'});
  }
})

//Meetups
appRoutes.route('/meetups', {
  name: 'meetup.index',
  action: function () {
    BlazeLayout.render('layout', {content: 'meetupIndex'});
  }
})

//Questions
appRoutes.route('/questions', {
  name: 'question.index',
  action: function () {
    BlazeLayout.render('layout', {content: 'questionIndex'});
  }
})

//Jobs
appRoutes.route('/jobs', {
  name: 'job.index',
  action: function () {
    BlazeLayout.render('layout', {content: 'jobIndex'});
  }
})

appRoutes.route('/job/submit', {
  name: 'job.submit',
  action: function () {
    BlazeLayout.render('layout', {content: 'jobSubmit'});
  }
})

appRoutes.route('/job/:_id/edit', {
  name: 'job.edit',
  action: function () {
    BlazeLayout.render('layout', {content: 'jobEdit'});
  }
})

//Logout
appRoutes.route('/signout', {
  name: 'signOut',
  triggersEnter: [function (context, redirect) {
    Meteor.logout()
    redirect('/')
  }
  ]
});
