//"use client";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { CalendarIcon, ChevronLeft, ChevronRight, Filter } from "lucide-react";
// import React, { useState } from "react";
// import { format } from "date-fns";

// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const DatePicker = () => {
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [dateOpen, setDateOpen] = useState(false);
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: currentYear - 1999 }, (_, i) => 2000 + i);

//   const [advancedFilter, setAdvancedFilter] = useState<string>("");

//   // Format date for display
//   const formatDisplayDate = (date: Date) => {
//     return date.toLocaleDateString("en-US", {
//       weekday: "long",
//       day: "numeric",
//       month: "long",
//     });
//   };

//   const [date, setDate] = React.useState(formatDisplayDate(new Date()));
//   // Handle date change
//   const handleDateChange = (newDate: Date | undefined) => {
//     if (newDate) {
//       setSelectedDate(newDate);
//       setDate(formatDisplayDate(newDate));
//       setShowCalendar(false);
//     }
//   };

//   const handleMonthChange = (month: string) => {
//     const monthIndex = monthNames.indexOf(month);
//     setSelectedDate(new Date(selectedDate.setMonth(monthIndex)));
//   };

//   const handleYearChange = (year: string) => {
//     setSelectedDate(new Date(selectedDate.setFullYear(parseInt(year))));
//   };

//   // Handle previous day
//   const handlePreviousDay = () => {
//     const newDate = new Date(selectedDate);
//     newDate.setDate(newDate.getDate() - 1);
//     handleDateChange(newDate);
//   };

//   // Handle next day
//   const handleNextDay = () => {
//     const newDate = new Date(selectedDate);
//     newDate.setDate(newDate.getDate() + 1);
//     handleDateChange(newDate);
//   };

//   // Advance filter

//   return (
//     <>
//       <div className="relative flex md:min-w-[315px] justify-between items-center gap-4">
//         <Button variant="outline" size="icon" onClick={handlePreviousDay}>
//           <ChevronLeft className="h-4 w-4" />
//         </Button>
//         <Popover open={dateOpen} onOpenChange={setDateOpen}>
//           <PopoverTrigger asChild>
//             <Button
//               variant="outline"
//               className="text-xl font-semibold cursor-pointer"
//             >
//               {format(selectedDate, "PPP")}
//               <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent
//             className="w-auto p-0"
//             align="start"
//             side="bottom"
//             sideOffset={4}
//           >
//             <div className="flex flex-col p-2 gap-2">
//               <div className="flex gap-2 justify-between">
//                 <Select
//                   value={monthNames[selectedDate.getMonth()]}
//                   onValueChange={handleMonthChange}
//                 >
//                   <SelectTrigger className="w-[120px]">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent className="max-h-48 overflow-y-auto">
//                     {monthNames.map((month) => (
//                       <SelectItem key={month} value={month}>
//                         {month}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>

//                 <Select
//                   value={selectedDate.getFullYear().toString()}
//                   onValueChange={handleYearChange}
//                 >
//                   <SelectTrigger className="w-[90px]">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent className="max-h-48 overflow-y-auto">
//                     {years.map((year) => (
//                       <SelectItem key={year} value={year.toString()}>
//                         {year}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//               <Calendar
//                 mode="single"
//                 selected={selectedDate}
//                 onSelect={handleDateChange}
//                 month={selectedDate}
//                 onMonthChange={setSelectedDate}
//                 initialFocus
//                 className="rounded-md border"
//               />
//             </div>
//           </PopoverContent>
//         </Popover>
//         <Button variant="outline" size="icon" onClick={handleNextDay}>
//           <ChevronRight className="h-4 w-4" />
//         </Button>
//       </div>
//     </>
//   );
// };

// export default DatePicker;





import MaxWidth from '@/components/MaxWidth';
import ReusableCard from '@/components/ReusableCard';
import Hero from '@/widgets/home/Hero';
import React from 'react';
import t from '../../messages/en.json';
import { GoArrowUpRight } from "react-icons/go";


const Home: React.FC = () => {
  // services_section
  const title = t.services_home.title;
  const description = t.services_home.description;
  const services = t.services_home.services;

  return (
    <>
      {/* hero_section */}
      <section>
        <Hero />
      </section>
      {/* services_section */}
      <section className='bg-input'>
        <MaxWidth className='py-8'>
          <ReusableCard
            title={title}
            description={description}
            cardData={services}
            layoutGridClassName='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
            buttonIcon={<GoArrowUpRight />} 
          />
        </MaxWidth>
      </section>
    </>
  );
};

Home.displayName = 'Home';
export default Home;


