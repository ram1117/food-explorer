import ImageWrapper from '@/atoms/ImageWrapper';
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
const CommunityPage = () => {
  const imageSize = 'h-32 w-32 md:w-40 md:h-40';
  const subHeaderStyle = "text-lg lg:text-xl font-semibold"
  const listItemStyle = "flex flex-col items-center gap-4 lg:gap-8"
  return (
    <>
      <header className="flex flex-col gap-4 items-center w-full md:justify-around mb-12">
        <h1 className="text-2xl lg:text-4xl font-bold">
          One shared passion:{' '}
          <span className="gradient-text-primary">Food</span>
        </h1>
        <p className='text-lg lg:text-xl font-seimbold'>Join our community and share your favorite recipes!</p>
      </header>
      <main className="text-center my-6 lg:my-12">
        <h2 className="text-lg lg:text-2xl font-bold my-8">Community Perks</h2>
        <ul className="flex flex-col items-center gap-4 lg:gap-12">
          <li className={listItemStyle}>
            <ImageWrapper
              src={mealIcon}
              alt="A delicious meal"
              imageSizes={imageSize}
              sizes="40vw"
            />
            <p className={subHeaderStyle}>Share & discover recipes</p>
          </li>
          <li className={listItemStyle}>
            <ImageWrapper
              src={communityIcon}
              alt="A crowd of people, cooking"
              imageSizes={imageSize}
              sizes="40vw"
            />
            <p className={subHeaderStyle}>
              Find new friends & like-minded people
            </p>
          </li>
          <li className={listItemStyle}>
            <ImageWrapper
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              imageSizes={imageSize}
              sizes="40vw"
            />
            <p className={subHeaderStyle}>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default CommunityPage;
