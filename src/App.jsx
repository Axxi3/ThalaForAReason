import { useEffect, useRef, useState } from 'react'
import loader from '../public/loader.gif'
import thala from "../public/thala.mp3"
import './App.css'      
import cry from "../public/cry.mp3"
import Lottie from 'react-lottie';     
import doni from "../public/dhooni.mp4"
import cat from "../public/cat.gif"
import animationData from "../public/confetti.json"

function App() {
  const [inputValue, setInputValue] = useState('0');
 
  const audioRef = useRef(null);     
  const audioRef2 = useRef(null);  
  const [isPaused, setIsPaused] = useState(true);  
  const [data,setData]=useState("")  
  const [loading, setLoading] = useState(true);    
  const[Thala,setThala]=useState(false)  
 const [textData,setTextData]=useState("")
  

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
  }; 
  
  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };     
  const handleCry = () => {
    if (audioRef2.current) {
      audioRef2.current.play();
    }
  };  

  const stopPlay = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };  
  const stopCry = () => {
    if (audioRef2.current) {
      audioRef2.current.pause();
    }
  };



  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };




  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setData(event.target.value)
  };

  const Check = () => {  
    var aray=0
    setLoading(true); // Change "start" to true  
    
    if (inputValue.length === 0) {
      alert("At least write something 😠😠😠");
      setLoading(false); // Change "stop" to false
      return;
    }
  
    if (!isNaN(inputValue)) {
      console.log("Input is a number:", Number(inputValue));
  
      var num = inputValue;
      var arr = num.toString().split('');
      var digits = arr.map(function (el) {
        return +el;
      });
  
      console.log(digits);
     
  
      for (let index = 0; index < digits.length; index++) {
       
        aray+=digits[index]
      }   

      console.log("This is aray" +aray)  

      if(aray===7){ 
      
            handlePlay()     
            stopCry()
            togglePlayPause()  
            setLoading(false);  
            setThala(true)  
            setTextData(data)
          
           } else if(aray==0){   
            stopPlay()    
            stopCry() 
            setThala(false)
           
            return
           } 
          else {    
            handleCry() 
            stopPlay()  
            setTextData(data)
        
      setLoading(false); // Change "stop" to false  
      setThala(false)
    } 
  }else {
     
aray=inputValue.length

      if(aray===7){ 
      
        handlePlay()    
        stopCry()  
        togglePlayPause()  
        setThala(true)  
        setTextData(data)
      
       } else if(aray==0){   
        stopPlay()    
        stopCry()
        setThala(false)  
        setTextData(data)
        return
       } 
      else {   
        stopPlay()   
        handleCry()  
        setTextData(data)
      
  setLoading(false); // Change "stop" to false   
  setThala(false)

} 
     
      setLoading(false); // Change "stop" to false   
   
    }
  };  



  useEffect(()=>{ 
    console.log("This is thal status " +Thala)
  },[Thala])


  // useEffect(() => {    
    
  //   console.log(number)
  //   if(number===7){ 
      
  //     handlePlay()    
  //     togglePlayPause()  
     
    
  //    } else if(number==0){   
  //     stopPlay()  
     
  //     return
  //    } 
  //   else {   
  //     stopPlay()
  //     alert("This is not thala")  
      
      
  //   }  

    
  // }, [number])  

  // async function checker() {  
  //   console.log("checker called")
  //   try {
  //     if (number === 7) {
  //       await handlePlay();
  //       await togglePlayPause();
  //       alert("This is Thala");
  //     } else if (number) {
  //       await stopPlay();
  //       return;
  //     } else {
  //       await stopPlay();
  //       alert("This is not Thala");
  //     }
  //   } catch (error) {
  //     console.error("Error in checker:", error);
  //   }
  // }
   
  
  const lottieStyles = {
    position: 'absolute',
    top: 0,
    left: 0,  
    width:"100vw",  
    height:"100vh"
  }; 

  const handleShareButtonClick = () => {
    setDialogOpen(true);
  };

  const handleCloseButtonClick = () => {
    setDialogOpen(false);
  };
  return (
    <div className='flex flex-col gap-9 items-center justify-start w-[100vw]  p-9 relative'>
      <h1 className='text-center'>Is This Thala Or Not?</h1>  
    <audio ref={audioRef} src={thala} />
      <audio ref={audioRef2} src={cry}  loop/>


      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}  
        style={lottieStyles}  
        isStopped={isPaused}
        isPaused={isPaused}
      />






      <div className=" flex gap-5 input z-10">
        <input type="text" id="fname" name="fname" placeholder="Type your thing" value={inputValue}
          onChange={handleInputChange} className='w-[300px] rounded-[30px] h-[50px] text-[19px] pl-[20px]' />
        <button type="button" className='rounded-[50px] bg-white text-[#242424] hover:bg-[#242424]  hover:text-[#ffffff]' onClick={Check}>Search</button>
      </div>
      {loading ? (
      <div className="searcher">
        <img src={loader} alt="" className='h-[350px]' />
      </div>
    ) : ( <div className="card w-[400px] flex h-[500px] carder flex-col items-center justify-center rounded-[30px] relative">  



  {Thala?(  <video src={doni} alt="" className='w-full p-5 h-[50%]' autoPlay loop/>):
   (<video src={cat} alt="" className='w-full p-5 h-[50%]' autoPlay/>)}


    <div className="">

<h2 className='text-[40px] font-semibold '>Your Searched Term</h2>
<p className='text-center text-[25px]'>{textData}</p>

{ 
  Thala ? (
    <p className='text-[30px] font-semibold pt-3 text-center'>
      This is Thala
    </p>
  ) : (
    <p className='text-[30px] font-semibold pt-3 text-center'>
      This is not Thala
    </p>
  )
}  
</div>



</div>) }
     



    </div>
  )
}

export default App
