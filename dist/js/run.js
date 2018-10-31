$(function () {


  /* loading效果 */

  $(".light_run").css({
    transform: "translateX(100%)"
  })

  setTimeout(function () {
    $(".page1").css({
      display: "none"
    })
  }, 4000)

  var num = 5;
  $(".start").on("click", function () {
    $(".page2").css({
      display: "none"
    })
  })





  var question = ["./images/q1.png", "./images/q2.png", "./images/q3.png", "./images/q4.png", "./images/q5.png"]

  var questionOptionA = ["基本，清洁面膜卸妆、洁面是也不可少", "脸像婴儿肌般澎弹水嫩", "闪亮透白，跟化妆前一样美丽动人", "果冻般的Q弹感", "当然，我是颜值女神到哪里都是美的焦点"]
  var questionOptionB = [" 洁面乳搭配洗脸工具，效果棒棒哒", "虽有水润感，还需护肤品来助力 ", "卸妆以后我还是我，但是肤色暗沉无光", "弹性依然很好 ，只是红润光泽不见", "取决于要见的人对我是否重要"]
  var questionOptionC = ["一支洁面乳，搞定全步骤", "干燥紧绷，急需马上补水", "细纹凸显，卸妆后的我判若两人。", "弹性依然很好 ，只是红润光泽不见", "绝对不会，就算是出门倒垃圾也要打扮一番"]

  var index = 0;
  var gradeNum = [];

  $(".prev").on("click", function () {
    index--;

    $(".question-title img").attr("src", question[index])
    $(".question-option-txt1").text(questionOptionA[index])
    $(".question-option-txt2").text(questionOptionB[index])
    $(".question-option-txt3").text(questionOptionC[index])

    console.log($(".grade").eq(index).text());

    $(".grade").eq(index).children($("span")).remove()

    gradeNum.splice(index, 1);
  })


  function check() {

  }
  $(".options li").on("click", function () {

    index++;
    $(".question-title img").attr("src", question[index])
    $(".question-option-txt1").text(questionOptionA[index])
    $(".question-option-txt2").text(questionOptionB[index])
    $(".question-option-txt3").text(questionOptionC[index])

    if (index >= question.length) {
      $(".page3").css({
        display: "none"
      })
    }


    var span = $("<span></span>")
    if ($(this).attr("grade") == "3") {
      span.addClass("full")
    }
    if ($(this).attr("grade") == "2") {
      span.addClass("half")
    }
    if ($(this).attr("grade") == "1") {
      span.addClass("empty")
    }

    $(".grade").eq(index - 1).append(span)


    gradeNum.push($(this).attr("grade"));
    var sum = gradeNum.reduce(function (prev, next) {
      return parseInt(prev) + parseInt(next)
    })

    console.log(gradeNum)
    if (index == 5) {
      addStar(sum)
    }
  })

  function addStar(sum) {
    /* 10=3+3+3+1 */
    var n1 = Math.floor(sum / 3);
    var n2 = sum - n1 * 3;

    for (var i = 0; i < n1; i++) {
      var span = $("<span></span>")
      span.addClass("full");
      $(".stars").append(span)
    }
    if (n2 == 1) {
      var span = $("<span></span>")
      span.addClass("empty");
      $(".stars").append(span)

    }
    if (n2 == 2) {
      var span = $("<span></span>")
      span.addClass("half");
      $(".stars").append(span)

    }




  }




})