import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as YUP from 'yup';


const schema = YUP.object().shape({
    fullname: YUP.string().required('Please fill the name'),
    email: YUP.string().email().required('Please fill email'),
    age: YUP.number().min(0).max(30).required('Age is empty'),
    password: YUP.string().min(4).max(10).required(),
    confirmpassword:YUP.string().oneOf([YUP.ref('password'),null])
})



function App() {

const {register,handleSubmit, formState:{errors}}  = useForm({
   resolver : yupResolver(schema),
  
})

const formSubmit = (data)=>{
    console.log(data)
}


  return (
    <React.Fragment>
       <form onSubmit={handleSubmit(formSubmit)}>
            <label>
                FullName : <input type='text' name="fullname" {...register('fullname')}/>
            </label>
             <p>{errors.fullname?.message}</p>
            <div>
              <label>
                  Email : <input type='text' name="email" {...register('email')}/>
              </label>
              <p>{errors.email?.message}</p>
            </div>
            <div>
            <label>
                  Age : <input type='number' name="age" {...register('age')}/>
              </label>
              <p>{errors.age?.message}</p>
            </div>
            <div>
              <label>
                  Password : <input type='text' name="password" {...register('password')}/>
              </label>
              <p>{errors.password?.message}</p>
            </div>
            <div>
              <label>
                  ConfirmPassword : <input type='text' name="confirmpassword" {...register('confirmpassword')}/>
              </label>
              <p>{errors.confirmpassword && "Passowrd should match"}</p>
            </div>
            <button type='submit'>SignUP</button>
       </form>
    </React.Fragment>
  )
}

export default App