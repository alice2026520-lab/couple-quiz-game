Page({
  data: {},

  startAsPlayer1() {
    wx.navigateTo({
      url: '/pages/game/game?player=1'
    });
  },

  startAsPlayer2() {
    wx.navigateTo({
      url: '/pages/game/game?player=2'
    });
  }
});