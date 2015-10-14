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

//Logout
appRoutes.route('/signout', {
  name: 'signOut',
  triggersEnter: [function (context, redirect) {
    Meteor.logout()
    redirect('/')
  }
  ]
});
