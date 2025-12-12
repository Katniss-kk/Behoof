const SearchSvg = () => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.25 20.5C4.6 20.5 0 15.9 0 10.25C0 4.6 4.6 0 10.25 0C15.9 0 20.5 4.6 20.5 10.25C20.5 15.9 15.9 20.5 10.25 20.5ZM10.25 1.5C5.42 1.5 1.5 5.43 1.5 10.25C1.5 15.07 5.42 19 10.25 19C15.08 19 19 15.07 19 10.25C19 5.43 15.08 1.5 10.25 1.5Z"
        fill="#7E8794"
      />
      
      <path
        d="M20.2825 20.7825C20.0925 20.7825 19.9025 20.7125 19.7525 20.5625L17.7525 18.5625C17.4625 18.2725 17.4625 17.7925 17.7525 17.5025C18.0425 17.2125 18.5225 17.2125 18.8125 17.5025L20.8125 19.5025C21.1025 19.7925 21.1025 20.2725 20.8125 20.5625C20.6625 20.7125 20.4725 20.7825 20.2825 20.7825Z"
        fill="#7E8794"
      />
    </svg>
  );
};

export default function SearchInputUI() {
  return (
    <div className="flex gap-x-[12px] items-center py-[15px] px-[21px] bg-[var(--bg-input-color)] rounded-2xl">
      <SearchSvg />
      <input type="text" name="" id="" placeholder="Поиск товаров" />
    </div>
  );
}
