//오라클 접속 문자열 모듈 가져오기
var conStr=require("../mymodule/conStr");
var oracledb=require("oracledb");
var express = require('express');
var router = express.Router();
oracledb.autoCommit=true;//주의!!!!!

//커넥션풀을사용하지 않을 경우 하나의 커넥션으로 공해서 
//CRUD를 수행하자!!
var con;
oracledb.getConnection(conStr, function(error, connection){
  if(error){
    console.log(error);
  }else{
    con=connection;
  }
});


/* 
Comments와 관련된 모든 요청을 처리하는
라우터 , 스프링의 Controller로 비슷...
글목록요청, Create Read Update Delete 요청처리....
*/

/* 글목록 요청 처리 */
router.get('/list', function(req, res, next) {


  res.render('comments/list', { title: '나의 프레임웍 구축 성공' });
});


/* 글등록 요청 처리 comments/regist  */
router.post('/regist', function(req, res, next) {
  //파라미터 받기
  var writer=req.body.writer;//json {writer:"", title:"dsd"}
  var title=req.body.title;
  var content=req.body.content;

  
  //console.log(writer, title, content);

  //접속시도!!
  oracledb.getConnection(conStr, function(error, con){
    if(error){
      console.log("오라클접속 실패!!");
    }else{
      console.log("오라클접속 성공!!");
      //쿼리문 실행!~!
      var sql="insert into board(board_id,writer,title,content)";
      sql+=" values(seq_board.nextval,:1,:2,:3)";

      con.execute(sql, [writer,title,content], function(err, result){
        if(err){
          console.log(err);//쿼리 자체 오류...
        }else{
          console.log(result);
          if(result.rowsAffected==0){
            res.writeHead(500,{"Content-Type":"text/json"});              
            res.end(JSON.stringify({result:0}));
          }else{
            res.writeHead(200,{"Content-Type":"text/json"});              
            res.end(JSON.stringify({result:1}));
          }
        }     
      });
    }
  });

  //res.render('comments/list', { title: '나의 프레임웍 구축 성공' });
});


module.exports = router;
