setTimeout(function(){
  fetch("./dataWord.json").then(res=>res.json()).then(data=>{
      let h="";
      for(let c of data){
          h+=`
          ${c.content}
          <br>
          `;
      }

      let e =document.querySelector(".content-describe");
      e.insertAdjacentHTML("afterend",h);

  })
}, 1);


function video1(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315px" src="https://www.youtube.com/embed/UGpod7WlwJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 01: Làm quen với Microsoft Office Word 2016</h3>`
}

function video2(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315px" src="https://www.youtube.com/embed/KiDdqMTLc34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 02: Tổ chức quản lý các tài liệu trong Word</h3>`
}

function video3(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/SDpN6i8BUHc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 03: Các thao tác Soạn thảo văn bản Word</h3>`
}

function video4(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/9UBpEDaWfTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 04: Cách đọc và chỉnh sửa tài liệu trong Word</h3>`
}

function video5(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/zFQEzOCXuSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 05: Chỉnh sửa văn bản Word</h3>`
}

function video6(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/yLgC-XMygg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 06: Định dạng đoạn văn cơ bản</h3>`
}

function video7(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/YkcJCw4SIiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 07: Định dạng đoạn văn Nâng cao</h3>`
}

function video8(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/3hlIIF7JBOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 08: Sử dụng TAB canh chỉnh văn bản</h3>`
}

function video9(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/AzV-wXk6y5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 09: Định dạng trang in</h3>`
}

function video10(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/CcInvPs61X8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 10: In tài liệu trong Word 2016</h3>`
}

function video11(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/tM_MMvM9yB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 11: Bảng biểu (Table) và Đồ thị (Chart)</h3>`
}

function video12(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/GNSxvA5AhZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 12: Đối tượng đồ họa trong Word 2016</h3>`
}

function video13(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/27QyAdMiqcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 13: Trộn thư trong Word (Mail Merge)</h3>`
}

function video14(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/92DlGc6-6iU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Microsoft Word 2016 Bài 14: Tùy biến Word 2016</h3>`
}

function video15(){
  let linkVideo=document.getElementById("video");
  let titleVideo=document.getElementById("title-video");
  linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/U2W-6VplF7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  titleVideo.innerHTML=`<h3 id="title-video">Định dạng văn bản theo điều kiện trong Word - Format Condition in Office Word</h3>`
}


  