const quizData = [
    {
        question: "Câu 1: Để tạo một slide mới, bạn có thể làm theo cách nào?",
        a:"Nhấp vào nút New Slide trên thanh công cụ.",
        b:"Nhấp vào menu Slide và chọn New Slide.",
        c:"Sử dụng phím tắt Ctrl + N.",
        d:"Tất cả đều đúng.",
        correct:"d",
    },
    {
        question: "Câu 2: Để xóa một slide, bạn có thể làm theo cách nào?",
        a:"Nhấp vào slide mà bạn muốn xóa.",
        b:"Nhấp vào nút Delete Slide trên thanh công cụ.",
        c:"Nhấp vào menu Slide và chọn Delete Slide.",
        d:"Sử dụng phím tắt Shift + Delete. ",
        correct:"a",  
    },
    {
        question: "Câu 3: Để di chuyển một slide, bạn có thể làm theo cách nào?",
        a:"Nhấp vào slide mà bạn muốn di chuyển.",
        b:"Kéo slide đến vị trí mới.",
        c:"Sử dụng phím tắt Ctrl + Shift + Mũi tên.",
        d:"Tất cả đều đúng.",
        correct:"d",  
    },
    {
        question: "Câu 4: Để sao chép một slide, bạn có thể làm theo cách nào?",
        a:"Nhấp vào slide mà bạn muốn sao chép.",
        b:"Nhấp vào nút Copy Slide trên thanh công cụ.",
        c:"Nhấp vào menu Slide và chọn Copy Slide.",
        d:"Sử dụng phím tắt Ctrl + C.",
        correct:"a",  
    },
    {
        question: "Câu 5: Để dán một slide, bạn có thể làm theo cách nào?",
        a:"Vào tab Home, chọn Table.",
        b:"Vào tab Insert, chọn Table.",
        c:"Nhấp vào vị trí mà bạn muốn dán slide.",
        d:"Vào tab Design, chọn Table.",
        correct:"c",  
    },
    {
        question: "Câu 6: Để định dạng văn bản trên một slide, bạn có thể làm theo cách nào?",
        a:"Nhấp vào menu Format và chọn các tùy chọn định dạng mà bạn muốn áp dụng.",
        b:"Ctrl + I.",
        c:"Nhấp vào menu Slide và chọn Paste Slide.",
        d:"Vào tab Design, chọn Table.",
        correct:"a",  
    },
    {
        question: "Câu 7: Để chèn một hình ảnh vào một slide, bạn có thể làm theo cách nào?",
        a:"Nhấp vào tab Insert, trong nhóm Images, bấm vào Picture.",
        b:"Ctrl + R.",
        c:"Sử dụng phím tắt Ctrl + Shift + V.",
        d:"Vào tab Home, chọn Font Size.",
        correct:"a",  
    },
    {
        question: "Câu 8: Để chèn một bảng vào một slide, bạn có thể làm theo cách nào?",
        a:"Ctrl + Shift + T",
        b:"Ctrl + R",
        c:"Ctrl + E",
        d:"Ctrl + Shift + A",
        correct:"a",  
    },
    {
        question: "Câu 9: Để chèn một biểu đồ vào một slide, bạn có thể làm theo cách nào?",
        a:"Tất cả các câu đều đúng",
        b:"Ctrl + R",
        c:"Ctrl + J",
        d:"Ctrl + Shift + c",
        correct:"d",  
    },
    {
        question: "Câu 10:   Để thiết lập các thông số trang in ta thực hiện?",
        a:"Vào tab Design, chọn Font Size",
        b:"Chọn File -> Page Setup",
        c:"Vào tab Layout, chọn Font Size",
        d:"Chọn File -> Properties",
        correct:"b",  
    },
    {
        question: "Câu 11: Để tô màu nền cho một slide trong bài trình diễn ta thực hiện?",
        a:"Vào tab Design, chọn Font Color",
        b:"Chọn Format ->  Background",
        c:"Chọn Insert ->  Background",
        d:"Vào tab Home, chọn Font Size",
        correct:"b",  
    },
    {
        question: "Câu 12:  Thực hiện thao tác chọn Slide Show -> Custom Animation là để?",
        a:"Tạo hiệu ứng động cho một đối tượng trong slide",
        b:"Tạo hiệu ứng chuyển trang cho các slide trong bài trình diễn ",
        c:"Đưa hình ảnh hoặc âm thanh vào bài trình diễn",
        d:"Định dạng cách bố trí các khối văn bản, hình ảnh, đồ thị ... cho một slide",
        correct:"a",  
    },
    {
        question: "Câu 13: Muốn mở một tập tin đã tồn tại trên đĩa, sau khi khởi động PowerPoint ta nhấn tổ hợp phím?",
        a:"Ctrl + O",
        b:"Ctrl + R",
        c:"Ctrl + E",
        d:"Ctrl + Shift + A",
        correct:"a",  
    },
    {
        question: "Câu 14: Muốn bật hoặc tắt thanh công cụ Drawing trên màn hình PowerPoint, người sử dụng phải?",
        a:"Vào tab Review, chọn Protect Document",
        b:"Chọn View -> Toolbar -> Drawing",
        c:"Vào tab Home, chọn Font Color",
        d:"Vào tab Design, chọn Protect Document",
        correct:"b",  
    },
    {
        question: "Câu 15: Muốn dùng một hình ảnh nào đó đã có trong đĩa để làm nền cho các slide trong giáo án điện tử,sau khi chọn Format -> Background -> Fill Effects ta chọn",
        a:" Picture",
        b:"Texture",
        c:"Pattern",
        d:"Gradient",
        correct:"a",  
    },
];

const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answer');
const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected();
    if(answer){
        if (answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=`
            <h2>Bạn trả lời đúng ${score}/${quizData.length} câu hỏi</h2>

            <button onclick="location.reload()">Làm lại</button>
            `
        }
    }
})