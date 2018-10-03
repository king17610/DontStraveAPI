var url = location.href;

if(url.indexOf('?')!=-1)
{
    //之後去分割字串把分割後的字串放進陣列中
    var ary1 = url.split('?');
    //此時ary1裡的內容為：
    //ary1[0] = 'index.aspx'，ary2[1] = 'id=U001&name=GQSM'
    console.log(ary1);
    
    //下一步把後方傳遞的每組資料各自分割
    var ary2 = ary1[1].split('&');
    //此時ary2裡的內容為：
    //ary2[0] = 'id=U001'，ary2[1] = 'name=GQSM'
    console.log(ary2);

    //最後如果我們要找id的資料就直接取ary[0]下手，name的話就是ary[1]
    var ary3 = ary2[0].split('=');
    //此時ary3裡的內容為：
    //ary3[0] = 'id'，ary3[1] = 'U001'
    console.log(ary3);

    //取得id值
    var id = ary3[1];
    console.log(id);

}
