$(document).ready(function () {
    var answer = Math.floor(Math.random() * 100) + 1; // 隨機數字
    var guesses = []; // 存儲猜測值
  
    $("#guessBtn").click(function () {
      var guess = parseInt($("#guessInput").val()); // 獲取猜測值
      if (isNaN(guess) || guess < 1 || guess > 100) {
        $("#result").text("請輸入有效的數字。");
      } else {
        guesses.push(guess); // 將猜測值添加到數組中
        if (guess === answer) {
          // 猜對了
          $("#result").html(
            "恭喜你猜對了！<br>答案是 " +
              answer +
              "。<br>你總共猜了 " +
              guesses.length +
              " 次。"
          );
          $("#guessInput, #guessBtn").prop("disabled", true); // 禁用輸入框和按鈕
        } else {
          var hint = guess > answer ? "猜大了。" : "猜小了。";
          $("#result").text(hint + "你已經猜了 " + guesses.length + " 次。");
        }
      }
    });
  });
  