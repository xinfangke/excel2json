## 测试命令

node dist/index test/source test/target test/target

## 介绍

工具支持excel、csv格式的文件导出成zip。 zip中的格式为json.

工具主要针对一些typescript项目，在导出zip的同时，导出相关类的定义文件。

支持number，string数组导出，具体看查看文件夹test

-----------------

根据excel或csv源目录中包含的configlist.xlsx文件确定哪些文件需导出，哪些不需导出
configlist.xlsx 表头格式： 
序号(number),   表文件名，   表介绍，  是否导出客户端（1|0），  是否导出服务端(1|0)
1,              gift,      "奖励",  1,                    1    

```
node dist/index sourcepath(表源) targetpath(表输出) interfacepath(接口输出)
```

实现原理，编译源文件夹的所有文件为 config.zip 与 Cfgs.ts 两个文件到指定目录，项目中都需要引用或加载。

注意：表中为空的字段不会被导出，需程序判定字段是否存在。

cfgs.ts包含类的定义描述如：

## config.zip 解压 使用到jszi库

```
    //加载数据
    let zip = await jszip.loadAsync(data|config.zip);
    let text = await zip.file("allcfg.json").async("string");
    let jsonObj = JSON.parse(text);
    downzip.remove("allcfg.json");
    //读取数据
    let tableItem:Cfgs.Types.skill_data = jsonObj["skill_data"][1];
```

```
/** 机器码 cfgs.ts */
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
