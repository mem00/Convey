# https://medium.com/@a.carreras.c/using-action-cable-for-private-messaging-presence-indicators-on-react-rails-app-526b3e34c14d
class WebNotificationsChannel < ApplicationCable::Channel
    def subscribed
       stream_for 
 current_user   end
 end