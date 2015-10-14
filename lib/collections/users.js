Meteor.users.helpers({
  name: function () {
    if (this.profile)
      return this.profile.name
    else
      return this.emails[0].address
  }
})