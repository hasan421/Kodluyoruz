const posts=[]

//Promise

const addPosts=(data)=>{
    posts.push(data)
    return new Promise((resolve,reject)=>{
        if(data)
        {
            resolve('Ürün Eklendi')
        }
        else
        {
            reject('Hata Oluştu')
        }
    })

}
const getPosts=()=>{
    return new Promise((resolve,reject)=>{
        if(!posts)
        { console.log('girdim');
            resolve(posts)
            posts.map(post=>{
                console.log(post);
            })
            
        }
        else
        {
            
            reject('Hatalar Oluştu')
        }
    })

    
}
addPosts({title:'kitap1',detail:'Post1'})
.then(result=>{
    console.log('Yeni Liste')
    getPosts().catch(err=>{
        console.log(err);
    })
})

.catch(err=>{
    console.log(err)
})
//Async-Await
 async function show(){

    const addData=await addPosts({title:'kitap1',detail:'Post1'})
    getPosts().catch(err=>{
        console.log(err);
    });
}
show();

