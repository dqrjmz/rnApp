## 加载项目图片
```
require('./images/...');
```


## 加载app图片
```
这里的加载APP中的图片资源，都是从打包后的APK文件中反编译出来的图片资源，对于Android项目，图片必须存在于 app/src/main/res/drawable 文件夹内；对于iOS项目，图片必须存在于 Images.xcassets 文件夹内。

　　上面说，无论Android还是iOS，都是从打包后的APK文件中取图片的，因此，我们在将图片放到Android或iOS的相应文件夹下后，需要先运行一遍项目，或者Build一下APK，这样才能保证项目的APK文件中打包了刚刚放进去的图片。

　　实例代码如： <Image source={{uri: 'apple_logo'} style={{width:40, height:40}}/> 。
```

## 网络图片
```
　加载网络图片同样用到了 uri 的方法，实例代码如： <Image source={{uri:'http://.../apple_logo.png'}} style={{width:200, height:200}} /> 。

　　【注意】使用这种方法加载网络图片，同样必须指定图片的尺寸。
```