//https://apis.daum.net/search/web?apikey=b92bf6b09b6323db7f86d61f5295e070&q=카카오&output=json&collback=done
var src;
var pageCount=1;
var searchWord;
var searchListTemplate=document.getElementById("searchListTemplate").innerHTML;
var searchList=document.getElementById("searchList");
var searchData;
function getSearchWord(){
  searchWord=document.getElementById("searchWord").value;
  searchData=getData(searchWord);
  searchView();

}
function searchView(){

  getJSON(searchData+pageCount, function(searchListData) {
    console.log(searchListData);
    var html=tmpl(searchListTemplate, {list : searchListData.channel.item});
    searchList.innerHTML = html;
  });
  pageCount+=1;
}

function getData(searchWord,count){
  src="https://apis.daum.net/search/web?apikey=b92bf6b09b6323db7f86d61f5295e070&q="+searchWord+"&output=json&pageno=";
  return src
}
function addList(){
  searchView();
}
document.getElementById("searchSubmit").addEventListener("click", getSearchWord);
document.getElementById("add").addEventListener("click", addList);
