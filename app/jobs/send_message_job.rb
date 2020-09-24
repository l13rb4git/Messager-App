class SendMessageJob < ApplicationJob
  queue_as :default

  def perform(message, current_user)
    #puts(User.find(session[:user_id]))
    #byebug
    html = ApplicationController.render(partial: "messages/message",
                                        locals: { message: message,
                                                  current_user: current_user })

    ActionCable.server.broadcast "room_channel_#{message.room_id}", 
                                 message: message,
                                 html: html
  end
end
