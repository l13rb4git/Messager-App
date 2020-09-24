module RoomsHelper
  def room_active  current_room, room
    (current_room == room) ? 'active' : ''
  end
end
