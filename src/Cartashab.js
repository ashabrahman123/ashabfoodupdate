import React, { useEffect, useState } from 'react';
import './CartItem.css';
import imG from './Food.jpg';
import {AiOutlineShoppingCart} from "react-icons/ai"
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
const Cart =()=>
{
    
    const [inpnumfri, setinpnumfri] = useState();
    const [inpnumdaleem, setinpnumdaleem] = useState();
    const [inpnumbir, setinpnumbir] = useState();
    const [inpnumsur, setinpnumsur] = useState();

    
    const [inpnumfribtn, setinpnumfribtn] = useState();
    const [inpnumdaleembtn, setinpnumdaleembtn] = useState();
    const [inpnumbirbtn, setinpnumbirbtn] = useState();
    const [inpnumsurbtn, setinpnumsurbtn] = useState();


    const [inpnumfriname, setinpnumfriname] = useState("Egg Fired Rice");
    const [inpnumdaleemname, setinpnumdaleemname] = useState("Daleem");
    const [inpnumbirname, setinpnumbirname] = useState("Biryani");
    const [inpnumsurname, setinpnumsurname] = useState("Surprise");



    const [inpnumfrinamebtn, setinpnumfrinamebtn] = useState();
    const [inpnumdaleemnamebtn, setinpnumdaleemnamebtn] = useState()
    const [inpnumbirnamebtn, setinpnumbirnamebtn] = useState();
    const [inpnumsurnamebtn, setinpnumsurnamebtn] = useState();


    const [birprice, setbirprice] = useState(20);
    const [friprice, setfriprice] = useState(30);
    const [surprice, setsurprice] = useState(10);
    const [daleemprice, setdaleemprice] = useState(15);

    
    const [birpricebtn, setbirpricebtn] = useState(0)
    const [fripricebtn, setfripricebtn] = useState(0)
    const [surpricebtn, setsurpricebtn] = useState(0)
    const [daleempricebtn, setdaleempricebtn] = useState(0)


    const [total, settotal] =useState(0);
    const [showcart,setshowcart] = useState(false);
    const[numorder, setorder] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    const changeinpfri =(e)=>
   {
      setinpnumfri(e.target.value);
   }
   const changeinpbir =(e)=>
   {
      setinpnumbir(e.target.value);
   }
   const changeinpdaleem =(e)=>
   {
      setinpnumdaleem(e.target.value);
   }
   const changeinpsur =(e)=>
   {
      setinpnumsur(e.target.value);
   }

 

   const clicfri=()=>
   {
    
      setinpnumfribtn(inpnumfri);
      setinpnumfrinamebtn(inpnumfriname);
      setfripricebtn((+inpnumfri)*(friprice));
      setorder(numorder+1);
      setIsActive(true);
   
   }

   const clicbir=()=>
   {
    setinpnumbirbtn(inpnumbir);
    setinpnumbirnamebtn(inpnumbirname);
    setbirpricebtn((+inpnumbir)*(birprice));
    setorder(numorder+1)
    setIsActive2(true)

   }

   const clicsur=()=>
   {
    setinpnumsurbtn(inpnumsur);
    setinpnumsurnamebtn(inpnumsurname);
    setsurpricebtn((+inpnumsur)*(surprice));
    setorder(numorder+1)
    setIsActive3(true)
   }

   const clicdaleem=()=>
   {
    setinpnumdaleembtn(inpnumdaleem);
    setinpnumdaleemnamebtn(inpnumdaleemname);
    setdaleempricebtn((+inpnumdaleem)*(daleemprice));
    setorder(numorder+1)
    setIsActive1(true)

   }

   const gettotal =()=>
   {
    settotal( birpricebtn  + fripricebtn  + surpricebtn + daleempricebtn);
   }


   const CART=()=>
   {
      setshowcart(true);
   }

   const CARTHide=()=>
   {
      setshowcart(false);
   }



   const obj =[{
      id:1,
      quantity:inpnumbir,
      Price:birprice,
      Nam:inpnumbirnamebtn,
   },

   {
      id:2,
      quantity:inpnumfri,
      Price:friprice,
      Nam:inpnumfrinamebtn,
   },

   {
      id:3,
      quantity:inpnumdaleem,
      Price:daleemprice,
      Nam:inpnumdaleemnamebtn,
  
   },
   {
      id:4,
      quantity :inpnumsur,
      Price:surprice,
      Nam:inpnumsurnamebtn,
      btn: <button onClick={CARTHide}>Close</button>


   },

];

//   const [mealsarray,setmealsarray ]=useState([]);
//   const fetchdata = async ()=>
//   {
//       const respone = await fetch("https://foodcart-481c8-default-rtdb.firebaseio.com/.meals.json")
//       const reponsejson = await respone.json();
//       const loadedmeals =[];

//       for(const key in reponsejson)
//       {
//          loadedmeals.push({
//             id:key,
//             Nam:reponsejson[key].Nam,
//             Price: reponsejson[key].Price,
//             quantity:reponsejson[key].quantity
//          })
//       }

//       setmealsarray(loadedmeals);
//   }

//   useEffect(()=>
//   {
//        fetchdata();
//   },[])


    return(
        <div className='mainashab'>
          <div className='mainashab2'>
         {showcart && <div className='back'>
            {
               
            obj.filter((ashab)=>ashab.Nam?.length > 0 && ashab.quantity >= 1).map((ite)=>
            {
                 return(
                  <div className='error'>
                    
                     <h3 className='mapname'>{ite.Nam}</h3>
                     <div className='mapchild1'>
                     <h2 className='mapprice'>${ite.Price}</h2>
                     <h2 className='mapquantity'>x{ite.quantity}</h2>
                     <button onClick={CARTHide}>Close</button>
                 
                     </div>
                     <hr></hr>
                     </div>
                 )
            })
          }

             <div className='TOTAL'>
             <button onClick={gettotal}>TOTAL</button>
             <button onClick={CARTHide}>Close</button>
             <h2>TOTAL : ${total}</h2>
             </div>
            </div>}
           
            

            <div className='heading'>
               <h1>ReactMeals </h1>
               <button onClick={CART}><AiOutlineShoppingCart/> </button>
            </div>

            <div className='image'>
               <img src={imG} />
            </div>

            <div className='FoodPara'>
               <h1>We Provide Delicious ,<br></br> and Fresh Food !!!</h1>
            </div>

         <div className='mainprods'>

          <div className='prod1'>

          <div className='prod1Child1'>
            <h2>{inpnumfriname}</h2>
            <p>NOT Tota Chwal</p> 
            <h2 className='pricecolor'>${friprice}</h2>
            </div>

            <div className='prod1Child2'>
            {/* <label>Amount</label> */}
            <input className='inp1' onChange={changeinpfri} defaultValue={0} type="number"  min={0} max={5} step={1} />
            <br></br>
            <br></br>
            <button    style={{
             backgroundColor: isActive ? 'red' : '#9b1d43',}} 
             className='btn1' onClick={clicfri}>ADD</button>
            </div>

          </div>
          <hr></hr>

          <div className='prod2'>

            <div className='prod2Child1'>
            <h2>{inpnumdaleemname}</h2>
            <p>Mixture of Daals </p>
            <h2 className='pricecolor'>${daleemprice}</h2>
            </div>

            <div className='prod2Child2'>
         
            <input  className='inp2' onChange={changeinpdaleem} defaultValue={0}  type="number"  min={0} max={5} step={1} />
            <br></br>
            <br></br>
            <button className='btn2' style={{
             backgroundColor: isActive1 ? 'red' : '#9b1d43',}}   onClick={clicdaleem}>ADD</button>
            </div>

          </div>
          <hr></hr>

          <div className='prod3'>

            <div className='prod3Child1'>
            <h2>{inpnumbirname}</h2>
            <p>Chicken Rice</p>
            <h2 className='pricecolor'>${birprice}</h2>
            </div>

            <div className='prod3Child2'>
            {/* <label>Amount</label> */}
            <input  className='inp3' onChange={changeinpbir} defaultValue={0}  type="number"  min={0} max={5} step={1} />
            <br></br>
            <br></br>
            <button className='btn3' style={{
             backgroundColor: isActive2 ? 'red' : '#9b1d43',}}   onClick={clicbir}>ADD</button>
            </div>

          </div>

          <hr></hr>
          <div className='prod4'>

            <div className='prod4Child1'>
            <h2>{inpnumsurname}</h2>
            <p>Something Specil</p>
            <h2 className='pricecolor'>${surprice}</h2>
            </div>

            <div className='prod4Child2'>
            <input  className='inp4' onChange={changeinpsur} defaultValue={0}  type="number"  min={0} max={5} step={1} />
            <br></br>
            <br></br>
            <button className='btn4' style={{
             backgroundColor: isActive3 ? 'red' : '#9b1d43',}}  onClick={clicsur}>ADD</button>
            </div>

          </div>
          <hr></hr>
          </div>
          </div>
        </div>
    )
}

export default Cart;