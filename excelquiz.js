const quizData = [
    {
        question: "Câu 1: Công thức nào sau đây sẽ tính tổng của các ô A1, A2 và A3?",
        a:"=SUM(A1:A3)",
        b:"=SUM(A1,A2,A3)",
        c:"=SUM(A1+A2+A3)",
        d:"Tất cả đều đúng",
        correct:"d",
    },
    {
        question: "Câu 2: Để tạo một danh sách thả xuống, bạn thực hiện thao tác nào?",
        a:"Vào tab Insert, chọn Data Validation",
        b:"Vào tab Data, chọn Data Validation",
        c:"Ctrl + U",
        d:"Vào tab Home, chọn Data Validation",
        correct:"b",  
    },
    {
        question: "Câu 3: Để tạo một biểu đồ, bạn thực hiện thao tác nào?",
        a:"Ctrl + L",
        b:"Vào tab Home, chọn Chart",
        c:"Vào tab Data, chọn Chart",
        d:"Vào tab Insert, chọn Chart",
        correct:"d",  
    },
    {
        question: "Câu 4: Để lọc dữ liệu, bạn thực hiện thao tác nào?",
        a:"Vào tab Data, chọn Filter",
        b:"Vào tab Home, chọn Picture",
        c:"Vào tab Home, chọn Filter",
        d:"Vào tab Insert, chọn Filter",
        correct:"a",  
    },
    {
        question: "Câu 5: Để xóa một hàng, bạn thực hiện thao tác nào?",
        a:"Nhấn phím Delete",
        b:"Nhấp chuột phải vào hàng và chọn Delete",
        c:"Nhấp đúp vào hàng và chọn Delete",
        d:"Tất cả đều đúng",
        correct:"b",  
    },
    {
        question: "Câu 6: Để tạo một bảng tính mới, bạn chọn thao tác nào?",
        a:"Vào tab File, chọn New",
        b:"Vào tab Home, chọn New",
        c:"Nhấn phím tắt Ctrl + N",
        d:"Tất cả đều đúng",
        correct:"d",  
    },
    {
        question: "Câu 7: Để lưu một bảng tính, bạn chọn thao tác nào?",
        a:"Vào tab File, chọn Save",
        b:"Ctrl + R",
        c:"Ctrl + U",
        d:"Vào tab Home, chọn Font Size",
        correct:"a",  
    },
    {
        question: "Câu 8: Để tìm kiếm một giá trị trong một bảng tính, bạn chọn thao tác nào?",
        a:"Tất cả các câu đều đúng",
        b:"Ctrl + R",
        c:"Ctrl + F",
        d:"Ctrl + Shift + A",
        correct:"c",  
    },
    {
        question: "Câu 9: Để thay thế một giá trị trong một bảng tính, bạn chọn thao tác nào?",
        a:"Ctrl + H",
        b:"Ctrl + R",
        c:"Ctrl + J",
        d:"Ctrl + Shift + A",
        correct:"a",  
    },
    {
        question: "Câu 10: Để sắp xếp dữ liệu trong một bảng tính, bạn chọn thao tác nào?",
        a:"Vào tab Design, chọn Font Size",
        b:"Vào tab Home, chọn Sort & Filter",
        c:"Vào tab Layout, chọn Font Size",
        d:"Vào tab Data, chọn Sort & Filter",
        correct:"b",  
    },
    {
        question: "Câu 11: Để sao chép một ô hoặc một vùng dữ liệu, bạn chọn thao tác nào?",
        a:"Nhấp chuột phải vào ô hoặc vùng dữ liệu và chọn Copy",
        b:"Vào tab Layout, chọn Font Color",
        c:"Nhấn phím Ctrl + V",
        d:"Vào tab Home, chọn Font Size",
        correct:"a",  
    },
    {
        question: "Câu 12: Để dán một ô hoặc một vùng dữ liệu, bạn chọn thao tác nào?",
        a:"Vào tab Design, chọn Font Color",
        b:"Vào tab Home, chọn Paste",
        c:"Vào tab Home, chọn Font Color",
        d:"Vào tab Home, chọn Borders",
        correct:"b",  
    },
    {
        question: "Câu 13: Để xóa một ô hoặc một vùng dữ liệu, bạn chọn thao tác nào?",
        a:"Vào tab Home, chọn Background",
        b:"Vào tab Home, chọn Delete",
        c:"Vào tab Home, chọn Font Color",
        d:"Vào tab Home, chọn Borders",
        correct:"b",  
    },
    {
        question: "Câu 14: Để định dạng một ô hoặc một vùng dữ liệu, bạn chọn thao tác nào?",
        a:"Vào tab Review, chọn Protect Document",
        b:"Vào tab Layout, chọn Font Color",
        c:"Vào tab Home, chọn Alignment",
        d:"Vào tab Design, chọn Protect Document",
        correct:"c",  
    },
    {
        question: "Câu 15: Để tạo một biểu đồ, bạn chọn thao tác nào?",
        a:"Vào tab Review, chọn Protect Document",
        b:"Vào tab Insert, chọn Chart",
        c:"Vào tab Home, chọn Font Color",
        d:"Vào tab Design, chọn Protect Document",
        correct:"b",  
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