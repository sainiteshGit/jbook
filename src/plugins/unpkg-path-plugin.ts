import axios from 'axios';
import * as esbuild from 'esbuild-wasm';
import localforage from 'localforage';


const fileCache=localforage.createInstance({
  name:'filecache'
});


// (async()=>{
  
//   await fileCache.setItem('color','red');
//   const color = await fileCache.getItem('color');
//   console.log(color);
// })
 
export const unpkgPathPlugin = (inputCode: string) => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      //Handle root path
      build.onResolve({ filter: /(^index\.js$)/},()=>{
        return {path:'index.js',namespace:'a'};
      });

      //Handle relative path in module
      build.onResolve({filter: /^\.+\//},(args:any)=>{
        return {
          namespace: 'a',
          path: new URL(args.path,'https://unpkg.com'+args.resolveDir+'/').href,
        };
      });

      //Handle main file of a module
      build.onResolve({ filter: /.*/ }, async (args: any) => {    
        return {
            path:`https://unpkg.com/${args.path}`,
            namespace:'a',
        }       
      });
 

    },
  };
};