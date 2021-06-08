// intro message in to Room 4 (Living Room)
const intro = '... <i>Ow... My head..</i> Your eyes open slowly as you come to from... <i>Did I take a nap?</i> The light is dim, so your eyes adjust quickly, and it doesn\'t take long for you to realize you\'re not in a familiar place... Sitting up from the <b>sofa</b> where you were sleeping, you take in your surroundings. The first thing you notice is that this room has three <b>doors</b> in it. Along the doorless wall is a console <b>table</b>, above which are hanging three <b>paintings</b>. Finally, you notice a <b>pedestal</b> in the corner... <i>Where the hell am I?</i>'

// From room 1 you can go to room 2 or room 4
const room1 = "You are in an empty room, there are two doors that don't appear to be locked..."

// From room 2 you can go to room 1 or room 3
const room2 = 'This room has a window, the door you just walked through and another door.'

// From room 3 you can go to room 2 and room 4
const room3 = 'Besides the door you just came through, you see a potted plant in the corner, and another door.'

// From room 4 you can go to room 1, room 3, and room 5
const room4 = "The first thing you notice as you enter this room is that besides the door you just came from, there are two other doors on either side of the room... There's also an old fashioned wall clock hanging on an otherwise empty wall."

// From room 5 you can only go back to room 4
const room5 = 'This appears to be an office of some sort. Other than the door you came through, there is a large oak desk with a comfy looking leather chair behind it.'

module.exports = {
  intro,
  room1,
  room2,
  room3,
  room4,
  room5
}
