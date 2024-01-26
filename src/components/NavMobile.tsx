
import {navigation} from '../data';

type NavMobileProps = {
  isOpen:boolean
}

const NavMobile = ({isOpen}:NavMobileProps) => {
  return (
    <ul className={`${isOpen ? "h-[176px]":"h-[0px] py-0"}  text-sm flex flex-col transition-all overflow-hidden gap-6 p-3 shadow-xl rounded-md`}>
      {navigation.map((item,idx)=>{
        return <li className='' key={idx}><a href={item.href}>{item.name}</a></li>
      })}
    </ul>
  )
}

export default NavMobile