@HomeController = AppController.extend
  data: ->
    stuffs: Stuff.find()
