export default function Divider(props ) {
  return (
    <div className={`w-[100%] flex justify-center ${props.className}`}>
      <div className="w-[90%] h-[2px] bg-white" />
    </div>
  );
}
