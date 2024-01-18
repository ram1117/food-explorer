import Link from "next/link";
import ImageSlideShow from "@/components/images/ImageSlideshow";

export default function Home() {
  const linkStyle1 =
    "text-sm lg:text-base gradient-text-primary py-2 px-3 rounded-md text-center lg:min-w-40";
  const linkStyle2 = "text-sm lg:text-base lg:min-w-40 link-style";
  return (
    <>
      <header className="flex flex-col md:flex-row gap-4 items-center md:items-start w-full md:justify-around mb-4 lg:mb-12">
        <ImageSlideShow />
        <div className="flex gap-4 lg:gap-8 flex-col sm:w-3/5 lg:w-1/2">
          <h1 className="gradient-text-primary text-xl lg:text-2xl font-bold uppercase">
            Welcome to Food Explorer
          </h1>
          <h3 className="text-sm lg:text-base">
            Your Ultimate Destination for Sharing and Discovering Delectable
            Recipes!
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
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
          <h2 className="text-center text-lg lg:text-2xl font-bold">
            How it works
          </h2>
          <p>
            Dive into a diverse collection of mouthwatering recipes crafted by
            passionate home chefs from around the globe. Whether you&apos;re a
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
            lively discussions. Whether you&apos;re seeking advice on perfecting
            a technique or looking for inspiration for tonight&apos;s dinner,
            our vibrant community is here to support and inspire you.
          </p>
        </section>
      </main>
    </>
  );
}
