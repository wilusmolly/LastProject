//오라클 접속 문자열 모듈 가져오기
var conStr=require("../mymodule/conStr");
var oracledb=require("oracledb");
var express = require('express');
var router = express.Router();
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
router.get('/regist', function(req, res, next) {
  //접속시도!!
  oracledb.getConnection(conStr, function(error, con){
    if(error){
      console.log("오라클접속 실패!!");
    }else{
      console.log("오라클접속 성공!!");
    }
  });

  //res.render('comments/list', { title: '나의 프레임웍 구축 성공' });
});


module.exports = router;
