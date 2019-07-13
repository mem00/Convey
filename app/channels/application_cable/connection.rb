module ApplicationCable
  class Connection < ActionCable::Connection::Base

    # https://medium.com/@a.carreras.c/using-action-cable-for-private-messaging-presence-indicators-on-react-rails-app-526b3e34c14d
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private
      def find_verified_user
        if current_user = User.find_by(id: request.params[:user])
          current_user
        else
          reject_unauthorized_connection
        end
      end

  end
end
