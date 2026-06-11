Page({
  data: {
    player1Score: 0,
    player2Score: 0,
    total: 10,
    evaluation: "",
    player1Percentage: 0,
    player2Percentage: 0
  },

  onLoad(options) {
    const player1Score = parseInt(options.player1Score) || 0;
    const player2Score = parseInt(options.player2Score) || 0;
    const total = parseInt(options.total) || 10;

    const evaluation = this.getEvaluation(player1Score, player2Score, total);
    const player1Percentage = Math.round((player1Score / total) * 100);
    const player2Percentage = Math.round((player2Score / total) * 100);

    this.setData({
      player1Score,
      player2Score,
      total,
      evaluation,
      player1Percentage,
      player2Percentage
    });
  },

  getEvaluation(player1Score, player2Score, total) {
    const avgScore = (player1Score + player2Score) / 2;
    const percentage = (avgScore / total) * 100;

    if (percentage >= 90) {
      return "天哪！你们太默契了！彼此的了解程度堪称完美，这就是传说中的'心有灵犀一点通'啊～💕";
    } else if (percentage >= 80) {
      return "非常棒！你们对彼此的了解度很高。看来你们平时交流得很充分，是令人羡慕的情侣呢～💕";
    } else if (percentage >= 70) {
      return "还不错！你们对彼此有基本的了解。不过还有提升空间，不妨多花点时间深入了解对方吧～";
    } else if (percentage >= 60) {
      return "还需要加油！看来你们在了解彼此方面还有差距。多进行一些深入的交流，会让你们的感情更牢固哦～";
    } else {
      return "嘿，看来你们得更用心去了解彼此了！不过这也是个很好的机会，从现在开始多沟通，一起成长吧～";
    }
  },

  playAgain() {
    wx.navigateBack({
      delta: 2
    });
  },

  goHome() {
    wx.reLaunch({
      url: '/pages/index/index'
    });
  }
});