export default function Container(props) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2">{props.children}</div>
      </div>
    </div>
  );
}
