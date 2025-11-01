import React, { useState } from 'react'
// import { LuGraduationCap } from 'react-icons/lu'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import logo1 from '../../assets/logos/logo-1.png'
import logo2 from '../../assets/logos/logo-2.png'
import { TbMarquee } from 'react-icons/tb'
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null)
    const location = useLocation()
    const handleShowDropdown = (menu) => {
        setActiveMenu(menu)
    }
    const handleHideDropdown = () => {
        setActiveMenu(null)
    }
    console.log(location.pathname)

    const menus = [
      
        { name: 'হোম', path: '/' },
        {
            name: 'আমাদের কথা',
            routes: ['/institute-details', '/institute-info'],
            subMenu: [
                { name: 'প্রতিষ্ঠানের ইতিহাস ', path: '/institute-info' },
                { name: 'গভর্নিং বডি', path: '#' },               
            ],
            dropdownWidth: "160px"
        },
        {
            name: 'শিক্ষকদের তথ্য',
            subMenu: [
                { name: 'প্রধান শিক্ষক ', path: '/details' },
                { name: 'প্রাক্তন প্রধান শিক্ষকগণ', path: '#' },
                { name: 'শিক্ষকগণ', path: '#' },
            ],
            dropdownWidth: "190px"
        },
        { name: 'স্টাফদের তথ্য', path: '#' },
        {
            name: 'শিক্ষার্থীদের তথ্য',
            routes: ['/student-info', '/student-summary'],
            subMenu: [
                { name: 'শিক্ষার্থীদের তথ্য', path: '/student-info' },
                { name: 'শিক্ষার্থীদের সারসংক্ষেপ', path: '/student-summary' },
                { name: 'কুইজ', path: '/student-summary' },
                { name: 'বহুনির্বাচনী পরীক্ষা', path: '/details' },
                { name: 'বহুনির্বাচনী পরীক্ষার ফলাফল', path: '/details' },
                { name: 'রচনামূলক পরীক্ষা', path: '/details' },               
                { name: 'রচনামূলক পরীক্ষার ফলাফল', path: '/details' },
            ],
            dropdownWidth: "225px"
        },
        {
            name: 'একাডেমিক তথ্য',
            subMenu: [
                { name: 'পাঠ্যক্রম', path: '#' },
                { name: 'ক্লাস রুটিন', path: '#' },
                { name: 'পরীক্ষার রুটিন', path: '#' },
                { name: 'একাডেমিক সাবজেক্ট', path: '#' },
            ],
            dropdownWidth: "180px"
        },
        {
            name: 'প্রকাশনা ',
            subMenu: [
                { name: 'ম্যাগাজিন', path: '#' },
                { name: 'অ্যালবাম', path: '#' },
            ],
            dropdownWidth: "150px"
        },
        {
            name: 'গ্যালারি',
            subMenu: [
                { name: 'ফটো গ্যালারি', path: '#' },
                { name: 'ভিডিও গ্যালারি', path: '#' },
            ],
            dropdownWidth: "150px"
        },
        { name: 'সুবর্ণজয়ন্তী কর্ণার', path: '#' },
        { name: 'ভর্তি ফর্ম', path: '#' },
        { name: 'পেমেন্ট', path: '#' },

        { 
            name: 'লগইন', 
            subMenu: [
                { name: 'শিক্ষক লগইন', path: '#' },
                { name: 'শিক্ষার্থী লগইন', path: '#' },
            ],     
        },

    ]

    return (
        <div className="container mx-auto bg-gray-120 px-28">

            <div className='bg-secondary h-[120px] px-5 flex justify-between items-center border-b-[0.5px] border-gray-500'>
                <div className='bg-white h-[100px]'>
                    <img src={logo1} alt="logo1" className='h-[100px] w-[100px]' />
                </div>

                <div className='flex flex-col gap-3 items-center'>
                    <h2 className='text-white text-3xl font-semibold'>Our Educational Institute</h2>
                    <h2 className='text-white text-2xl font-semibold'>আমাদের শিক্ষা প্রতিষ্ঠান</h2>
                </div>
                <img src={logo2} alt='logo2' className='h-[100px] w-[100px]' />
            </div>

            <div className='border-b-[1px] border-b-slate-500 h-12 bg-primary '>

                <div className='flex items-center h-full'>

                    <div className='h-full'>
                        <ul className='flex items-center h-full'>
                            {
                                menus.map((menu, index) => (
                                    menu.subMenu ? (
                                        <li key={index} className='h-full flex items-center border-r-[0.5px] border-gray-500'>
                                            <div className='relative h-full'>
                                                <span onMouseEnter={() => handleShowDropdown(menu.name)} onMouseLeave={handleHideDropdown} className={`px-2 flex gap-1 items-center hover:cursor-pointer h-full hover:bg-secondary ${menu.routes?.includes(location.pathname) ? 'bg-secondary' : ''}`}>
                                                    <span className='text-white font-normal'>{menu.name}</span>
                                                    <MdKeyboardArrowDown color='white' size={22} className='font-bold mt-1' />
                                                    <ul style={{ width: menu.dropdownWidth }} className={`absolute left-0 top-[47px] min-w-[150px] border-[0.5px] border-gray-500 bg-primary shadow-xl transition-all duration-500 ease-in-out transform z-50 ${activeMenu === menu.name ? 'opacity-100 visible translat-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                                        {
                                                            menu.subMenu.map((submenu, id) => (
                                                                <li key={id} className="border-b-[0.5px] border-gray-500">
                                                                    <Link
                                                                        to={submenu.path}
                                                                        className="block w-full px-3 py-2 text-white font-  hover:bg-secondary transition-colors duration-200">
                                                                        {submenu.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                    </ul>
                                                </span>

                                            </div>

                                        </li>
                                    ) : (<li key={index} className={`h-full px-2 border-r-[0.5px] border-gray-500 flex items-center hover:bg-secondary ${location.pathname === menu.path ? 'bg-secondary' : ''}`}>
                                        <Link to={menu.path} className='text-white font-normal'>
                                            {menu.name}</Link>
                                    </li>)

                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div >

            <div className='bg-primary h-[35px] flex'>
                <span className='bg-gray-700 w-[80px] h-[35px] text-white flex items-center justify-center'>News</span>
                <marquee behavior="" direction="" className="text-white mt-1"> আগামী ২৫ নভেম্বর ২০২৫ থেকে বিদ্যালয়ের বার্ষিক পরীক্ষা শুরু হবে।  রুটিন ওয়েবসাইটে প্রকাশ করা হয়েছে। ২০২৬ শিক্ষাবর্ষের ভর্তি কার্যক্রম আগামী ১ ডিসেম্বর ২০২৫ থেকে শুরু হবে   |   ২০২৫ সালের দ্বিতীয় টার্মের ফলাফল আগামী ২০ নভেম্বর বিদ্যালয়ের ওয়েবসাইটে প্রকাশ করা হবে। </marquee>
            </div>

               
            
        </div>
    )
}

export default Navbar








// import React, { useState } from 'react'
// // import { LuGraduationCap } from 'react-icons/lu'
// import { MdKeyboardArrowDown } from 'react-icons/md'
// import { Link, useLocation } from 'react-router-dom'
// import logo1 from '../../assets/logos/logo-1.png'
// import logo2 from '../../assets/logos/logo-2.png'
// import { TbMarquee } from 'react-icons/tb'
// const Navbar = () => {
//     const [activeMenu, setActiveMenu] = useState(null)
//     const location = useLocation()
//     const handleShowDropdown = (menu) => {
//         setActiveMenu(menu)
//     }
//     const handleHideDropdown = () => {
//         setActiveMenu(null)
//     }
//     console.log(location.pathname)

//     const menus = [
      
//         { name: 'হোম', path: '/' },
//         {
//             name: 'আমাদের কথা',
//             routes: ['/institute-details', '/institute-info'],
//             subMenu: [
//                 { name: 'প্রতিষ্ঠানের ইতিহাস ', path: '/institute-info' },
//                 { name: 'গভর্নিং বডি', path: '#' },               
//             ],
//             dropdownWidth: "160px"
//         },
//         {
//             name: 'শিক্ষকদের তথ্য',
//             subMenu: [
//                 { name: 'প্রধান শিক্ষক ', path: '/details' },
//                 { name: 'প্রাক্তন প্রধান শিক্ষকগণ', path: '#' },
//                 { name: 'শিক্ষকগণ', path: '#' },
//             ],
//             dropdownWidth: "190px"
//         },
//         { name: 'স্টাফদের তথ্য', path: '#' },
//         {
//             name: 'শিক্ষার্থীদের তথ্য',
//             routes: ['/student-info', '/student-summary'],
//             subMenu: [
//                 { name: 'শিক্ষার্থীদের তথ্য', path: '/student-info' },
//                 { name: 'শিক্ষার্থীদের সারসংক্ষেপ', path: '/student-summary' },
//             ],
//             dropdownWidth: "190px"
//         },
//         {
//             name: 'একাডেমিক তথ্য',
//             subMenu: [
//                 { name: 'পাঠ্যক্রম', path: '#' },
//                 { name: 'ক্লাস রুটিন', path: '#' },
//                 { name: 'পরীক্ষার রুটিন', path: '#' },
//                 { name: 'একাডেমিক সাবজেক্ট', path: '#' },
//             ],
//             dropdownWidth: "180px"
//         },
//         {
//             name: 'প্রকাশনা ',
//             subMenu: [
//                 { name: 'ম্যাগাজিন', path: '#' },
//                 { name: 'অ্যালবাম', path: '#' },
//             ],
//             dropdownWidth: "150px"
//         },
//         {
//             name: 'গ্যালারি',
//             subMenu: [
//                 { name: 'ফটো গ্যালারি', path: '#' },
//                 { name: 'ভিডিও গ্যালারি', path: '#' },
//             ],
//             dropdownWidth: "150px"
//         },
//         { name: 'সুবর্ণজয়ন্তী কর্ণার', path: '#' },
//         { name: 'ভর্তি ফর্ম', path: '#' },
//         { name: 'পেমেন্ট', path: '#' },

//         { 
//             name: 'লগইন', 
//             subMenu: [
//                 { name: 'শিক্ষক লগইন', path: '#' },
//                 { name: 'শিক্ষার্থী লগইন', path: '#' },
//             ],     
//         },

//     ]

//     return (
//         <div className="container mx-auto bg-gray-120 px-27">

//             {/* 🏫 উপরের হেডার অংশ — লোগো ও প্রতিষ্ঠান নাম */}
//             <div className='bg-secondary h-[120px] px-5 flex justify-between items-center border-b-[0.5px] border-gray-500'>
//                 <div className='bg-white h-[100px]'>
//                     <img src={logo1} alt="logo1" className='h-[100px] w-[100px]' />
//                 </div>
//                 <div className='flex flex-col gap-3 items-center'>
//                     <h2 className='text-white text-3xl font-semibold'>Our Educational Institute</h2>
//                     <h2 className='text-white text-2xl font-semibold'>আমাদের শিক্ষা প্রতিষ্ঠান</h2>
//                 </div>
//                 <img src={logo2} alt='logo2' className='h-[100px] w-[100px]' />
//             </div>

//             {/* 🧭 নেভিগেশন মেনু সেকশন */}
//             <div className='border-b-[1px] border-b-slate-500 h-12 bg-primary '>
//                 <div className='flex items-center h-full'>
//                     <ul className='flex items-center h-full'>
//                         {
//                             // 🔁 সব মেনু লুপ করে দেখানো হচ্ছে
//                             menus.map((menu, index) => (
//                                 menu.subMenu ? (
//                                     // যদি submenu থাকে তাহলে dropdown তৈরি হবে
//                                     <li key={index} className='h-full flex items-center border-r-[0.5px] border-gray-500'>
//                                         <div className='relative h-full'>
//                                             <span onMouseEnter={() => handleShowDropdown(menu.name)} onMouseLeave={handleHideDropdown} className={`px-2 flex gap-1 items-center hover:cursor-pointer h-full hover:bg-secondary ${menu.routes?.includes(location.pathname) ? 'bg-secondary' : ''}`}>
//                                                 <span className='text-white font-normal'>{menu.name}</span>
//                                                 <MdKeyboardArrowDown color='white' size={22} className='font-bold mt-1' />
//                                                 {/* dropdown মেনু */}
//                                                 <ul style={{ width: menu.dropdownWidth }} className={`absolute left-0 top-[47px] min-w-[150px] border-[0.5px] border-gray-500 bg-primary shadow-xl transition-all duration-500 ease-in-out transform ${activeMenu === menu.name ? 'opacity-100 visible translat-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
//                                                     {menu.subMenu.map((submenu, id) => (
//                                                         <li key={id} className="border-b-[0.5px] border-gray-500">
//                                                             <Link to={submenu.path} className="block w-full px-3 py-2 text-white hover:bg-secondary transition-colors duration-200">
//                                                                 {submenu.name}
//                                                             </Link>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </span>
//                                         </div>
//                                     </li>
//                                 ) : (
//                                     // submenu না থাকলে সাধারণ লিংক হিসেবে দেখানো হবে
//                                     <li key={index} className={`h-full px-2 border-r-[0.5px] border-gray-500 flex items-center hover:bg-secondary ${location.pathname === menu.path ? 'bg-secondary' : ''}`}>
//                                         <Link to={menu.path} className='text-white font-normal'>
//                                             {menu.name}
//                                         </Link>
//                                     </li>
//                                 )
//                             ))
//                         }
//                     </ul>
//                 </div>
//             </div >

//             {/* 📰 নিউজ সেকশন (marquee ব্যবহার করা হয়েছে) */}
//             <div className="bg-primary h-[35px] flex items-center overflow-hidden">
//                 <div className="bg-gray-700 w-[80px] h-full text-white flex items-center justify-center">News</div>
//                 <div className="flex w-[1180px] h-full text-white flex items-center justify-center">
//                     <div className="flex gap-5 w-full">
//                         <marquee>This is my website. it is a Educational website.</marquee>
//                         <marquee>It works dynamically.</marquee>
//                     </div>
//                 </div>
//            </div>
//         </div>
//     )
// }

// export default Navbar
