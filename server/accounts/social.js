//Meetup login
ServiceConfiguration.configurations.upsert(
  {
    service: 'meetup'
  }, {
    $set: {
      clientId: Meteor.settings.meetup.clientId,
      loginStyle: 'popup',
      secret: Meteor.settings.meetup.secret
    }
  });
ServiceConfiguration.configurations.upsert(
  {
    service: 'github'
  }, {
    $set: {
      clientId: Meteor.settings.github.clientId,
      loginStyle: 'popup',
      secret: Meteor.settings.github.secret
    }
  });