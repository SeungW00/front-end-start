//start...

//개발자도구에서 메세지확인
//console.log('todos.js');

(function($,global){

// id가 todoString 인 element 가져오기
var $todoStringField = $('#todoString');
var $listDom = $('#todoList');

//console.log(todoStringField);
$todoStringField.on('keyup',addTodo);


//todoStringField.addEventListener('keyup', addTodo);

//삭제버튼 이벤트 잡기 위해 상위에서 이벤트 listen 하기
//listDom.addEventListener('click', checkDelete);

$listDom.on('click','.delete',function(event){

    console.log('delete');

    var $deleteBtn = $(event.target);

    $deleteBtn.parent().remove();

    saveDate($listDom.html());
});
//처음 로딩시에 기존에 저장된 데이터 가져와서 보여주기
//listDom.innerHTML = loadData();
$listDom.html(loadData());
})(jQuery,window);
