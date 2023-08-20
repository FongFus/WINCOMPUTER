setTimeout(function(){
  fetch("./dataPowerPoint.json").then(res=>res.json()).then(data=>{
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
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/DC6GysEQlpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 01: Làm quen với Power Point</h3>`
  }
  
  function video2(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/dlTP81oanc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 02: Thao tác cơ bản trong Power Point</h3>`
  }
  
  function video3(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/18_j-QuLg-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 03: Giao diện và biểu mẫu Slide</h3>`
  }
  
  function video4(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/V5EkLynm0Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 04: Thêm văn bản vào Slide</h3>`
  }
  
  function video5(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/DPgvj4ukivY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 05: Bảng biểu và Đồ thị</h3>`
  }
  
  function video6(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/PP3OYp11S3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 06: Các Đối tượng Đồ họa</h3>`
  }
  
  function video7(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/SRWNNR325Dk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 07: Video, Hình ảnh và Âm thanh</h3>`
  }
  
  function video8(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/UHvSXey68ME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 08: Tạo CHUYỂN ĐỘNG và HIỆU ỨNG</h3>`
  }
  
  function video9(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/dWxluux2WLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 09: Quản lý SLIDE bằng SLIDE SORTER</h3>`
  }
  
  function video10(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/i9Mb0Pex5Nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 10: Tạo SLIDE bằng OUTLINE VIEW</h3>`
  }
  
  function video11(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/koXB3CxDHbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 11: SLIDE MASTER và ứng dụng</h3>`
  }
  
  function video12(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/OmRj76BEVWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 12: Chuẩn bị trình chiếu</h3>`
  }
  
  function video13(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/jGRilaNx6K0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 13: Thực hành thuyết trình</h3>`
  }
  
  function video14(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/GgQSQaTR-o4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 14: Chia sẻ bài thuyết trình</h3>`
  }
  
  function video15(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/Ep4vbRuPNk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 15: In bài thuyết trình ra giấy</h3>`
  }

  function video16(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/RBrpcBTbNYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Power Point 2016 Bài 16: Tùy chỉnh Power Point</h3>`
  }

  