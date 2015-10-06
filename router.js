var publicRoutes = FlowRouter.group()

publicRoutes.route('/', {
  name: 'index',
  action: function () {
    BlazeLayout.render('index');
  }
})