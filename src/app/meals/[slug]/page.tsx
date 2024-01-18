import ImageWrapper from "@/atoms/ImageWrapper";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

interface SlugPageProps {
  params: { slug: string };
}

export const generateMetadata = async ({ params }: SlugPageProps) => {
  const mealData = getMeal(params.slug);
  if (!mealData) {
    notFound();
  }
  return {
    title: mealData.title,
    description: mealData.summary,
  };
};

const SlugPage = ({ params }: SlugPageProps) => {
  const slug = params.slug;
  const mealData = getMeal(slug);
  if (!mealData) {
    notFound();
  }

  mealData.instructions = mealData.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className="flex flex-col sm:flex-row gap-4 lg:gap-8 justify-between">
        <ImageWrapper
          src={mealData.image}
          alt={`photo of ${mealData.title}`}
          imageSizes="aspect-square sm:aspect-none w-full sm:h-64 sm:w-72 self-center"
          className="shadow-sm rounded-md"
        />
        <div className="flex flex-col gap-1 lg:gap-4">
          <h1 className="text-2xl lg:text-4xl font-bold uppercase">
            {mealData.title}
          </h1>
          <p className="italic ">
            by{" "}
            <a
              className="gradient-text-primary"
              href={`mailto:${mealData.creator_email}`}
            >
              {mealData.creator}
            </a>
          </p>
          <p>{mealData.summary}</p>
        </div>
      </header>
      <main className="my-4 lg:my-8">
        <p
          className="bg-[#6e6464] text-[#13120f] rounded-md shadow-md p-4 text-base lg:text-lg font-medium animate-slide-right"
          dangerouslySetInnerHTML={{ __html: mealData.instructions }}
        />
      </main>
    </>
  );
};

export default SlugPage;
