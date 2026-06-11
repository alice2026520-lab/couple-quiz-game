Page({
  data: {
    currentPlayer: 1,
    currentQuestion: 0,
    selectedAnswer: -1,
    showResult: false,
    player1Score: 0,
    player2Score: 0,
    questions: [
      {
        question: "我们第一次见面是在哪里？",
        options: ["学校", "朋友介绍", "工作地点", "网络"],
        correctAnswer: 0,
        explanation: "第一次见面的地方往往最难忘。"
      },
      {
        question: "我最喜欢的食物是什么？",
        options: ["麻辣烫", "寿司", "披萨", "烤肉"],
        correctAnswer: 1,
        explanation: "了解对方的口味是很重要的哦～"
      },
      {
        question: "我的梦想职业是？",
        options: ["医生", "工程师", "教师", "艺术家"],
        correctAnswer: 2,
        explanation: "支持对方的梦想是爱的表现。"
      },
      {
        question: "我最害怕的东西是？",
        options: ["黑暗", "高度", "失去你", "蜘蛛"],
        correctAnswer: 2,
        explanation: "最深的害怕往往是最深的爱。"
      },
      {
        question: "我喜欢你什么地方？",
        options: ["温柔体贴", "有趣幽默", "聪慧坚强", "所有地方"],
        correctAnswer: 3,
        explanation: "爱一个人，就是爱ta的全部。"
      },
      {
        question: "我们最难忘的回忆是？",
        options: ["第一次约会", "一起旅游", "遇到困难一起度过", "第一次说'我爱你'"],
        correctAnswer: 2,
        explanation: "共同经历的困难往往是最深的回忆。"
      },
      {
        question: "我最大的梦想是什么？",
        options: ["环游世界", "建立幸福家庭", "事业成功", "和你一直在一起"],
        correctAnswer: 3,
        explanation: "真正的梦想是和爱的人在一起。"
      },
      {
        question: "我最讨厌对方的一个小习惯是？",
        options: ["总是迟到", "玩手机", "不收拾房间", "其实没有"],
        correctAnswer: 3,
        explanation: "包容彼此的小缺点，是爱的智慧。"
      },
      {
        question: "我们最想一起做的事是？",
        options: ["一起看日出", "一起旅游", "建立温暖的家", "都想做"],
        correctAnswer: 3,
        explanation: "陪伴彼此，就是最好的事。"
      },
      {
        question: "用一个词形容我们的爱情？",
        options: ["轰轰烈烈", "温暖细腻", "坚定执着", "幸福满满"],
        correctAnswer: 3,
        explanation: "每段爱情都值得用最美的词去形容。"
      }
    ]
  },

  onLoad(options) {
    const player = parseInt(options.player) || 1;
    this.setData({ currentPlayer: player });
  },

  selectAnswer(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({ selectedAnswer: index });
  },

  showAnswer() {
    this.setData({ showResult: true });
    if (this.data.selectedAnswer === this.data.questions[this.data.currentQuestion].correctAnswer) {
      if (this.data.currentPlayer === 1) {
        this.setData({ player1Score: this.data.player1Score + 1 });
      } else {
        this.setData({ player2Score: this.data.player2Score + 1 });
      }
    }
  },

  nextQuestion() {
    if (this.data.currentQuestion < this.data.questions.length - 1) {
      const nextPlayer = this.data.currentPlayer === 1 ? 2 : 1;
      this.setData({
        currentQuestion: this.data.currentQuestion + 1,
        selectedAnswer: -1,
        showResult: false,
        currentPlayer: nextPlayer
      });
    }
  },

  goToResult() {
    wx.navigateTo({
      url: `/pages/result/result?player1Score=${this.data.player1Score}&player2Score=${this.data.player2Score}&total=${this.data.questions.length}`
    });
  }
});