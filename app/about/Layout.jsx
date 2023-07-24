// import NavLink from "@/app/components/ui/NavLink";

function AboutLayout({ children }) {
  return (
    <section className=" flex justify-center items-center bg-red-300 py-24">
      <div className="container  border border-2 p-4 rounded ">
        <h6 className=" text-3xl font-serif">About Layout</h6>
        <div className="mt-6 text-lg">{children}</div>
      </div>
    </section>
  );
}
export default AboutLayout;

// <div className=" container flex">
//     <div className=" overflow-y-auto border-r border-gray-200 py-6 pr-12">
//         <nav className="flex flex-col">
//             <ul role="list" className="flex flex-1 flex-col gap-y-4">
//                 <li>
//                     <NavLink href="/about">About</NavLink>
//                 </li>
//                 <li>
//                     <NavLink href="/team">Team</NavLink>
//                 </li>
//                 <li>
//                     <NavLink href="/contact">Contact</NavLink>
//                 </li>
//             </ul>
//         </nav>
//     </div>
//     <main className=" grow ml-12 p-6 bg-gray-50">{childeren}</main>
// </div>
