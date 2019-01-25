## 介绍

源目录中必须包含configlist.xlsx文件，用来标示哪些文件需导出，哪些不需导出
configlist.xlsx 表头格式： 
序号(number),   表文件名，   表介绍，  是否导出客户端（1|0），  是否导出服务端(1|0)
1,              gift,      "奖励",  1,                    1     
执行脚本 node out/index sourcepath(表源) targetpath(表输出) interfacepath(接口输出)
实现原理，拉去目标文件夹的所有文件到缓存文件夹，编译缓存文件夹文件到目标文件夹

支持xlsx 与 txt(CSV)

会生成Cfgs.ts,config.zip两个文件，项目中都需要引用或加载到。

cfgs.ts包含类的定义描述如：

注意：表中为空的字段不会被导出，需程序判定字段是否存在。


## config.zip 解压

```
    //加载数据
    let data = "config.zip data";//这里需要是具体的文件数据
    let zip = await jszip.loadAsync(data);
    let text = await zip.file("allcfg.json").async("string");
    let jsonObj = JSON.parse(text);
    downzip.remove("allcfg.json");
    //读取数据
    let tableItem:Cfgs.Types.skill_data = jsonObj["skill_data"][1];
```

```
/** 机器自动生成 */
module Cfgs{ 
    export const skill_data:{name:string,clz:Types.skill_data} = {name:"skill_data",clz:null};
    export const spirits_data:{name:string,clz:Types.spirits_data} = {name:"spirits_data",clz:null};

    export declare namespace Types {
        export interface skill_data{
            /** #技能ID */ 
            id:number;
            /** 技能名 */ 
            SkillName_l:string;
            /** 技能图标 */ 
            SkillIcon:string;
            /** 技能描述 */ 
            SkillMark_l:string;
        }
        export interface spirits_data{
            /** #式神id */ 
            id:number;
            /** 式神名称 */ 
            Name_l:string;
            /** 式神介绍 */ 
            Remak_l:string;
            /** 式神形象id */ 
            SpiritsModelId:number;
        }
 
    }
}
```


@author yangxiao 
