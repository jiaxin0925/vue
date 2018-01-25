function loadImageAsync(url){
    const image = new Image();
    const promise = new Promise(function(resolve, reject){
        image.onload = function(){
            resolve(image)
         }
        image.onerror = function (error){
            reject (new Error(error))
        }
    })
   image.src = url;
   return promise;
}


// 多张
function loadImagesAsync(...urls){// 接収一个图片集合
    const urlArr = urls[0] instanceof Array ? urls[0] : urls;// 转位数组
    const [sum, imageArr] = [urlArr.length, []];// 新建你需要返回的 对象 以及返回的条件
    const promise = new Promise((resolve, reject)=>{
        for(let url of urlArr){
            loadImageAsync(url).then((image)=>{// 一张一张的装载
                imageArr.push(image);// 没成功 就push 一张
                if(imageArr.length === sum){// 直到所有的都加载完毕
                    resolve(imageArr);// 全部成功以后返回成功的数据和状态
                }
            }, (error)=>{
                reject(error);// 一旦有任何一张图片错误 抛出错误 并宣布失败
            })
        }
    })
    return promise;
}