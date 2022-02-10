import CardRoundedShadow from './cardRoundedShadow';

export default function CostosCard(props) {
  return (
    <>
      <CardRoundedShadow className="m-4 md:col-span-1">
        <div className="bg-white h-60 md:h-64 p-6 rounded-2xl">
          <div className="text-gray-250 font-bold text-lg">
            {props.title}
          </div>
          <div className="flex flex-col mt-2">
            {props.subtitle}
          </div>
          <div className="flex flex-col mt-2 text-xs text-red-350">
           {props.message}
          </div>
        </div>
      </CardRoundedShadow>
    </>
  );
}
