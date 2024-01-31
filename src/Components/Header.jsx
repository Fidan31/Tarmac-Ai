import User from '/img/user.svg'

function Header() {
  return (
    <div className="  flex justify-between">
      <div className="flex gap-1 items-center">
        <div className=" flex gap-[2px] ">
          <div className="w-[2px] h-[12px] bg-[#ECFF0F]"></div>
          <div className="w-[2px] h-[12px] bg-[#ECFF0F]"></div>
        </div>

        <p className='text-[#FFFDFD] text-xs font-inter leading-loose font-bold'>Tarmac AI</p>
      </div>

      <div className="flex items-center">
        <span className="text-[#FDF7F7]">John</span>
        <img src={User} className=" w-6 ml-2" />
      </div>
    </div>
  );
}

export default Header;
