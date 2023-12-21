import { DataverseConnector ,RESOURCE,SYSTEM_CALL} from "@dataverse/dataverse-connector";
import app from "../output/app.json";
import { ModelParser, Output } from "@dataverse/model-parser";
import { Currency,DatatokenType } from "@dataverse/dataverse-connector";
// import { DataTokenType } from "@dataverse/dataverse-contracts-sdk/dist/cjs/data-token/types";

export const dataverseConnector = new DataverseConnector()
const modelParser = new ModelParser(app as Output );
const modelId = "kjzl6hvfrbw6c87nhtq8h7il3qjw8topba82sq1c3zl16b68shk26sn9j7ta9xx"
export const createCapability = async () => {
    const pkh = await dataverseConnector.runOS({
      method: SYSTEM_CALL.createCapability,
      params: {
        appId:modelParser.appId,
        resource: RESOURCE.CERAMIC,
    
      },
    });
    return pkh;
  };
  
  function uuid() {
    let d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now(); // use high-precision timer if available
    }
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (d + Math.random() * 16) % 16 | 0; // d是随机种子
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      },
    );
    return uuid;
  }


  const encrypted = JSON.stringify({
    text: false,
    images: false,
    videos: false,
  });
  export const createFile = async(text)=>  await dataverseConnector.runOS({
    method: SYSTEM_CALL.createIndexFile,
    params: {
      modelId,
      fileName:uuid() ,
      fileContent: {
        modelVersion: "0.0.1",
        text:text ,
        images: [
          
        ],
        videos: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        encrypted,
      }
    },
  });

export const loadAllFiles=async()=>await dataverseConnector.runOS({
    method: SYSTEM_CALL.loadFilesBy,
    params: {
      modelId:"kjzl6hvfrbw6c87nhtq8h7il3qjw8topba82sq1c3zl16b68shk26sn9j7ta9xx",
    },
    
  });


export const loadFile = async(_fileId:any)=>await dataverseConnector.runOS({
    method: SYSTEM_CALL.loadFile,
    params: _fileId,
  });

 
 export const monetize = async(_fileId:any)=> await dataverseConnector.runOS({
    method: SYSTEM_CALL.monetizeFile,
    params: {
        fileId :_fileId,
      datatokenVars: {
        collectLimit: 100,
        amount: 0,
        currency: Currency.WMATIC,
      },
      decryptionConditions: [
        {
            conditionType: 'evmBasic',
            contractAddress: '',
            standardContractType: '',
            chain: 'mumbai',
            method: '',
            parameters: [':userAddress'],
            returnValueTest: {
              comparator: '=',
              value: '0x3c6216caE32FF6691C55cb691766220Fd3f55555',
            },
          },
      ]
    },
  });


export const collect = async(__fileId)=> await dataverseConnector.runOS({
    method: SYSTEM_CALL.collectFile,
    params: __fileId,
  });


export const decrypt = async(__fileId)=>await dataverseConnector.runOS({
    method: SYSTEM_CALL.unlockFile,
    params: __fileId,
  });