import avatar from '../icons/avatar.png';
export const Header = () => {
  return (
    <header className="h-20 bg-[#000000] flex justify-end">
      <div className="text-white pt-5 pb-5 pr-10 flex items-center gap-3">
        <img src={avatar} alt="avatar" />
        <span>Dima Kuzyberdin</span>
      </div>
    </header>
  );
};
