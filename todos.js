//start...

//console.log('helloworld');

function getDom(id){
  return document.getElementById(id);
}

//var todoStringField = document.getElementById('todoString');
var todoStringField = getDom('todoString');
//var form=document.getElementById('todoForm');
todoStringField.addEventListener('keyup',function(event){
  //console.log(event.keyCode);
  //console.log(todoStringField.value);
  if(event.keyCode===13){
      console.log(todoStringField.value);

      var newtodo = todoStringField.value;
      todoStringField.value="";

      var listDom = getDom('todoList');
      listDom.innerHTML +='\
      <li>\
          <button class="delete">×</button>\
          <input type="checkbox" class="toggle-checked">\
          <span class="text">'+newtodo+'</span>\
      </li>';
  }
});
//console.log(todoStringField , todoStringField.value);
