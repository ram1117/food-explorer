import Link from 'next/link';
import ImageSlideShow from '@/components/images/ImageSlideshow';

export default function Home() {
  const gradientTextStyle =
    'bg-gradient-to-r from-orange-600 via-orange-500 to-orange-300 inline-block text-transparent bg-clip-text';
  const linkStyle1 =
    'text-sm lg:text-base bg-transparent text-[#ff9b05] hover:text-[#f9b241] py-2 px-3 rounded-md text-center lg:min-w-40';
  const linkStyle2 =
    'text-sm lg:text-base bg-gradient-to-r from-[#f9572a] to-[#ff9b05] hover:from-[#fd4715] hover:to-[#f9b241] py-2 px-3 rounded-md text-text-primary text-center lg:min-w-40 font-semibold';
  return (
    <>
      <header className="flex flex-col md:flex-row gap-4 items-center md:items-start w-full md:justify-around mt-12 md:mt-30 mb-12">
        <ImageSlideShow />
        <div className="flex gap-4 lg:gap-8 flex-col sm:w-3/5 lg:w-1/2">
          <h1
            className={`${gradientTextStyle} text-xl lg:text-2xl font-bold uppercase`}
          >
            Welcome to Food Explorer
          </h1>
          <h3 className="text-sm lg:text-base">
            Your Ultimate Destination for Sharing and Discovering Delectable
            Recipes!
          </h3>
          <div className="flex justify-between">
            <Link href="/community" className={linkStyle1}>
              Join our community
            </Link>
            <Link href="/meals" className={linkStyle2}>
              Explore meals
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center">
        <section className="flex flex-col gap-4 lg:gap-8">
          <h2 className="text-center text-lg lg:text-2xl font-bold text-slate-100">
            How it works
          </h2>
          <p>
            Dive into a diverse collection of mouthwatering recipes crafted by
            passionate home chefs from around the globe. Whether you're a
            seasoned cook or a kitchen novice, our community welcomes everyone
            with open arms and hungry hearts.
          </p>
          <p>
            Have a secret family recipe or a unique twist on a classic dish?
            Spread the love by contributing your culinary creations! From
            appetizers to desserts, we celebrate the art of cooking in all its
            forms. Simply create an account, and start sharing your gastronomic
            gems with the world.
          </p>
          <p>
            Connect with fellow food enthusiasts, exchange tips, and engage in
            lively discussions. Whether you're seeking advice on perfecting a
            technique or looking for inspiration for tonight's dinner, our
            vibrant community is here to support and inspire you.
          </p>
        </section>
      </main>
    </>
  );
}
