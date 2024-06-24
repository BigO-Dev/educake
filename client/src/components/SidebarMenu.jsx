import { SiGoogleclassroom } from 'react-icons/si'
import { LiaSchoolSolid } from 'react-icons/lia'
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb'

const SidebarMenu = () => {
  return (
    <div className='drawer lg:drawer-open '>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>{/* content */}</div>
    </div>
  )
}

export default SidebarMenu
