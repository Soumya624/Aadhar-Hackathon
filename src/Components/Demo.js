import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Demo() {

    const [ captchaTxnId , setCaptchaTxnId ] = useState(null)
    const [ captchaValue, setCaptchaValue ] = useState(null)
    const [ imgValue, setImgValue ] = useState(null)

    function eKyc(){
        let url = "https://auth.uidai.gov.in/kyc/2.5/public/0/0/MEY2cG1nhC02dzj6hnqyKN2A1u6U0LcLAYaPBaLI-3qE-FtthtweGuk"
    }

    function getCaptcha(){
        let url = "https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/get/captcha"
        let data = {
            "langCode": "en",
            "captchaLength": "3",
            "captchaType": "2"
           }
        let config = {
            "headers":{
                "Content-Type":"application/json"
            }
        }

        axios.post(url,data,config)
        .then(res=>{
            alert("Success")
            console.log(res)
            setCaptchaTxnId(res.data.captchaTxnId)
            setImgValue('data:image/png;base64,' + res.data.captchaBase64String)


        })
        .catch(err=>{
            alert("Error")
            console.log(err)
        })
    }


    function getOtp(){

        let uiid = uuidv4()
        
        let headers = {
            'x-request-id' : uiid,
            'appid' : 'MYAADHAAR',
            'Accept-Language':'en_in',
            "Content-Type":"application/json"
        }

        let config = {
            'headers' : headers
        }

        let data = {
            "uidNumber" : "999924638810",
            "captchaTxnId" : captchaTxnId,
            "captchaValue": captchaValue,
            "transactionId" : "MYAADHAAR:" + uiid,
        }

        console.log(data)

        let url = "https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/generate/aadhaar/otp"

        axios.post(url,data,config)
        .then(res=>{
            alert("Suuceess Otp")
            console.log(res)
        })
        .catch(err=>{
            alert("Error Otp")
            console.log(err)
        })
    }
    return (
        <div>
            <button onClick={()=>{
                getCaptcha()
            }}>Click</button>
            <button onClick={()=>{
                getOtp()
            }}>Click Otp</button>
            <input onChange={e=>{
                setCaptchaValue(e.target.value)
            }}/>
            <img src={imgValue} />
        </div>
    )
}
