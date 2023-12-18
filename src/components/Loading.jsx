
const Loading = () => {
  return (
    <div className=' px-6 py-10'>
       <div className=" flex flex-col gap-2">
        <div className=' h-6 w-full bg-white rounded-md animate-pulse duration-300 ease-in-out '></div>
        <div className=' w-full h-[300px] rounded-lg bg-white animate-pulse duration-300 ease-in-out'>

        </div>
        </div>
    </div>
  );
};

export default Loading;
