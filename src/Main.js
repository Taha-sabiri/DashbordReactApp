import React from 'react'
import './App.css';
import avatar from './assets/img/pexels-photo-2380794.jpeg'
import avatar2 from './assets/img/c3444e7bb7b175e74fe636834c616878.jpg'
import avatar3 from './assets/img/Face-Mapping-191d3a2073e146d981c1626b39e8a227.png'
import avatar4 from './assets/img/beautiful-face-young-woman-with-clean-fresh-skin-isolated-white_186202-7897.avif'
import { delay, motion, transform } from "framer-motion"




import {  PencilIcon, DocumentTextIcon,ClockIcon,CalendarIcon,ShareIcon,TrashIcon,BanknotesIcon,DocumentDuplicateIcon,BellIcon,MoonIcon, ChatBubbleLeftEllipsisIcon, ChevronDownIcon, Cog8ToothIcon, HeartIcon, MagnifyingGlassIcon, MapIcon, PaperClipIcon, PencilSquareIcon, PhotoIcon, PresentationChartBarIcon, TableCellsIcon } from '@heroicons/react/24/outline'
import iran from './assets/img/Flag-Iran.webp'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'پروژه اول',
      
      هزینه : 2322,
      زمان : 200,
      دریافتی : 3000,
    },
    {
      name: 'پروژه دوم',
      
      هزینه : 200,
      زمان : 12,
      دریافتی : 2000,

    },
   
  ];


const Main = ()=>{
    return(
        <div className='bg-gray-950'>
            <div className='grid grid-cols-5'>

                
                
              
             { /* right */}
                <div className='flex min-h-screen flex-col border-l border-white border-opacity-5 '>
                    <div className=' h-16 justify-center items-center flex border-b border-white border-opacity-5 font-black text-blue-600' id='logo'>
                        <motion.h1 
                        initial={{ opacity: 0, translateX:300  }}
                        animate={{ opacity: 1, translateX:0  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01]  }}
                        
                        >داشبورد مدیریت</motion.h1>
                    </div>
                    <div className='flex flex-row justify-start items-center p-5 border-b border-white border-opacity-5   '>
                        <motion.img
                        initial={{ opacity: 0, translateX:300  }}
                        animate={{ opacity: 1, translateX:0  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] , delay:0.2  }}

                        src={avatar} className='w-16 rounded-full ml-2'></motion.img>
                        <motion.div

                        initial={{ opacity: 0, translateX:300  }}
                        animate={{ opacity: 1, translateX:0  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:0.4  }}
                        
                        className='flex flex-col text-white text-right text-sm space-y-2 mr-2'>
                            <h1>رضا محمدی</h1>
                            <h1 className='font-extralight text-gray-400 text-xs'>کارشناس گرافیک</h1>
                        </motion.div>
                        <motion.div

                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:0.6  }}
                        
                        >
                            <PencilSquareIcon className='text-gray-400 w-5 mr-24 hover:scale-125 hover:!text-blue-600  duration-300  '/>
                        </motion.div>
                        
                    </div>
                    <div className='flex flex-col text-right p-5 w-auto border-b border-white border-opacity-5   '>
                        <motion.div 

                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:0.2  }}
                        
                        
                        
                        className='flex flex-row justify-between items-baseline'>
                             <h1 className='text-white pb-4 font-bold'>داشبورد</h1>
                             <ChevronDownIcon className='w-4 text-blue-600'/>
                        </motion.div>
                        

                        <motion.div
                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:0.4  }}
                         className='flex flex-row mb-4  items-center hover:!text-blue-600 text-white duration-300   '>
                            <ChatBubbleLeftEllipsisIcon className='text-blue-600  w-7 ml-3'/>
                            <h1 className=' text-sm'>پیام ها</h1>
                        </motion.div>

                       
                        <motion.div
                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:0.6  }}
                            className='flex flex-row mb-4  items-center hover:!text-blue-600 text-white duration-300 '>
                            <MapIcon className='text-blue-600 w-7 ml-3'/>
                            <h1 className=' text-sm'>نقشه ها</h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:0.6  }} 
                            className='flex flex-row mb-4  items-center hover:!text-blue-600 text-white duration-300 '>
                            <BanknotesIcon className='text-blue-600 w-7 ml-3'/>
                            <h1 className=' text-sm'>واحد مالی</h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:0.8  }} 
                            className='flex flex-row mb-4  items-center hover:!text-blue-600 text-white duration-300  '>
                            <TableCellsIcon className='text-blue-600 w-7 ml-3'/>
                            <h1 className=' text-sm '>جداول</h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:1  }}className='flex flex-row mb-4  items-center hover:!text-blue-600 text-white duration-300  '>
                            <PhotoIcon className='text-blue-600 w-7 ml-3 '/>
                            <h1 className=' text-sm'>گالری تصاویر</h1>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:1.2  }} className='flex flex-row mb-4 items-center hover:!text-blue-600 text-white duration-300 '>
                            <Cog8ToothIcon className='text-blue-600 w-7 ml-3'/>
                            <h1 className=' text-sm'>تنظیمات</h1>
                        </motion.div>


                    </div>

                    <div className='flex flex-col text-right p-5 w-auto   '>
                    <motion.div
                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:0.2  }} className='flex flex-row justify-between items-baseline'>
                             <h1 className='text-white pb-4 font-bold'>پروژه ها</h1>
                             <ChevronDownIcon className='w-4 text-blue-600'/>
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:0.4  }} 
                        
                        
                        className='text-white text-sm mb-4 hover:!text-blue-600 text-white duration-300 '>صندوق پروژه ها</motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:0.6  }}  className='hover:!text-blue-600 text-white duration-300  text-sm mb-4'>وضعیت پروژه ها  </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:0.8  }}  className='hover:!text-blue-600 text-white duration-300  text-sm mb-4'>پروژه های انجام شذه  </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, translateX:300  }}
                            animate={{ opacity: 1, translateX:0  } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01], delay:1  }}  className='hover:!text-blue-600 text-white duration-300  text-sm mb-4 '>کارفرمایان</motion.h1>

                        


                    </div>
                </div>


            { /* center */}
                <div className=' col-span-3 min-h-screen overflow-scroll'>
                <div className=' h-16 justify-start items-center flex border-b border-white border-opacity-5 font-black text-blue-600 p-5 ' id='logo'>
                
                <motion.label
                initial={{ opacity: 0, translateX:300  }}
                        animate={{ opacity: 1, translateX:0  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.2  }}
                
                
                class="relative text-gray-400  block w-2/5 text-sm font-medium ">

                    <MagnifyingGlassIcon className='pointer-events-none w-5 absolute top-1/2 transform -translate-y-1/2 right-3 '/> 
                    <input type="email" name="email" id="email" placeholder="جستجو" class="form-input  py-2 px-4  bg-gray-900 placeholder-white placeholder-opacity-60 text-white text-sm  appearance-none w-full block pr-10 border-none rounded-lg"/>
                </motion.label>
                </div>
                <div className='grid grid-cols-3 gap-4 p-5'>
                    <motion.div
                    initial={{ opacity: 0, translateX:300  }}
                    animate={{ opacity: 1, translateX:0  } }
                    transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] , delay:0.2  }}
                    
                    
                    className='h-20 rounded-lg bg-gray-900 flex flex-row items-center p-5 hover:bg-blue-600 duration-200 hover:shadow-2xl hover:shadow-blue-800' id='card'>
                        <PresentationChartBarIcon className='text-blue-700 w-12 '/>
                        <div className='flex flex-col text-right mr-5 '>
                            <h1 className='text-2xl text-white'>۷۱</h1>
                            <h1 className='text-white text-sm font-light'>بازدید جدید</h1>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, translateX:300  }}
                    animate={{ opacity: 1, translateX:0  } }
                    transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.4  }} className=' h-20 rounded-lg bg-gray-900 flex flex-row items-center p-5 hover:bg-blue-600 duration-200 hover:shadow-2xl hover:shadow-blue-800  ' id='card'>
                        <HeartIcon className='text-blue-700 w-12 '/>
                        <div className='flex flex-col text-right mr-5 '>
                            <h1 className='text-2xl text-white'>۵۶%</h1>
                            <h1 className='text-white text-sm font-light'>رضایت کارفرمایان</h1>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, translateX:300  }}
                    animate={{ opacity: 1, translateX:0  } }
                    transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] , delay:0.6 }} className=' h-20 rounded-lg bg-gray-900 flex flex-row items-center p-5 hover:bg-blue-600 duration-200 hover:shadow-2xl hover:shadow-blue-800' id='card'>
                        <PaperClipIcon className='text-blue-700 w-12 '/>
                        <div className='flex flex-col text-right mr-5 '>
                            <h1 className='text-2xl text-white'>۳۲</h1>
                            <h1 className='text-white text-sm font-light'>پروژه ها</h1>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, translateY:-300  }}
                    animate={{ opacity: 1, translateY:0  } }
                    transition={{ duration: 0.9 , ease: [0, 0.71, 0.2, 1.01] , delay:0.6 }}className='w-full h-3/6 px-5 pb-5'>
                    <div className='w-full h-full rounded-xl bg-gray-900 p-5'>
                        <div className='flex flex-row justify-between'>
                            <h1 className='text-white'>گزارش کار</h1>
                            
                            <div className='flex '>
                                <div className='flex-col flex justify-center items-center  ml-2  '>
                                    <div className='flex flex-row  bg-gray-950  rounded-lg p-2 w-44  justify-between '>
                                        <div className='flex flex-row '>
                                            <ClockIcon className='text-white w-4 ml-2'/>
                                            <h1 className='text-white text-xs'>زمان بندی پروژه</h1>
                                        </div>
                                        

                                        <ChevronDownIcon className='text-white w-4' />
                                    </div>
                                    
                                    

                                </div>

                                <div className='flex-col flex justify-center items-center   '>
                                    <div className='flex flex-row  bg-gray-950  rounded-lg p-2 w-32  justify-between '>
                                        <div className='flex flex-row'>
                                            <CalendarIcon className='text-white w-4 ml-2'/>
                                            <h1 className='text-white text-xs'>هفته</h1>
                                        </div>
                                        

                                        <ChevronDownIcon className='text-white w-4' />
                                    </div>
                                    
                                </div>
                            </div>
                            
    
                        </div>
                        <div className='w-full h-full'>
                        <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="هزینه" stackId="2" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="زمان" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="دریافتی" stackId="2" stroke="#1624B6" fill="#1624B6" />
          
        </AreaChart>
      </ResponsiveContainer>

                        </div>
                        

                    </div>

                </motion.div>
                
                <motion.h1
                    initial={{ opacity: 0, translateX:300  }}
                    animate={{ opacity: 1, translateX:0  } }
                    transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] , delay:0.6 }}       

                className='text-white text-right pr-5'>فایل های اخیر</motion.h1>
                <div className='p-5 w-full h-auto  pb-5'>
                    <div className='border border-white border-opacity-5 h-full rounded-lg'>
                    <table class="table-fixed w-full  text-white text-right">
                    <motion.thead
                                        initial={{ opacity: 0, translateY:-100  }}
                                        animate={{ opacity: 1, translateY:0  } }
                                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] , delay:0.6 }}
                                        
                    
                    >

                      <tr className='border-b border-white border-opacity-5 ' >
                        <th className='font-medium p-3'>عنوان</th>
                        <th className='font-medium p-3'>دسته بندی</th>
                        <th className='font-medium p-3'>توضیحات</th>
                        <th className='font-medium p-3'>کاربران</th>
                      </tr>
                    </motion.thead>
                    <tbody>
                      < motion.tr className='hover:bg-blue-600 duration-300'
                       initial={{ opacity: 0, translateY:-100  }}
                       animate={{ opacity: 1, translateY:0  } }
                       transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] , delay:0.8 }}
                      
                      
                      >
                        <td className='font-extralight p-3'> 
                        <div className='flex'>
                                <DocumentTextIcon className='w-5 ml-2'/>
                                 سلامتی      
                            
                            </div>
                            </td>
                        <td className='font-extralight p-3'>سفارشات</td>
                        <td className='font-extralight p-3'>سایت شخصی</td>
                        <td className='font-extralight p-3'>
                            <div className='flex flex-row -space-x-4 '>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover -ml-4" src={avatar} alt=""/>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover" src={avatar} alt=""/>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover" src={avatar} alt=""/>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover" src={avatar} alt=""/>

                            </div>
                        </td>
                      </motion.tr>
                      < motion.tr  className='hover:bg-blue-600 duration-300'
                       initial={{ opacity: 0, translateY:-100  }}
                       animate={{ opacity: 1, translateY:0  } }
                       transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] , delay:1 }}>
                        <td className='font-extralight p-3'>
                             <div className='flex'>
                                <DocumentTextIcon className='w-5 ml-2'/>
                                 سایت اسنپ      
                            
                            </div>
                            </td>
                        <td className='font-extralight p-3'>سایت</td>
                        <td className='font-extralight p-3'>سایت پزشکی</td>
                        <td className='font-extralight p-3'>
                            <div className='flex flex-row -space-x-4 '>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover -ml-4" src={avatar} alt=""/>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover" src={avatar2} alt=""/>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover" src={avatar3} alt=""/>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover" src={avatar4} alt=""/>

                            </div>
                        </td>                     
                        </motion.tr>
                        < motion.tr className='hover:bg-blue-600 duration-300'
                       initial={{ opacity: 0, translateY:-100  }}
                       animate={{ opacity: 1, translateY:0  } }
                       transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] , delay:1.2 }}>
                        <td className='font-extralight p-3'>
                            <div className='flex'>
                                <DocumentTextIcon className='w-5 ml-2'/>
                                 لوگوتایپ
                            
                            </div>
                            </td>
                        <td className='font-extralight p-3'>سایت</td>
                        <td className='font-extralight p-3'>لوگو تایپ پدر خوب</td>
                        <td className='font-extralight p-3'>
                            <div className='flex flex-row -space-x-4 '>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover -ml-4" src={avatar} alt=""/>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover" src={avatar2} alt=""/>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover" src={avatar3} alt=""/>
                            <img class="w-8 h-8 border-2 border-gray-950 rounded-full  object-cover" src={avatar4} alt=""/>

                            </div>
                        </td>                     
                        </motion.tr>
                     
                      
                    </tbody>
                    </table>
                            

                    </div>


                </div>

                </div>

            { /* left */}
                <div className='flex min-h-screen flex-col border-r border-white border-opacity-5'>
                    <div className=' h-16 justify-end items-baseline flex border-b border-white border-opacity-5 font-black text-white p-5 ' >
                        <motion.div

                        initial={{ opacity: 0, translateX:300  }}
                        animate={{ opacity: 1, translateX:0  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.2  }} 
                        
                        
                        className='flex-col -space-y-4 flex hover:scale-125 hover:text-yellow-500  '>
                            <BellIcon className='w-5'/>
                            <div className='ml-4 w-2 h-2 rounded-full bg-red-800 z-40 '>
                                <h1 className='text-xs z-40'></h1>
                            </div>
                            
                        </motion.div>
                        
                                <motion.img
                                    initial={{ opacity: 0, translateX:300  }}
                                    animate={{ opacity: 1, translateX:0  } }
                                    transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.4  }} 
                                
                                
                                src={iran} className='w-5 h-5 mr-1  object-cover rounded-full hover:scale-125 duration-200'></motion.img>

                                <motion.div
                                initial={{ opacity: 0, translateX:300  }}
                                animate={{ opacity: 1, translateX:0  } }
                                transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.6  }} >
                                    <MoonIcon className='w-5 mr-2 text-white hover:scale-125 hover:text-purple-500 duration-200'/>

                                </motion.div>
                        
                    </div>
                    <div className=' h-16 justify-around  items-baseline flex border-b border-white border-opacity-5 font-medium text-white p-5'>
                        <motion.h1

                            initial={{ opacity: 0, scale:0 }}
                            animate={{ opacity: 1,  scale:1 } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.2  }} className='text-blue-600 ' >
                        
                            جزییات
                        </motion.h1>
                        <motion.h1

                            initial={{ opacity: 0, scale:0 }}
                            animate={{ opacity: 1,  scale:1 } }
                            transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.4 }} className='text-white hover:textb ' >
                        
                            مدیریت فایل
                        </motion.h1>
                    </div>
                    <div className='flex flex-col p-5 border-b border-white border-opacity-5 '>
                        <motion.div

                        initial={{ opacity: 0, translateX:300  }}
                        animate={{ opacity: 1, translateX:0  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.2  }}  className='h-16 flex flex-row  justify-between p-2 items-center rounded-lg border border-white border-opacity-5 mb-3 hover:shadow-2xl hover:shadow-red-600 hover:duration-300'>
                            <div className='flex '>
                            <div className='bg-red-400 aspect-square w-9 rounded-lg p-1 bg-opacity-75 '>
                                <PaperClipIcon className='text-red-600' />
                             </div>
                             <div className='text-right mr-2'>
                                    <h1 className='text-gray-400 text-sm '>داکیومنت پروژه</h1>
                                    <h1 className='text-white text-xs'> ۱.۵۴ فایل</h1>
                            </div>

                            </div>
                            
                            <h1 className='text-white text-sm'> ۱۱<span>GB</span> </h1>
                        </motion.div>

                        <motion.div

                        initial={{ opacity: 0, translateX:300  }}
                        animate={{ opacity: 1, translateX:0  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.4  }}  className='h-16 flex flex-row  justify-between p-2 items-center rounded-lg border border-white border-opacity-5 mb-3 hover:shadow-2xl hover:shadow-green-600 hover:duration-300'>
                            <div className='flex  '>
                            <div className='bg-green-400 aspect-square w-9 rounded-lg p-1 bg-opacity-10  '>
                                <DocumentDuplicateIcon className='text-green-600' />
                             </div>
                             <div className='text-right mr-2'>
                                    <h1 className='text-gray-400 text-sm '>فایل های جدید</h1>
                                    <h1 className='text-white text-xs'> ۲۰۰ فایل</h1>
                            </div>

                            </div>
                            
                            <h1 className='text-white text-sm'> ۲<span>GB</span> </h1>
                        </motion.div>
                        <motion.div

                        initial={{ opacity: 0, translateX:300  }}
                        animate={{ opacity: 1, translateX:0  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.6  }} className='h-16 flex flex-row  justify-between p-2 items-center rounded-lg border border-white border-opacity-5 mb-3 hover:shadow-2xl hover:shadow-yellow-600 hover:duration-300'>
                            <div className='flex '>
                            <div className='bg-yellow-400 aspect-square w-9 rounded-lg p-1 bg-opacity-10 '>
                                <PhotoIcon className='text-yellow-600' />
                             </div>
                             <div className='text-right mr-2'>
                                    <h1 className='text-gray-400 text-sm '>گالری تصاویر</h1>
                                    <h1 className='text-white text-xs'> ۳ فایل</h1>
                            </div>

                            </div>
                            
                            <h1 className='text-white text-sm'> ۱<span>GB</span> </h1>
                        </motion.div>


                    </div>

                    <div className='flex flex-col text-right p-5 w-auto border-b border-white border-opacity-5 h-3/5    '>
                    <div className='flex flex-row justify-between items-baseline'>
                         <motion.h1
                        initial={{ opacity: 0, translateX:300  }}
                        animate={{ opacity: 1, translateX:0  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.2  }} 
                         
                         
                         className='text-white pb-4 font-bold'>فایل های اشتراگ گذاشته شده</motion.h1>
                             
                     </div>
                    
                    

                     <motion.div

                        initial={{ opacity: 0, scale:0 }}
                        animate={{ opacity: 1, scale:1  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.4  }} className='flex flex-row justify-start items-center p-2     '>
                        <img src={avatar} className='w-16 object-cover rounded-full ml-2 hover:border-2 hover:border-blue-600 duration-200 hover:shadow-lg hover:shadow-blue-500'></img>
                        <div className='flex flex-col text-white text-right text-sm space-y-2 mr-2'>
                            <h1>رضا محمدی</h1>
                            <h1 className='font-extralight text-gray-400 text-xs'>کارشناس گرافیک</h1>
                        </div>
                    </motion.div>
                     <motion.div

                        initial={{ opacity: 0, scale:0 }}
                        animate={{ opacity: 1, scale:1  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.6  }}  className='flex flex-row justify-start items-center p-2  border-white border-opacity-5   '>
                        <img src={avatar2} className='w-16 h-16 object-cover rounded-full ml-2 hover:border-2 hover:border-blue-600 duration-200 hover:shadow-lg hover:shadow-blue-500'></img>
                        <div className='flex flex-col text-white text-right text-sm space-y-2 mr-2'>
                            <h1>رضا محمدی</h1>
                            <h1 className='font-extralight text-gray-400 text-xs'>کارشناس گرافیک</h1>
                        </div>
                    </motion.div>
                     <motion.div

                        initial={{ opacity: 0, scale:0 }}
                        animate={{ opacity: 1, scale:1  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:0.8  }}  className='flex flex-row justify-start items-center p-2  border-white border-opacity-5   '>
                        <img src={avatar3} className='w-16 h-16 object-cover rounded-full ml-2 hover:border-2 hover:border-blue-600 duration-200 hover:shadow-lg hover:shadow-blue-500'></img>
                        <div className='flex flex-col text-white text-right text-sm space-y-2 mr-2'>
                            <h1>رضا محمدی</h1>
                            <h1 className='font-extralight text-gray-400 text-xs'>کارشناس گرافیک</h1>
                        </div>
                    </motion.div>
                     <motion.div

                        initial={{ opacity: 0, scale:0 }}
                        animate={{ opacity: 1, scale:1  } }
                        transition={{ duration: 0.5 , ease: [0, 0.71, 0.2, 1.01] ,delay:1  }}  className='flex flex-row justify-start items-center p-2  border-white border-opacity-5   '>
                        <img src={avatar4} className='w-16 h-16 object-cover rounded-full ml-2 hover:border-4 hover:border-blue-600 duration-200 hover:shadow-lg hover:shadow-blue-500'></img>
                        <div className='flex flex-col text-white text-right text-sm space-y-2 mr-2'>
                            <h1>رضا محمدی</h1>
                            <h1 className='font-extralight text-gray-400 text-xs'>کارشناس گرافیک</h1>
                        </div>
                    </motion.div>
                        

                    
                    </div>

                    <div className='flex flex-row  h-1/5 justify-evenly items-center '>

                        <div className='flex flex-col justify-center items-center'>
                            <div className='bg-slate-800 w-12 p-2 rounded-lg '>
                                <TrashIcon className='text-gray-300' />
                            </div>
                            <h1 className='text-gray-300 mt-2 text-xs'>حذف</h1>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <div className='bg-slate-800 w-12 p-2 rounded-lg '>
                                <PencilIcon className='text-gray-300' />
                            </div>
                            <h1 className='text-gray-300 mt-2 text-xs'> ویرایش</h1>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <div className='bg-slate-800 w-12 p-2 rounded-lg '>
                                <ShareIcon className='text-gray-300' />
                            </div>
                            <h1 className='text-gray-300 mt-2 text-xs'>اشتراگ گذاری</h1>
                        </div>
                       
                        
                    </div>
                </div>
                
            </div>

        </div>
    )

}


export default Main;