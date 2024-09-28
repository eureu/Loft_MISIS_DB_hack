const StartPage = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "absolute bg-dark-blue-main dark:bg-dark-blue-main top-[72px] left-64 overflow-y-auto w-[calc(100%_-_261px)] h-[calc(100vh_-_72px)] left-[261px]"
          : "absolute bg-dark-blue-main dark:bg-dark-blue-main top-[72px] left-[72px] overflow-y-auto w-[calc(100%_-_72px)] h-[calc(100vh_-_72px)]"
      }
    >
      <div className="tags">
        <span>Главная</span>
        <span>Фильмы</span>
        <span>Сериалы</span>
        <span>Телешоу</span>
        <span>Блогеры</span>
        <span>Новости</span>
        <span>Музыка</span>
        <span>Спорт</span>
        <span>Подкасты</span>
        <span>Детям</span>
        <span>Тв онлайн</span>
      </div>
      <div className="scroll-news">
        <div className="image"></div>
      </div>
      <div className="popularChanels">
        <h2>Популярные каналы</h2>
        <div className="scroll-channels"></div>
      </div>
      <div className="forYou"></div>
    </div>
  );
};


export default StartPage;