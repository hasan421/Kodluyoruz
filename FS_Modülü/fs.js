const fs =require('fs');
var data={"name": "Employee 1 Name", "salary": 2000}
var path='employees.json'
data=JSON.stringify(data)
fs.writeFile(path,data,function(hata){
    if(hata){
        throw hata;
    }
    else{
       console.log("Yazıldı")
    }
})

fs.readFile(path, 'utf-8', function (err, data) {

  if (err) throw err;

  console.log(data);

});

fs.unlink(path,function(hata){
    if(hata){
        throw hata;
    }
    else{
        console.log("Silindi");
    }
})
fs.appendFile(path, data, 'utf8', (err) => {
    if (err) console.log(err);
});