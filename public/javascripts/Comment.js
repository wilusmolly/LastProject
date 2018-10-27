/*댓글 1건을 표현한 클래스*/
class Comment{
    constructor(msg, author){
        this.msg=msg;
        this.author=author;

        this.wrapper=document.createElement("div");
        this.title=document.createElement("div");
        this.writer=document.createElement("div");
        
        //css 적용 
        this.title.style.float="left";
        this.writer.style.float="left";

        this.title.style.width="70%";
        this.writer.style.width="20%";
        this.title.style.background="yellow";
        this.writer.style.background="pink";

        //innerText
        this.title.innerText=this.msg;
        this.writer.innerText=this.author;

        //요소간 조합 
        this.wrapper.appendChild(this.title);
        this.wrapper.appendChild(this.writer);
    }

}