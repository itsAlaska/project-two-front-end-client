const store = require('../store.js')
const gamescripts = require('../gamescripts.js')
const roomObjects = require('../roomObjects/roomObjects.js')

const newGameSuccess = function (res) {
  store.game = res.game
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('#messaging').html('')
  $('#messaging').html('New game created!')
  $('#room2').removeClass('hidden')
  $('#room4').removeClass('hidden')
  $('.game-text').html(gamescripts.intro)
}

const newGameFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('.... :\'(   You\'ve failed to create a new game')
}

const indexGamesSuccess = function (res) {
  console.log(res)
  let gamesHtml = ''

  res.games.forEach(game => {
    const gameAreas = []
    game.areas.forEach(area => gameAreas.push(' ' + area))
    gamesHtml += `
    <h5>Game ID:</h5>
    <p>${game._id}</p>
    <h5>Game started:</h5>
    <p>${game.createdAt}
    <h5>Areas traveled:</h5>
    `
    if (game.areas.length === 0) {
      gamesHtml +=
      `
      <p>None</p>
      <p>----------------</p>
      <br>
      <br>
      `
    } else {
      gamesHtml +=
      `
      <p>${gameAreas}</p>
      <p>----------------</p>
      <br>
      <br>
      `
    }
  })

  $('.game-cabinet').html(gamesHtml)
}

const indexGamesFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('Index failed... What you can\'t even list a few games?? Get oudda herrreee...')
}

const deleteGameSuccess = function (res) {
  console.log(res)
  $('#delete-game').trigger('reset')
  $('#messaging').html('')
  $('#messaging').html('Game deleted!')
}
const deleteGameFailure = function () {
  console.error()
  $('#messaging').html('')
  $('#messaging').html('Much like cockroaches, this game isn\'t going anywhere!')
}

const room1Success = function (res) {
  $('#room2').removeClass('hidden')
  $('#room4').removeClass('hidden')
  $('#room1').addClass('hidden')
  $('#room3').addClass('hidden')
  $('#room5').addClass('hidden')
  store.game.areas.push('room1')
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('.game-text').html(gamescripts.room1)
}

const room2Success = function (res) {
  $('#room1').removeClass('hidden')
  $('#room3').removeClass('hidden')
  $('#room2').addClass('hidden')
  $('#room4').addClass('hidden')
  store.game.areas.push('room2')
  $('.game-text').html(gamescripts.room2)
  console.log('Res: ', res)
  console.log('Store: ', store)
}

const room3Success = function (res) {
  $('#room2').removeClass('hidden')
  $('#room4').removeClass('hidden')
  $('#room1').addClass('hidden')
  $('#room3').addClass('hidden')
  store.game.areas.push('room3')
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('.game-text').html(gamescripts.room3)
}

const room4Success = function (res) {
  $('#room1').removeClass('hidden')
  $('#room3').removeClass('hidden')
  $('#room5').removeClass('hidden')
  $('#room2').addClass('hidden')
  $('#room4').addClass('hidden')
  store.game.areas.push('room4')
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('.game-text').html(gamescripts.room4)
}

const room5Success = function (res) {
  $('#room4').removeClass('hidden')
  $('#room1').addClass('hidden')
  $('#room3').addClass('hidden')
  $('#room5').addClass('hidden')
  store.game.areas.push('room5')
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('.game-text').html(gamescripts.room5)
}

const roomFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('You\'re.... You\'re still in the same room...')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  indexGamesSuccess,
  indexGamesFailure,
  deleteGameSuccess,
  deleteGameFailure,
  room1Success,
  room2Success,
  room3Success,
  room4Success,
  room5Success,
  roomFailure
}
