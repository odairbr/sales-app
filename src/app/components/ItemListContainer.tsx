import { Check, X } from 'lucide-react';

interface Item {
  id: number;
  title: string;
  amount: number;
  available: boolean;
}
interface ItenListProps {
  items: Item[];
}

 
export default function ItemListContainer({items}: ItenListProps)  {
  const listItem = items.map( item =>
          <li key={item.id}
      className={`p-4 border ${
        item.available 
        ? 'border-amber-400 bg-white/95 text-black-95' 
        : 'border-amber-800 bg-white/950 text-black-950'
      } transition-all`}
      >
      <div className="flex items-center gap-4">
        <div className={`${
          item.available 
            ? 'bg-amber-450 border-amber-95' 
            : 'bg-amber-50 border-amber-950'
        }`}>
          {item.available ? <Check /> : <X />}
        
      </div>

        <span className={`text-lg font-light tracking-wide ${
          item.available ? '' : 'line-through'
        }`}>
          {item.title}
        </span>
        <div className={` ${
          item.available 
            ? 'bg-amber-450 border-amber-95' 
            : 'bg-amber-50 border-amber-950'
        }`}>
          <span className={`text-lg font-light tracking-wide ${
            item.available ? '' : 'line-through'
          }`}>
            {item.amount}
          </span>
        </div>

      </div>
    </li>
  )

  return (
    <div className="bg-white/95 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50 p-8">
      <ul className="space-y-4">
        {listItem}
      </ul>
    </div>
  )

}