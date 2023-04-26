import React,{useEffect, useState} from 'react'
import './Password.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Password() {
  let[lengthvalue,setlength]=useState('') //length of the password selected
 
  let [array,setarray]=useState([])
  // let[string,setstring]=useState('')
  let [password,setpassword]=useState([])  //stores the combine password


  let obj={
    uppercase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase:'abcdefghijklmnopqrstuvwxyz',
    number:'12345678900',
    symbol:'&^%$#@!*+=_-><?'
  }

// UPPERCASE CHECKBOX CHECKED?
function handlechange(e){
  if(e.target.checked){ 
    setarray([...array, obj[e.target.value]])
  }
  else{
    let uncheckedarray=array.filter((item)=>{
        return item!==obj[e.target.value] //item not equals to unchecked element as event(e.target.value) is unchecking
         // console.log(item)
      // console.log(obj[e.target.value])
      }
      )
      setarray(uncheckedarray)
      
      // console.log(uncheckedarray)
  }
}



//GENERATE BTN CLICKED

function Generate(e){
  e.preventDefault()

  if(array.length===0){
    alert('Please Check atleast one Checkbox')
  }

  if(lengthvalue<10){
    alert('please select Password length of atlest 10 digits')
  }
  else{
    
  let string=array.join('')
  //  console.log(string)
  
   let pass=''
      for(let i=0;i<lengthvalue;i++){
        console.log(pass)
       pass+=string[Math.floor(Math.random()*string.length)]
      //  console.log(pass)
      }
  console.log(pass)
  

  setpassword(pass)



 
    
  }
}

function copycontent(e){
navigator.clipboard.writeText(password)
}





  return (
    <>
    <div className='container'>

        <form action="/" name='passwordvlaue'  type='submit' >
            <h1>Password Generator</h1>
            <input type="text"  className='first' value={password} /><br />
    <div className='content'>

   {/* Pass LENGTH */}
        <div >  
        <span>Password Length</span>  <input type="number" min='10' max='20' defaultValue='10' value={lengthvalue} className='passlength-i content-i' onChange={(e)=>setlength(e.target.value)}/> <br />
        </div>
 
{/*  uPPERCASE*/}
        <div className='input-p'>
        <span>Add Uppercase Letter</span>  <input type="checkbox" className='content-i'value='uppercase' onChange={(e)=>handlechange(e)}/><br />
        </div>

        <div className='input-p'>     
        <span>Add Lowercase Letter</span>  <input type="checkbox" className='content-i' value='lowercase' onChange={(e)=>handlechange(e)}/><br />
        </div>

        <div className='input-p'>
        <div>Include Numbers </div>  <input type="checkbox" className='content-i' value='number' onChange={(e)=>handlechange(e)}/><br />
        </div>

        <div className='input-p'>
        <span>Include Symbols </span>  <input type="checkbox" className='content-i' value='symbol' onChange={(e)=>handlechange(e)}/><br />
        </div>

        <button onClick={(e)=>Generate(e)}>Generate</button>
           {
          password && 
         ( <p className='clipboard-p'>
         {  <ContentCopyIcon onClick={copycontent} />}<span>{password}</span>
            </p>)
        } 
       
            
     </div> 
        </form> 
    </div>
    </>
  )
}


export default Password