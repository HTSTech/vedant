
  import { useEffect } from 'react';
  import axios from 'axios';
  import Link from 'next/link';
  
  export default function Footer() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/17bfcd63-dfba-42e3-a822-0adbe0142b2f/vedant/Footer/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("FooterID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/17bfcd63-dfba-42e3-a822-0adbe0142b2f/vedant/Footer/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("FooterID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/17bfcd63-dfba-42e3-a822-0adbe0142b2f/vedant/Footer/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='FooterID'>
      </div>
    )
  }