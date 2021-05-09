// (API_KEYには、"取得したAPIキー"を記述する)
API_KEY = "a8f0951bd53d3259923dbba1a3c78d0d"

$(function(){
  $('#btn').on('click',function(){
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      // Ajaxを実装するメソッド
      // 今回はurlオプションでAPIにリクエストする情報を、dataType（レスポンスとして取得したいデータの型）でJSONを指定している。
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　// vai()はHTMLのvalue属性を取得するメソッド
      dataType : 'jsonp',
    }).done(function (data){
      // 通信成功時
      $('#place').text(data.name);
                      // JSONから欲しい値を指定する
      $('#temp_max').text(data.main.temp_max);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
  　　　　　　　　　　　// src＝埋め込みたい画像のパス（必須）
      $('img').attr("alt",data.weather[0].main)
      　　　　　　　　 // alt＝画像のテキストによる説明（任意）　　　　　　　
    }).fail(function(data) {
      // 通信失敗時
      alert('通信に失敗しました。');
    });
  });
});