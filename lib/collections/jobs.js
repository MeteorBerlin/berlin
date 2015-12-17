Jobs = new Mongo.Collection('jobs')

//Allow only admins to insert jobs
Jobs.allow({
  insert: function (userId) {
    return Roles.userIsInRole(userId, 'admin')
  },
  update: function (userId) {
    return Roles.userIsInRole(userId, 'admin')
  },
  remove: function (userId) {
    return Roles.userIsInRole(userId, 'admin')
  }
})

JobSchema = new SimpleSchema({
  title: {
    type: String
  },
  desc: {
    type: String,
    autoform: {
      type: 'medium'
    }
  },
  company: {
    type: String,
    optional: true
  },
  remote: {
    type: Boolean,
    optional: true
  },
  types: {
    type: [String],
    allowedValues: ['Full Time', 'Hourly Contract', 'Term Contract', 'Mentoring', 'Other'],
    autoform: {
      options: [
        {
          label: "Full Time",
          value: 'Full Time'
        },
        {
          label: "Hourly Contract",
          value: "Hourly Contract"
        },
        {
          label: "Term Contract",
          value: "Term Contract"
        },
        {
          label: "Mentoring",
          value: "Mentoring"
        },
        {
          label: "Other",
          value: "Other"
        }
      ]
    }
  },
  url: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  contact:{
    type: String,
    optional:true

  }
})

Jobs.attachSchema(new SimpleSchema([
  JobSchema,
  MetaSchema
]))