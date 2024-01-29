type ClassItemsProps = {
  list: { name: string; icon: JSX.Element }[];
};

const ClassItems = ({ list }: ClassItemsProps) => {
  return (
    <ul className="space-y-2">
      {list.map((item, idx) => {
        return (
          <li className="flex items-center gap-3 p-3 border" key={idx} >
            <div className="bg-green-100 p-1 rounded-full text-xl text-green-900">{item.icon}</div>{item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ClassItems;
