const SidebarMenu = () => {
  return (
    <section className='w-1/6 h-screen bg-black p-4'>
      <h1 className='text-white text-center text-xl text-bold border-b-2 w-full p-4'>
        Omair
      </h1>
      <ul className='mt-8'>
        <li className='text-white text-center text-xl text-bold'>
          <a href=''>Classes</a>
        </li>
        <li className='text-white text-center text-xl text-bold'>Grades</li>
      </ul>
    </section>
  )
}

export default SidebarMenu
