"use strict";

$(function () {
  //実行したい処理
});

// クラス名を指定する
$('hello')

// id名を指定する
$('#hello')

// クラス名:helloのcolorとfont-sizeを変更する
// これができるとクリック時やスクロール時などにデザインを更新
// するような動的なサイトデザインが可能
$('.hello').css({
  "color": "red",
  "font-size": "2rem"
});

// クラスにid名を追加する
$('.hello').attr('id', 'hello2');

// id名の変更
$('#hello').attr('id', 'hello');

// id名の削除
$('.hello').removeAttr('id');

// クラス名の追加　
$('#hello').attr('class', 'hello2 hello3');
$('#hello').addClass('hello2 hello3');

// クラス名の削除
$('#hello').removeClass('hello2 hello3');

// テキストの変更
$('.hello').text('おはよう世界');

// valueを変更
$('input[mame="hello"]').val('おはよう世界');

// srcを取得
$(' hello').attr('src', 'img/hello.jpg');

// クラスの表示
$('.hello').show();

// 非表示
$('.hello').hide();

// 1.5秒かけてフェードインする
$('.hello').fadeIn(1500);

// 0.5秒かけてフェードアウトする
$('.hello').fadeOut(500);

// クラス名が表示されている時は非表示に
// 非表示の場合は表示する
$('.hello').toggle();

// 表示してる場合はスライドorフェードして非表示に
// 非表示の場合はスライドorフェードして表示する
$('.hello').slideToggle();
$('.hello').fadeToggle(1500);

// クリック時のイベント
$('.hello').on('click', function () {
  // 何かしらの処理
});

// 値が変更された時の実行
$('.hello').on('change', function () {
  // 何かしらの処理
});

// ページ読み込み後に実行する
$(window).on('load', function () {
  // 処理
});

// スクロール時のアクション
$(window).scroll(function () {
  // 何かしらの処理
});

// 画面のサイズが変更されたとき
$(window).resize(function () {
  // 何かしらの処理
});

// slick, Datepicker, inview などがある