export default function Home() {
  return (
    <div className="w-full h-full font-rubik">
      <div className="flex flex-row justify-around items-center h-screen">
        <div>
          <p className="text-4xl font-medium">Good Food As Good Mood</p>
          <p className="w-[482px] text-xl font-normal break-word">
            {`I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.`}
          </p>
        </div>
        <div>
          <p>image</p>
        </div>
      </div>
    </div>
  );
}
