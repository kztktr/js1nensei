// プレイリストを取得
var listitems = document.querySelectorAll('li');
for(var i=0; i<listitems.length; i++){
    //clickイベント設定
    listitems[i].addEventListener('click',
        (e)=>{
            var li = e.target;
            playMusic(li)
        }
    );
}

function playMusic(li){
    var file = li.getAttribute('data-file');
    var audio = document.querySelector('audio');
    audio.setAttribute('src', file);
    audio.play();
    //activの項目を変更
    var activeli = document.querySelector('.active');
    activeli.className = '';
    li.className = 'active';
}

//再生中と停止中でイラストを切り替える
var audio = document.querySelector('audio');
audio.addEventListener('play',
    (e)=>{
        var img = document.querySelector('img');
        img.setAttribute('src', 'pict_play.png');
    }
)
audio.addEventListener('pause',
    (e)=>{
        var img = document.querySelector('img');
        img.setAttribute('src', 'pict_stop.png');
    })

//曲を最後まで再生した時
audio.addEventListener('ended',
    (e)=>{
        var img = document.querySelector('img');
        img.setAttribute('src', 'pict_stop.png');
        //次の曲に切り替え
        var activeli = document.querySelector('.active');
        var nextli = activeli.nextElementSibling;
        if(nextli != null){
            playMusic(nextli);
        }
        //    console.log('active' + activeli + activeli.getAttribute('data-file'));
        //    console.log('next' + nextli + nextli.getAttribute('data-file'));
    }
);

//ランダム選曲機能
var random = document.querySelector('#random');
random.addEventListener('click',
    (e)=>{
        e.preventDefault();
        //console.log("ランダム！")
        var listitems = document.querySelectorAll('li');
        var len = listitems.length;
        var rnd = Math.floor(Math.random() * len);
        playMusic(listitems[rnd]);
    }
);