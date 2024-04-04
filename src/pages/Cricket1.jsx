import React from 'react'
import "../CSS/Cricket1.css";
import { useNavigate } from "react-router-dom";

export default function Cricket1() {
    const navigate = useNavigate();
    return (
    <div>
         <div class="divcrik">
     <div class="divcrik-2">
         <div class="divcrik-3">CRICKET</div>
         <div class="divcrik-4">
             <div class="divcrik-5">Morning Slot</div>
             <div class="divcrik-6">
                 <div class="divcrik-7">Saturday - Sunday</div>
                 <div class="divcrik-8">
                     08 : 00 am- 10 : 00 am
                     <br />
                     10 : 00 am - 12 : 00pm
                 </div>
             </div>
             <div class="divcrik-9">
                 <div class="divcrik-10">Coach - Moen Ali</div>
                 <a className='button1crik' onClick={()=>navigate("/Member")}>Join Now</a>
             </div>
         </div>
         <div class="divcrik-4">
             <div class="divcrik-5">Afternoon Slot</div>
             <div class="divcrik-6">
                 <div class="divcrik-7">Saturday - Sunday</div>
                 <div class="divcrik-8">
                     01 : 00 pm - 03 : 00 pm
                     <br />
                     03 : 00 am - 05 : 00 pm
                 </div>
             </div>
             <div class="divcrik-9">
                 <div class="divcrik-10">Coach - Rohit Sharma</div>
                 <a className='button1crik' onClick={()=>navigate("/Member")}>Join Now</a>
             </div>
         </div>
         <div class="divcrik-4">
             <div class="divcrik-5">Evening Slot</div>
             <div class="divcrik-6">
                 <div class="divcrik-7">Saturday - Sunday</div>
                 <div class="divcrik-8">
                     05 : 00 pm- 07 : 00 pm
                 </div>
             </div>
             <div class="divcrik-9">
                 <div class="divcrik-10">Coach - Virat Kholi</div>
                 <a className='button1crik' onClick={()=>navigate("/Member")}>Join Now</a>
             </div>
         </div>
         <div class="divcrik-4">
             <div class="divcrik-5">Night Slot</div>
             <div class="divcrik-6">
                 <div class="divcrik-7">Saturday - Sunday</div>
                 <div class="divcrik-8">
                     09 : 00AM- 11 : 00AM
                 </div>
             </div>
             <div class="divcrik-9">
                 <div class="divcrik-10">Coach - Hardik Pandiya</div>
                 <a className='button1crik' onClick={()=>navigate("/Member")}>Join Now</a>
             </div>
         </div>

     </div>
 </div>
    </div>
  )
}
