import React, { useState } from 'react'
import {createCapability, createFile,dataverseConnector,monetize} from "../utils"
import { useContractWrite } from 'wagmi'
import { abi, address } from '../constants'
function CreatePost() {

    const {writeAsync} = useContractWrite({
        address:address,
        abi:abi,
        functionName:"createCommunityPost"
    })

    const [isLoading,setLoading] = useState(false)
    const [msgText,setMessageText] = useState("")

    
  function handleMessageText(e){
    setMessageText(e.target.value)
  }


  async function handleSend(){
    setLoading(true)
    try{
        dataverseConnector.connectWallet()
        // console.log("wallet",await  dataverseConnector.getCurrentWallet())
        await createCapability()
        const res = await createFile(msgText)
        console.log(res.fileContent.file.fileId)

        await writeAsync({
            args:[0,res.fileContent.file.fileId]
        })

         await monetize("kjzl6kcym7w8y68qvfhd20m0dhz0bqmdhzua9ex4tewf9l013eedthnbatu95yn")

        console.log(res)
    // await shareFile()
    // console.log("file shared")
    // const id =await nanoid()

    // const res = await createMessage(id,msgText,imageCID)
    // console.log("CREATED MESSAGE")
    // const message = await messageCollectionReference.record(id)
    // console.log("fetched message")
    // const res2 = await addMessageToChat(chatId,id)
    }
    catch(err){
      console.log(err)
    }
    finally{
    //   setMessageText("")
    //   setImageCID("")
      setLoading(false)
    }

}

  return (
    <div class="items-center flex m-auto">
    {/* <button onClick={handleSelectFile} type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
        <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
        
        <input type='file'style={{display:"none"}} className='w-full h-full'
        ref={fileInputRef}

        
        onChange={(e)=>uploadFileEncrypted(e)}></input>
    </button> */}
    <input type="text" value={msgText} onChange={handleMessageText} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        {isLoading ?<span className="loading loading-spinner loading-sm"></span>: <button onClick = {handleSend}type="submit" class="btn btn-square btn-outline">
        <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
        <span class="sr-only">Send message</span>
    </button>}
</div>
  )
}

export default CreatePost