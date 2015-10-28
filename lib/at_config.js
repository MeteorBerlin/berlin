AccountsTemplates.configure({
  defaultLayout: 'layout',
  defaultContentRegion: 'content',
  showLabels: false,
  showForgotPasswordLink: true,
  sendVerificationEmail: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: true,

  //enforceEmailVerification: true,

})

AccountsTemplates.configureRoute('signIn', {
  name: 'signIn',
  //contentRegion: 'account',
  //redirect: function () {
  //  FlowRouter.go('index')
  //}
});
//AccountsTemplates.configureRoute('signUp', {
//  name: 'signUp',
//  contentRegion: 'account'
//});