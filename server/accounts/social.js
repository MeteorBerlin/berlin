//Meetup login
ServiceConfiguration.configurations.upsert(
  {
    service: 'meetup'
  }, {
    $set: {
      clientId: Meteor.settings.meetup.key,
      loginStyle: 'popup',
      secret: Meteor.settings.meetup.secret
    }
  });