setTimeout(function(){
  fetch("./dataExcel.json").then(res=>res.json()).then(data=>{
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
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/3Su3SdPkSvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 01: Làm quen với Excel 2016</h3>`
  }
  
  function video2(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/jvxVjMhilZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 02: Thao tác cơ bản với Excel</h3>`
  }
  
  function video3(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/6p28Dz4fw-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 03: Quản lý Vùng dữ liệu và Ô dữ liệu</h3>`
  }
  
  function video4(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/8wyUBZPdgyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 04: Định dạng Vùng dữ liệu</h3>`
  }
  
  function video5(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/4wkuN4MQJ98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 05: Lập công thức tính toán trong Excel</h3>`
  }
  
  function video6(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/c9bXWjdocqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 06: Các hàm toán học, hàm thời gian</h3>`
  }
  
  function video7(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/7kpnPO6zG5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 07: Nhóm hàm thống kê và chuỗi văn bản</h3>`
  }
  
  function video8(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/wgnvsjosPk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 08: Câu lệnh điều kiện và hàm điều kiện trong Excel</h3>`
  }
  
  function video9(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/Dn3R5cSLmeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 09: Hàm tìm kiếm VLOOKUP và HLOOKUP</h3>`
  }
  
  function video10(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/pf16gPwNaGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 10: Hàm MATCH và hàm INDEX</h3>`
  }
  
  function video11(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/LiYmMIUdJFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 11: Quản lý bảng tính Excel</h3>`
  }
  
  function video12(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/SkTci64n3U4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 12: Trang trí bảng tính Excel</h3>`
  }
  
  function video13(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/UMciBPR3LkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 13: In bảng tính Excel</h3>`
  }
  
  function video14(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/Q7LkmgnnKko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 14: Tìm hiểu TABLE và ứng dụng</h3>`
  }
  
  function video15(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/J9GR_92mM2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 15: PIVOT TABLE và ứng dụng trong Excel</h3>`
  }

  function video16(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/A6DxfAqi-I4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 16: Phân tích Dữ liệu trong Excel</h3>`
  }

  function video17(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/NMj5fXr0sGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 17: Vẽ đồ thị trong Excel</h3>`
  }

  function video18(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/pAooBEq6-po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 18: Vẽ đối tượng đồ họa trong Excel</h3>`
  }

  function video19(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/51iBzoNEMyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Microsoft Excel 2016 Bài 19: Bảo vệ và chia sẻ bảng tính</h3>`
  }

  function video20(){
    let linkVideo=document.getElementById("video");
    let titleVideo=document.getElementById("title-video");
    linkVideo.innerHTML=`<iframe width="100%" height="315" src="https://www.youtube.com/embed/YCtdVjefNKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    titleVideo.innerHTML=`<h3 id="title-video">Ứng dụng hàm INDIRECT và Data validation - INDIRECT and Data Validation</h3>`
  }


  
  
    